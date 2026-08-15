import { WEBSITE_CATEGORIES } from '../src/data/websites.js'
import { WEBSITE_SHARE_IMAGES } from '../src/data/websiteShareImages.js'

const websites = WEBSITE_CATEGORIES.flatMap((category) => category.websites)
const results = new Array(websites.length)
let nextIndex = 0

function decodeHtml(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
}

function getAttribute(tag, attributeName) {
  const match = tag.match(
    new RegExp(`\\b${attributeName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'),
  )

  return match?.[1] ?? match?.[2] ?? match?.[3]
}

function extractSocialImage(html, pageUrl) {
  const candidates = new Map()
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? []

  for (const tag of metaTags) {
    const key = (getAttribute(tag, 'property') ?? getAttribute(tag, 'name'))?.toLowerCase()
    const content = getAttribute(tag, 'content')

    if (key && content && !candidates.has(key)) {
      candidates.set(key, decodeHtml(content.trim()))
    }
  }

  const imageValue = [
    'og:image:secure_url',
    'og:image',
    'og:image:url',
    'twitter:image',
    'twitter:image:src',
  ]
    .map((key) => candidates.get(key))
    .find(Boolean)

  if (!imageValue) {
    return null
  }

  try {
    return new URL(imageValue, pageUrl).href
  } catch {
    return null
  }
}

async function inspectWebsite(website, index) {
  if (WEBSITE_SHARE_IMAGES[website.url]) {
    results[index] = {
      name: website.name,
      url: website.url,
      image: WEBSITE_SHARE_IMAGES[website.url],
      cached: true,
    }
    return
  }

  let lastError

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(website.url, {
        headers: {
          accept: 'text/html,application/xhtml+xml',
          'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36',
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(25000),
      })

      const html = await response.text()
      results[index] = {
        name: website.name,
        url: website.url,
        image: extractSocialImage(html, response.url),
        status: response.status,
      }
      return
    } catch (error) {
      lastError = error
      await new Promise((resolve) => setTimeout(resolve, 600 * (attempt + 1)))
    }
  }

  results[index] = {
    name: website.name,
    url: website.url,
    image: null,
    error: lastError instanceof Error ? lastError.message : String(lastError),
  }
}

async function worker() {
  while (nextIndex < websites.length) {
    const index = nextIndex
    nextIndex += 1
    await inspectWebsite(websites[index], index)
  }
}

await Promise.all(Array.from({ length: 4 }, () => worker()))
process.stdout.write(JSON.stringify(results, null, 2))

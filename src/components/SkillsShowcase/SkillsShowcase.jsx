import './SkillsShowcase.css'

function SkillsShowcase({ title = 'Skills', categories }) {
  return (
    <section className="skills-showcase" aria-labelledby="skills-showcase-title">
      <div className="skills-showcase__inner">
        <h2 className="skills-showcase__title" id="skills-showcase-title">
          {title}
        </h2>

        <div className="skills-showcase__categories">
          {categories.map(({ title: categoryTitle, skills }) => (
            <section className="skills-showcase__category" key={categoryTitle}>
              <h3 className="skills-showcase__category-title">{categoryTitle}</h3>

              <ul className="skills-showcase__grid">
                {skills.map(({ name, icon: Icon, color, href }) => (
                  <li className="skills-showcase__item" key={name}>
                    <a
                      className="skills-showcase__link"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${name} official website (opens in a new tab)`}
                    >
                      <Icon
                        className="skills-showcase__icon"
                        style={{ '--skill-color': color }}
                        aria-hidden="true"
                      />
                      <span>{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsShowcase

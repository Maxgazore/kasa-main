import { useState } from 'react'
import { Banner } from '../components'

export function About() {
  const data = [
    {
      title: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont comformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      text: 'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
    },
    {
      title: 'Sécurité',
      text: 'La securité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les stantards sont bien respecté. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
  ]

  const [selected, setSelected] = useState(null)

  function toggle(i) {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <section className="about">
      <Banner image={'src/assets/images/about image.png'} />
      <div className="about__info">
        {data.map((item, i) => (
          <div key={item.title} className="about__info__part">
            <div className="about__info__part__collapser">
              <h2>{item.title}</h2>
              <i
                className="fa-solid fa-chevron-up fa-xl"
                onClick={() => toggle(i)}
              ></i>
            </div>
            <p
              className={
                selected == i
                  ? 'about__info__part__show'
                  : 'about__info__part__hide'
              }
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

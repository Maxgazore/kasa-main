import { useState } from 'react'

function About() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <section className="about">
      <img
        className="about__img"
        src="src/assets/images/about image.png"
        alt="Image d'un paysage"
      />
      <div className="about__info">
        <div className="about__info__part">
          <div className="about__info__part__collapser">
            <h2>Fiabilité</h2>
            <i
              className="fa-solid fa-chevron-up fa-xl"
              onClick={() => toggle(1)}
            ></i>
          </div>
          <p
            className={
              selected == 1
                ? 'about__info__part__show'
                : 'about__info__part__hide'
            }
          >
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont comformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
        <div className="about__info__part">
          <div className="about__info__part__collapser">
            <h2>Respect</h2>
            <i
              className="fa-solid fa-chevron-up fa-xl"
              onClick={() => toggle(2)}
            ></i>
          </div>
          <p
            className={
              selected == 2
                ? 'about__info__part__show'
                : 'about__info__part__hide'
            }
          >
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de pertubation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
        <div className="about__info__part">
          <div className="about__info__part__collapser">
            <h2>Service</h2>
            <i
              className="fa-solid fa-chevron-up fa-xl"
              onClick={() => toggle(3)}
            ></i>
          </div>
          <p
            className={
              selected == 3
                ? 'about__info__part__show'
                : 'about__info__part__hide'
            }
          >
            La qualité du service est au cœur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </div>
        <div className="about__info__part">
          <div className="about__info__part__collapser">
            <h2>Sécurité</h2>
            <i
              className="fa-solid fa-chevron-up fa-xl"
              onClick={() => toggle(4)}
            ></i>
          </div>
          <p
            className={
              selected == 4
                ? 'about__info__part__show'
                : 'about__info__part__hide'
            }
          >
            La securité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de
            vérifier que les stantards sont bien respecté. Nous organisons
            également des ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

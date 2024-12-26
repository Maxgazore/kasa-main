function About() {
  return (
    <section className="about">
      <img
        className="about__img"
        src="src/assets/images/about image.png"
        alt="Image d'un paysage"
      />
      <div className="about__info">
        <div className="about__info__btn">
          <button className="about__info__btn__collapse" type="button">
            Fiabilité
          </button>
          <p className="about__info__btn__text">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont comformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </div>
        <div className="about__info__btn">
          <button className="about__info__btn__collapse" type="button">
            Respect
          </button>
          <p className="about__info__btn__text">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de pertubation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </div>
        <div className="about__info__btn">
          <button className="about__info__btn__collapse" type="button">
            Service
          </button>
          <p className="about__info__btn__text">
            La qualité du service est au cœur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance.
          </p>
        </div>
        <div className="about__info__btn">
          <button className="about__info__btn__collapse" type="button">
            Sécurité
          </button>
          <p className="about__info__btn__text">
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

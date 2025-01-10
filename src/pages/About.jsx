import { Banner, Collapser } from '../components'

export default function About() {
  const data = [
    {
      id: 1,
      title: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont comformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      id: 2,
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      id: 3,
      title: 'Service',
      text: 'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.',
    },
    {
      id: 4,
      title: 'Sécurité',
      text: 'La securité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les stantards sont bien respecté. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    },
  ]

  return (
    <section className="about">
      <Banner classType={'about'} img={'src/assets/images/about_image.png'} />
      <div className="about__info">
        {data.map((item) => (
          <Collapser
            key={item.id}
            classType={'about'}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  )
}

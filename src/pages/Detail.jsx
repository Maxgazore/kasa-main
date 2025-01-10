import { useLocation } from 'react-router'
import { Collapser } from '../components'

export default function Detail() {
  let data = useLocation()
  let item = data.state.myItem
  return (
    <section className="detail">
      <div className="detail__banner">
        <img
          className="arrow arrow_left"
          src="../src/assets/images/arrow_left.png"
          alt="Flèche gauche"
        />
        <img
          className="arrow arrow_right"
          src="../src/assets/images/arrow_right.png"
          alt="Flèche droite"
        />
        <img
          className="detail__banner__img"
          src={item.pictures[0]}
          alt="Photo du logement"
        />
      </div>
      <div className="detail__info">
        <div className="detail__info__item">
          <h1>{item.title}</h1>
          <h2>{item.location}</h2>
          <div className="detail__info__item__tags">
            {item.tags.map((tag) => (
              <h4 key={tag}>{tag}</h4>
            ))}
          </div>
        </div>
        <div className="detail__info__identity">
          <h3>{item.host.name}</h3>
          <img src={item.host.picture} alt="Photo de l'hôte" />
        </div>

        <Collapser
          classType={'detail'}
          title={'Description'}
          text={item.description}
        />
        <Collapser
          classType={'detail'}
          title={'Équipements'}
          text={item.equipments}
        />
      </div>
    </section>
  )
}

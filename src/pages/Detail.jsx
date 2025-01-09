import { useLocation } from 'react-router'
import { Collapser } from '../components'

export default function Detail() {
  const location = useLocation()
  const { item } = location.state.from
  return (
    <section className="detail">
      <div className="detail__banner">
        <img
          className="arrow arrow_left"
          src="../assets/images/arrow_left"
          alt="Flèche gauche"
        />
        <img
          className="arrow arrow_left"
          src="../assets/images/arrow_right"
          alt="Flèche droite"
        />
        <img
          className="detail__banner__img"
          src={item.picture[0]}
          alt="Photo du logement"
        />
      </div>
      <div className="detail__info">
        <div>
          <h1>{item.title}</h1>
          <h2>{location}</h2>
          <div className="detail__info__tags">
            {item.tags.map((tag) => {
              ;<h4 className="detail__info__tags__text">{tag}</h4>
            })}
          </div>
        </div>
        <div>
          <h3>{item.host.name}</h3>
          <img src={item.host.picture} alt="Photo de l'hôte" />
        </div>
        <div>
          <Collapser
            classType={'detail'}
            title={'Description'}
            text={description}
          />
          <Collapser
            classType={'detail'}
            title={'Équipements'}
            text={equipments}
          />
        </div>
      </div>
    </section>
  )
}

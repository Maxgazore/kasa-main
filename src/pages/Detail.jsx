import { useLocation } from 'react-router'

import { Rating, Collapser, Slider } from '../components'

export default function Detail() {
  let data = useLocation()
  let item = data.state.myItem

  return (
    <section className="detail">
      <Slider item={item} />
      <div className="detail__info">
        <div className="detail__info__first">
          <div className="detail__info__first__item">
            <h1>{item.title}</h1>
            <h2>{item.location}</h2>
            <div className="detail__info__first__item__tags">
              {item.tags.map((tag) => (
                <h4 key={tag}>{tag}</h4>
              ))}
            </div>
          </div>
          <div className="detail__info__first__person">
            <div className="detail__info__first__person__identity">
              <h3>{item.host.name}</h3>
              <img src={item.host.picture} alt="Photo de l'hôte" />
            </div>

            <Rating ratingData={item.rating} />
          </div>
        </div>
        <div className="detail__info__second">
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
      </div>
    </section>
  )
}

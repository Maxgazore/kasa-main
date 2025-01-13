import { useLocation } from 'react-router'
import { useState } from 'react'
import { Rating, Collapser } from '../components'

export default function Detail() {
  let data = useLocation()
  let item = data.state.myItem
  const length = item.pictures.length
  const [i, setI] = useState(0)
  const displayStyle = item.pictures.length == 1 ? { display: 'none' } : null

  function slideActions(isLeft) {
    if (isLeft) {
      setI(i > 0 ? i - 1 : length - 1)
    } else {
      setI(i < length - 1 ? i + 1 : 0)
    }
  }

  return (
    <section className="detail">
      <div className="detail__slider">
        <img
          style={displayStyle}
          onClick={() => {
            slideActions(true)
          }}
          className="arrow arrow_left"
          src="src/assets/images/arrow_left.png"
          alt="Flèche gauche"
        />
        <img
          style={displayStyle}
          onClick={() => {
            slideActions(false)
          }}
          className="arrow arrow_right"
          src="src/assets/images/arrow_right.png"
          alt="Flèche droite"
        />
        <img
          className="detail__slider__img"
          src={item.pictures[i]}
          alt="Photo du logement"
        />
        <p className="detail__slider__count" style={displayStyle}>
          {i + 1 + '/' + item.pictures.length}
        </p>
      </div>
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

import { useState } from 'react'
import PropTypes from 'prop-types'

import arrowLeft from '../assets/images/arrow_left.png'
import arrowRight from '../assets/images/arrow_right.png'

export function Slider({ item }) {
  const length = item.pictures.length
  const [index, setIndex] = useState(0)
  //Disparition des flèches et du nombre d'image si length est egal à un
  const displayStyle = length == 1 ? { display: 'none' } : null

  //Fonction du slider selon si on clique sur la flèche gauche ou la flèche droite
  function slideActions(isLeft) {
    if (isLeft) {
      setIndex(index > 0 ? index - 1 : length - 1)
    } else {
      setIndex(index < length - 1 ? index + 1 : 0)
    }
  }
  return (
    <div className="detail__slider">
      <img
        style={displayStyle}
        onClick={() => {
          slideActions(true)
        }}
        className="arrow arrow_left"
        src={arrowLeft}
        alt="Flèche gauche"
      />
      <img
        style={displayStyle}
        onClick={() => {
          slideActions(false)
        }}
        className="arrow arrow_right"
        src={arrowRight}
        alt="Flèche droite"
      />
      <img
        className="detail__slider__img"
        src={item.pictures[index]}
        alt="Photo du logement"
      />
      <p className="detail__slider__count" style={displayStyle}>
        {index + 1 + '/' + length}
      </p>
    </div>
  )
}

Slider.propTypes = {
  item: PropTypes.object,
}

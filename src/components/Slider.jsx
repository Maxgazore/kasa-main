import { useState } from 'react'
import PropTypes from 'prop-types'

export function Slider({ item }) {
  const length = item.pictures.length
  const [index, setIndex] = useState(0)
  const displayStyle = item.pictures.length == 1 ? { display: 'none' } : null

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
        src="../src/assets/images/arrow_left.png"
        alt="Flèche gauche"
      />
      <img
        style={displayStyle}
        onClick={() => {
          slideActions(false)
        }}
        className="arrow arrow_right"
        src="../src/assets/images/arrow_right.png"
        alt="Flèche droite"
      />
      <img
        className="detail__slider__img"
        src={item.pictures[index]}
        alt="Photo du logement"
      />
      <p className="detail__slider__count" style={displayStyle}>
        {index + 1 + '/' + item.pictures.length}
      </p>
    </div>
  )
}

Slider.propTypes = {
  item: PropTypes.object,
}

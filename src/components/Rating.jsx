import PropTypes from 'prop-types'

export function Rating({ ratingData }) {
  //Donne une couleur aux etoiles si
  const getStarColor = (index) => {
    return index <= ratingData ? '#FF6060' : '#E3E3E3'
  }

  return (
    <div className="detail__info__first__person__rating">
      {/*Creation d'un tableau avec un operateur de decomposition*/}
      {[...Array(5)].map((_, index) => (
        <i
          key={index}
          className="fa-solid fa-star fa-lg"
          style={{ color: getStarColor(index + 1) }}
        ></i>
      ))}
    </div>
  )
}

Rating.propTypes = {
  ratingData: PropTypes.string,
}

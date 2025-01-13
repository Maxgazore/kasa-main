import PropTypes from 'prop-types'

export function Rating({ ratingData }) {
  const getStarColor = (i) => {
    return i <= ratingData ? '#FF6060' : '#E3E3E3'
  }

  return (
    <div className="detail__info__first__person__rating">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className="fa-solid fa-star fa-lg"
          style={{ color: getStarColor(i + 1) }}
        ></i>
      ))}
    </div>
  )
}

Rating.propTypes = {
  ratingData: PropTypes.string,
}

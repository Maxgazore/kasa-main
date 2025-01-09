import PropTypes from 'prop-types'

export function Banner({ classType, img, title }) {
  return (
    <div className={classType + '__banner'}>
      <img
        className={classType + '__banner__img'}
        src={img}
        alt="Image d'un paysage"
      />
      {title ? <h1 className="home__banner__title">{title}</h1> : null}
    </div>
  )
}

Banner.propTypes = {
  classType: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
}

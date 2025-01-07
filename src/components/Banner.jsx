export function Banner({ classType, image, title }) {
  return (
    <div className={classType + '__banner'}>
      <img
        className={classType + '__banner__img'}
        src={image}
        alt="Image d'un paysage"
      />
      {title ? <h1 className="home__banner__title">{title}</h1> : null}
    </div>
  )
}

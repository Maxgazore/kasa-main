export function Banner({ image, title }) {
  return (
    <div className="home__banner">
      <img className="home__banner__img" src={image} alt="Image d'un paysage" />
      {title?.length > 0 && <h1 className="home__banner__title">{title}</h1>}
    </div>
  )
}

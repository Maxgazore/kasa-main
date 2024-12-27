import { Link } from 'react-router'
import Data from '../assets/logements.json'

function Home() {
  return (
    <section className="home">
      <div className="home__banner">
        <img
          className="home__banner__img"
          src="src/assets/images/home image.png"
          alt="Image d'un paysage"
        />
        <h1 className="home__banner__title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="home__grid">
        {Data.map((item) => (
          <Link to={item.id} key={item.id} className="card">
            <img
              className="card__img"
              src={item.pictures[0]}
              alt="Photo de la location"
            />
            <h2 className="card__title">{item.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Home

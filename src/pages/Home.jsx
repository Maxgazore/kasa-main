import { Link } from 'react-router'
import Data from '../assets/logements.json'
import { Banner } from '../components'

export function Home() {
  return (
    <section className="home">
      <Banner
        image={'src/assets/images/home image.png'}
        title={'Chez vous, partout et ailleurs'}
      />
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

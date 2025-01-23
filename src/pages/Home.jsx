import { Link } from 'react-router'
import { Banner } from '../components'
import Data from '../assets/logements.json'

export default function Home() {
  return (
    <section className="home">
      <Banner
        classType={'home'}
        img={'src/assets/images/home_image.png'}
        title={'Chez vous, partout et ailleurs'}
      />
      <div className="home__grid">
        {Data.map((item) => (
          <Link
            to={'/detail/' + item.id}
            state={{ itemData: item }}
            key={item.id}
            className="card"
          >
            <div className="card__gradient"></div>
            <img
              className="card__img"
              src={item.cover}
              alt="Photo de la location"
            />

            <h2 className="card__title">{item.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}

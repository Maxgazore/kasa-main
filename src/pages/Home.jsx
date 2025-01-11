import Data from '../assets/logements.json'
import { Link } from 'react-router'
import { Banner } from '../components'

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
            to={'/' + item.id}
            state={{ myItem: item }}
            key={item.id}
            className="card"
          >
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

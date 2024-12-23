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
      <div className="home__grid"></div>
    </section>
  )
}

export default Home

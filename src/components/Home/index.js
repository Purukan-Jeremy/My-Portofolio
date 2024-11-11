import React from 'react'
import Image from '../../assets/images/image.png';

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-img">
          <img src={Image} alt="Home" />
        </div>
        <div className="home-content">
          <h1>Hi, It's <span>Purukan Jeremy</span></h1>
          <h3 className="typing-text">I'm a <span /></h3>
          <p>Buah mangga buah salak, Hello World</p>
          <div className="social-icons">
            <a href="#"><i className="fa-brands fa-linkedin" /></a>
            <a href="#"><i className="fa-brands fa-github" /></a>
            <a href="#"><i className="fa-brands fa-x-twitter" /></a>
            <a href="#"><i className="fa-brands fa-instagram" /></a>
          </div>
          <a href="#" className="btn">Hire Me Pls</a>
        </div>
      </section>
    </div>
  )
}

export default Home

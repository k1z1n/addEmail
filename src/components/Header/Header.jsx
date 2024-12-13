import React, { useState } from 'react';
import Image from 'next/image';
import Logotype from '../../assets/images/logo/logo.svg';
import MoreButton from '../UI/MoreButton/MoreButton';


const links = [
  {
    id:1,
    name: 'Для кого?',
    to: '#target-consumer',
  },
  {
    id:2,
    name: 'Программы',
    to: '#projects',
  },
  {
    id:3,
    name: 'Преимущества',
    to: '#services',
  },
  {
    id:4,
    name: 'Стоимость',
    to: '#versions',
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return(
    <header>
    <div className="container">
      <div className="container-mini">
        <div className="menu">
          <div>
            <a className="menu__logo" href="/">
                <Image src={Logotype} alt="Soft V"/>
                <p>Soft V</p>
            </a>
          </div>
          <div className="menu__toggle" onClick={toggleMenu}>
              <div className={`burger ${isMenuOpen ? 'open' : ''}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
            <nav className={`menu__nav ${isMenuOpen ? 'open' : ''}`}>
              <ul className="nav__list tag">
                {links.map((item) => (
                  <li key={item.id}>
                    <a className="nav__link heading-text" href={item.to}>
                      {item.name}
                    </a>
                  </li>
                ))}
                <li>
                  <MoreButton text="Подробнее" />
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;
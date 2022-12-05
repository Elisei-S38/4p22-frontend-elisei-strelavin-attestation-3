import './NavBar.css';
import { useEffect, useState } from 'react';
import React from 'react';
import CardItem from '../CardItem/CardItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const  [ filmList, setFilmList ] = useState([]);
  const [ filmGenre , setFilGenre ] = useState('all');
  
  useEffect(() =>{
    fetch('https://run.mocky.io/v3/2bbb0a37-3964-4ad0-9579-7df03084c97a')
      .then((response) => response.json())
      .then((result) => {
        setFilmList(result);
      });
}, []);

const [ searchValue, setSearchValue ] = useState('');

const filteredFilm = filmList.filter(item => {
  return item.title.toLowerCase().includes(searchValue.toLowerCase())
})

const filtered = filteredFilm.filter(film => {
  if (filmGenre !== 'all' && film.genre !== filmGenre) {
    return false;
  }
    return true;
  });

const basket = useSelector((state) => state.basket);

  return (
    <>
      <div className="container-nav">
          <div className="box-navigation">
            <button className='navigation indent-navigation' onClick= {() => setFilGenre(`all`)} >Все</button>
            <button className='navigation' onClick= {() => setFilGenre(`Комедия`)} >Комедия</button>
            <button className='navigation' onClick= {() => setFilGenre(`Приключения`)} >Приключения</button>
            <button className='navigation' onClick= {() => setFilGenre(`Фантастика`)}>Фантастика</button>
            <form>
              <input type="search" placeholder="Поиск по названию" className='input_search'
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </form>
          </div>
          <div className="box-favorites">
            <Link className='favorites' to='#'>Избранное:_{ Object.keys(basket).length } </Link>
          </div>
      </div>
      <div className='box-card'>
        {
          filtered.map((card, index) => {
                  return <CardItem key={index}
                              title={card.title}
                              id={card.id}
                              img={card.img}
                              description={card.description}
                              prop={card} />
          })
        }
      </div>
    </>
  );
};

export default NavBar;
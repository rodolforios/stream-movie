import React, { useState, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import Movie from '../components/Movie';


const Search = () => {

  const key = process.env.REACT_APP_IMDB_API_KEY



  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;
  //const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query`;

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, [])

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    }
    catch (e) {
      console.log(e);
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }


  return (
    <div className='absolute my-36 mx-0  '>


      <form className='flex justify-center items-center mb-12' onSubmit={searchMovie}>

        <input className='text-slate-500 p-2 rounded' type="search" placeholder='Buscar...' value={query} onChange={changeHandler} />
        <button className='mx-2  p-3 rounded  bg-orange-500 hover:bg-orange-400' ><BsSearch /></button>
      </form>

      <div >
        {movies.length > 0 ? (
          <div className=' flex justify-center '>
            <div className= '    w-4/5'>
            {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}

      </div>

    </div>
  )
}

export default Search
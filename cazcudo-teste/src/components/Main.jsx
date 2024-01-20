import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';




const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];



  let firstDate = new Date(movie?.release_date);

  let genres = [];
  for (let i in movie?.genres) {
    genres.push(movie?.genres[i].name)
  }

  useEffect(() => {
    axios.get(requests.requestAction).then((response) => {
      setMovies(response.data.results);
    });
  }, []);






  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };




  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.original_title}
        />
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold text-white'>{movie?.title}</h1>
          <div className='my-4'>
            <button className='border text-white border-gray-300 py-2 px-5 ml-0 hover:bg-orange-500 hover:border-orange-400' >
              Play
            </button>


            <div className='my-2  text-lime-500 font-bold'>{`Pontos ${movie?.vote_average.toFixed(1)}`}</div>


            <div className='text-gray-400 text-sm'>Lançamento: {firstDate.getFullYear()}</div>


          </div>
          <p className='text-gray-400 text-sm'>
            Sinopse:
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p>
          <p>{genres.join(', ')}</p>
        </div>
      </div>

    </div>
  );
};

export default Main;

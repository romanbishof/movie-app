import React, { useEffect, useState } from 'react';
import './Movies.css'
import { getMoviesAsync } from '../../redux/moviesSlice';
import { useSelector, useDispatch } from 'react-redux';
import Movie from './../movie/Movie';

const Movies = () => {

    const dispatch = useDispatch();
    const { movies } = useSelector((state) => state.movies);

    useEffect( () => {
        dispatch(getMoviesAsync())
    },[dispatch])

    
    return (
        <div className='movies'>
            {movies.map((movie) => {
                return(
                    <div className="movie" key={movie.id}>
                        <Movie movie={movie} />
                    </div>
                )
            })}
        </div>
    );
};

export default Movies;
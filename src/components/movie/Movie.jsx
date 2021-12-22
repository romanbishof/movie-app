import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMovie } from '../../redux/moviesSlice'
import './Movie.css'

const Movie = ({movie}) => {
    const dispatch = useDispatch()

    const watchMovie = (movieId) =>{
        dispatch(getMovie(movieId))
        
    }
    
    return (
        <div className='movie'>
            <span className="title">{movie.name}</span>
            <Link to='/play'>
                <img src={movie.image.original} alt="" onClick={()=> watchMovie(movie.id)}/>
            </Link>
        </div>
    );
};

export default Movie;
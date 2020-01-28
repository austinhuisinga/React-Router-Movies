import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = props => {
  const movie = props.movie;
  const { title, director, metascore, stars } = movie;
  return(
    <div className="save-wrapper">
    <div className="movie-card">
      <h2>{title}</h2>
      <NavLink to={`/movies/${movie.id+1}`}>Next</NavLink>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    {props.addToSavedList && 
    <div onClick={event => {
      event.preventDefault();
      props.addToSavedList(movie);
    }}
      className='save-button'>Save</div>}

  </div>
    
  )
};

export default MovieCard;


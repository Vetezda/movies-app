import React from 'react'

export const MovieCard = ({title, poster_path}) => {

    const imgURL = 'http://image.tmdb.org/t/p/w300' + poster_path;
  return (
    <li className='movieCard'> 
        <img 
            width={230}
            height={345}
            className='movieImage' 
            src={imgURL} 
            alt={title} />
            
        <div>{title}</div> 
    </li>
  )
}



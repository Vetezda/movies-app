import movies from '../../data/movies.json';
import { MovieCard } from './MovieCard';
import { MovieCardResponsive } from './MovieCardResponsive';

export const MoviesList = () => {
  return (
    <>
        <div className="movieList">
          {
              movies.map( movie =>(
                      <MovieCard
                          key={movie.id}
                          {...movie} 

                          />
              ))   
          }
      </div>
      <div className="movieList-Respon">
          {
              movies.map( movie =>(
                      <MovieCardResponsive
                          key={movie.id}
                          {...movie} 

                          />
              ))   
          }
      </div>
    </>

  )
}

import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleDown, faCircleChevronDown, faStar} from '@fortawesome/free-solid-svg-icons';

export const MovieCardResponsive = ({title, poster_path, backdrop_path, vote_average, overview}) => {

    const imgURL = 'http://image.tmdb.org/t/p/w300' + poster_path;
    const imgBannerURL = 'http://image.tmdb.org/t/p/w300' + backdrop_path;
    
    const [activeDes, setActiveDes] = useState('card__description');  
    
    const [active, setActive] = useState('');
    const dropToggle = () => {
        active === 'drop-rotate' ? setActive('') : setActive('drop-rotate');
        activeDes === 'card__description' ? setActiveDes('drop-active') : setActiveDes('card__description');
    }    

  return (

          <div className="c-card">
              <div className="card">
                <div className="card">


                    <div className="card__banner">
                        <div className="background">
                            <div className="c-background">
                                <div className="card__poster">
                                    <img
                                        className='movieImage' 
                                        src={imgURL} 
                                        alt={title} />
                                </div>
                                <div className="card__banner__content">
                                    <div className="content">

                                        <h3 className="content__title">{title}</h3>
                                        <p className="content__genres">Drama, comedia . 1h 10m</p>
                                        <div className="content__widgets">
                                            <span><FontAwesomeIcon icon={faArrowCircleDown} /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                                        <div className="content__vote"><p>{vote_average}</p></div>
                        </div>
                        <img
                            src={imgBannerURL} 
                            alt={title} />
                        <div className="drop">
                            <span ><FontAwesomeIcon className={active} onClick={dropToggle} icon={faCircleChevronDown} /></span>
                        </div>
                    </div>

                    <div className={activeDes}>
                        <div className="c-card__description">
                            <div className="c-card__description__texto">
                                <h1>Resumen</h1>
                                <p>{overview}</p>
                            </div>
                        </div>
                    </div>

                </div>
              </div>
          </div>
  )
}
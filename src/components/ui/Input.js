import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export const Input = () => {
  return (
    <form className="search__bar">
        <input type="text" className="search__txt" name="q" autoComplete="off" placeholder="Buscar películas"/>
        <button type="submit" className="" >
        <FontAwesomeIcon icon={faMagnifyingGlass} />

        </button>
    </form>

  )
}

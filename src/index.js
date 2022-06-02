import {createRoot} from 'react-dom/client';
import './index.css';
import { MoviesApp } from './MoviesApp';
import './styles/styles.scss';
createRoot(
  document.getElementById('root')
).render(
  <MoviesApp />,
);
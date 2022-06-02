import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MoviesScreen } from "../components/movies/MoviesScreen";
import { Navbar } from "../components/ui/Navbar";


export const AppRouter = () => {
  return (
 
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/movies" element={<MoviesScreen />} />

            <Route path="*" element={<MoviesScreen />} />
        </Routes>
      </BrowserRouter>
   
  )
}
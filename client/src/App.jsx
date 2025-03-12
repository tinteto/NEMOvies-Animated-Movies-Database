import { Routes, Route } from 'react-router';
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Catalog from './components/catalog/Catalog'
import MovieDetails from './components/movie-details/MovieDetails'
import CreateMovie from './components/create-movie/CreateMovie'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import PageNotFound from './components/page-not-found/PageNotFound'



function App() {
  return (
    <>
<Header />

<main>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/catalog" element={<Catalog />} />
  <Route path="/catalog/:movieId/details" element={<MovieDetails />} />
  <Route path="/create-movie" element={<CreateMovie />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
</main>

<Footer />

</>
  )
}

export default App

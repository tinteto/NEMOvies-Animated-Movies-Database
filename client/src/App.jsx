import { Routes, Route } from 'react-router';
import './App.css'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import CreateMovie from './components/create-movie/CreateMovie'
import Catalog from './components/catalog/Catalog'
import MovieDetails from './components/movie-details/MovieDetails'
import EditMovie from './components/edit-movie/EditMovie';
import About from './components/about/About'
import Footer from './components/footer/Footer'
import PageNotFound from './components/page-not-found/PageNotFound'
import { useState } from 'react';



function App() {
const [email, setEmail] = useState('');

const userLoginHandler = (authData) => {
  setEmail(authData.email); //State: "admin@abv.bg"
}



  return (
<>
<Header />

<main>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login onLogin={userLoginHandler}/>} />
  <Route path="/register" element={<Register />} />
  <Route path="/create-movie" element={<CreateMovie />} />
  <Route path="/catalog" element={<Catalog />} />
  <Route path="/catalog/:movieId/details" element={<MovieDetails />} />
  <Route path="catalog/:movieId/edit" element={<EditMovie />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
</main>

<Footer />

</>
  )
}

export default App

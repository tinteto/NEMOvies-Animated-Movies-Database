import './App.css'
import { Routes, Route } from 'react-router'
import { useState } from 'react'
import { UserContext } from './contexts/userContext'
import usePersistedState from './apiHooks/usePersistedState'
import { ToastContainer } from 'react-toastify';

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import UserProfile from './components/userProfile/UserProfile'
import CreateMovie from './components/create-movie/CreateMovie'
import Catalog from './components/catalog/Catalog'
import MovieDetails from './components/movie-details/MovieDetails'
import EditMovie from './components/edit-movie/EditMovie'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import Logout from './components/logout/Logout'
import PageNotFound from './components/page-not-found/PageNotFound'
import AuthGuard from './components/guards/authGuard'
import UserGuard from './components/guards/userGuard'


function App() {

const [authData, setAuthData] = usePersistedState('auth',{}); //stateKey

const userLoginHandler = (authDataResult) => {
  setAuthData(authDataResult); //запазваме във стейтa информацията за user-a, която ни връща сървъра
}

const userLogoutHandler = () => {
  setAuthData({}); //initial data = {}, зачистваме state-a
}


//{...authData} спредваме данните, за да имаме директен достъп до всички пропъртита и изпращаме надолу по дървото и loginHandler-a
  return (
<UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}> 
<>
<Header />

<main>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/catalog" element={<Catalog />} />
  <Route path="/catalog/:movieId/details" element={<MovieDetails />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<PageNotFound />} />

  <Route element={<UserGuard />}>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  </Route>


  <Route element={<AuthGuard />}>
    <Route path="/my-profile" element={<UserProfile />}/>
    <Route path="/create-movie" element={<CreateMovie />} />
    <Route path="catalog/:movieId/edit" element={<EditMovie />} />
    <Route path="/logout" element={<Logout />} />
  </Route>
</Routes>
</main>

<Footer />

<ToastContainer />

</>
</UserContext.Provider>
  )
}

export default App

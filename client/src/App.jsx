import { Routes, Route } from 'react-router';
import './App.css'

import Header from './components/header/Header'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'
import PageNotFound from './components/pageNotFound/PageNotFound'
import Home from './components/home/Home';
import Create from './components/create/Create';

function App() {
  return (
    <>
<Header />

<main>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/create" element={<Create />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<PageNotFound />} />
</Routes>
</main>

<Footer />

</>
  )
}

export default App

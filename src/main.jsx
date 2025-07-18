 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Blogs from './components/Blogs.jsx'
import Courses from './components/Courses.jsx'
import Event from './components/Event.jsx'
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='blog' element={<Blogs/>} />
      <Route path='course' element={<Courses/>}/>
      <Route path='event' element={<Event/>} />
             
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
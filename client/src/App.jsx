import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Layout from './Pages/Admin/Layout'
import Dashboard from './Pages/Admin/Dashboard'
import AddBlog from './Pages/Admin/AddBlog'
import ListBlog from './Pages/Admin/ListBlog'
import Comments from './Pages/Admin/Comments'
import Login from './Components/Admin/Login'
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast';
import { useAppContext } from './context/AppContext'


const App = () => {

  const {token} = useAppContext();
  console.log("APP TOKEN:", token);

  return (
    <>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/admin' element={token ? <Layout/> : <Login/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='addBlog' element={<AddBlog/>}/>
        <Route path='listBlog' element={<ListBlog/>}/>
        <Route path='comments' element={<Comments/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

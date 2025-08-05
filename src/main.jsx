import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Protected} from './components'
import { Home, AllPosts, AddPost, EditPost, Post, Login, Signup } from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<Home />} />
      <Route path='/login' element={
        <Protected authentication={false}>
          <Login />
        </Protected>
      } />
      <Route path='/signup' element={
        <Protected authentication={false}>
          <Signup />
        </Protected>
      } />
      <Route path='/all-posts' element={
        <Protected authentication={true}>
          <AllPosts />
        </Protected>
      } />
      <Route path='/add-post' element={
        <Protected authentication={true}>
          <AddPost />
        </Protected>
      } />
      <Route path='/edit-post/:slug' element={
        <Protected authentication>
          <EditPost />
        </Protected>
      } />
      <Route path='/post/:slug' element={
        <Protected authentication>
          <Post />
        </Protected>
        } />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  // </StrictMode>,
)
import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import service from "./appwrite/confg";
import { login, logout } from "./store/authSlice";
import { setPosts } from "./store/postSlice";
import { Header, Footer } from "./components"
import { Outlet } from "react-router-dom"
import './index.css'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.status)

  useEffect(() => {

    const fetchInitialData = async () => {
      try {
        const userData = await authService.getCurrentUser()
        if (userData) {
          dispatch(login({ userData }))
        }
      } catch (error) {
        dispatch(logout())
      }

      try {
       const posts = await service.getPosts();
       if(posts?.documents){
        dispatch(setPosts(posts.documents))
       }
      } catch (error) {
        console.log("Error loading posts", error);
        
      }
      setLoading(false)
    }

    fetchInitialData()
  }, [isLoggedIn,dispatch])

  return loading ?
    (
      <div className="min-h-screen bg-[#70566D] flex flex-wrap justify-center items-center">
        <h1 className="text-5xl fill-slate-800 font-extrabold text-white m-auto">Getting Started...</h1>
      </div>
    )
    :
    (
      <div className="min-h-screen bg-[#70566D] flex flex-wrap">
        <div className="w-full flex flex-col">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    )
}

export default App

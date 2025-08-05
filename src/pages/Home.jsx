import React, { useState } from 'react'
import { Container, PostCard } from '../components'
import { useEffect } from 'react'
import service from '../appwrite/confg'
import { useSelector } from 'react-redux'


function Home() {

    const posts = useSelector((state) => state.post.posts)
    
    const isLoggedIn = useSelector((state) => state.auth.status)
    if (!isLoggedIn) {
        return (
            <div className="flex items-center justify-center min-h-[60vh] text-center">
                <h1 className="text-2xl text-[#6A3B5F] font-bold hover:text-gray-500">
                    Login to read posts!
                </h1>
            </div>

        )
    }
    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl
                                font-bold hover:text-gray-500'>
                                No Posts To Show
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className="w-full py-8">
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full  sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
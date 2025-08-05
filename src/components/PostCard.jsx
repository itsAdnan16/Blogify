import React from 'react'
import service from '../appwrite/confg'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    // console.log(featuredImage);
    // console.log("Preview URL:", service.getFileView(featuredImage));

    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-[#DAF7DC] rounded-xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={service.getFileView(featuredImage)} alt={title}
                        className='rounded-xl w-full h-40 object-cover' />
                </div>
                <h2
                    className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard

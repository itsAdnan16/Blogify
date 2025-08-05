import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/confg'
import { Container, Button } from '../components'
import parse from 'html-react-parser'
import { deletePost as del } from '../store/postSlice'

function Post() {
    const [post,setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector((state)=>state.auth.userData)

    // console.log(userData);
    const userId = userData.$id ? userData.$id : userData.userData.$id
    const isAuthor = post && userData ? post.userId === userId : false;
    // console.log(isAuthor);
    
    useEffect(()=>{

        if(slug){
            service.getPost(slug).then((post)=>{
                if(post) setPost(post);
                else navigate('/');
            })
        }else{
            navigate('/')
        }

    },[slug, navigate])

    const deletePost = () => {
        service.deletePost(post.$id).then((status)=>{
            if(status){
                service.deleteFile(post.featuredImage);
                dispatch(del(post.$id))
                navigate('/')
            }
        })
    }

  return post ? (
    <div className='py-8'>
        <Container > 
        <div className="flex flex-wrap justify-center">
            <div className=" h-1/2 flex justify-center mb-4 relative border rounded-xl p-2">
                <img
                    src={service.getFileView(post.featuredImage)}
                    alt={post.title}
                    className='rounded-xl w-full'
                />

                {isAuthor && (
                    <div className="absolute right-6 top-6">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button
                                bgColor="bg-green-500"
                                className="mr-3"
                            >
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" 
                                onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <div className="w-full mb-6">
                <h1 className='text-2xl font-bold'>
                    {post.title}
                </h1>
            </div>
            <div className='browser-css'>
                {parse(post.content)}
            </div>
        </div>
        </Container>
    </div>
  ) : null
}

export default Post
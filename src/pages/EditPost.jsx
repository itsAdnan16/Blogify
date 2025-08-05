import React,{useEffect,useState} from 'react'
import { Container,PostForm } from '../components'
import service from '../appwrite/confg'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post,setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      console.log(slug);
      
      if(slug){
        service.getPost(slug).then((post)=>{
            if(post){
                setPost(post)
            }
        })
      }else{
        navigate('/')
      }
      
    }, [slug,navigate])
    

    return (
        <div className='py-8'>
            <Container>
                {post ? (
                    <PostForm post={post} />
                ) : (
                    <p className='text-center'>Loading post...</p>
                )}
            </Container>
        </div>
    )
}

export default EditPost
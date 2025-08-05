import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../'
import service from '../../appwrite/confg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addPost, deletePost} from '../../store/postSlice'

function PostForm({ post }) {
    
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.auth.userData)
    const userId = userData.$id ? userData.$id : userData.userData.$id

    const submit = async (data) => {
        // console.log(data)
        if (post) {

            const file = data.image[0] ? service.uploadFile(data.image[0]) : null

            if (file) service.deleteFile(post.featuredImage);

            const dbPost = await service.updatePost(post.$id, { ...data, featuredImage: file ? file.$id : undefined })

            if (dbPost) {
                dispatch(deletePost(dbPost.$id))
                dispatch(addPost(dbPost))
                navigate(`/post/${dbPost.$id}`)
            }

        } else {
            const file = await service.uploadFile(data.image[0])
            // console.log(userData);
            if (file) {
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await service.createPost({
                    ...data,
                    userId: userId,
                })
                if (dbPost) {
                    dispatch(addPost(dbPost))
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')

        return ""

    }, [])


    useEffect(() => {
        const subscription = watch((val, { name }) => {
            if (name === 'title')
                setValue('slug', slugTransform(val.title), { shouldValidate: true })

        })

        return () => {
            subscription.unsubscribe()
        }
    }, [watch, slugTransform, setValue])

    return (

        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='w-2/3 px-2'>
                <Input
                    label="Title :"
                    placeholder="Title"
                    className='mb-4'
                    {...register('title', { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className='mb-4'
                    {...register('slug', { required: true })}
                    readOnly
                />
                <RTE
                    control={control}
                    name="content"
                    label="Content :"
                    defaultValue={getValues('content')} />
            </div>
            <div className='w-1/3 px-2'>
                <Input
                    label="Featured Image :"
                    type="file"
                    className='mb-4'
                    accept="image/*"
                    {...register('image', { required: !post })}
                />
                {post && (
                    <div className='w-full mb-4'>
                        <img
                            src={service.getFileView(post.featuredImage)}
                            alt={post.title}
                            className='rounded-lg'
                        />
                    </div>
                )}
                <Select
                    options={['active', 'inactive']}
                    label="Status :"
                    className='mb-4'
                    {...register('status', { required: true })}
                />
                <Button type='submit'
                    bgColor={post ? 'bg-green-500' : undefined}
                    className='w-full'>
                    {post ? 'Update Post' : 'Create Post'}
                </Button>
            </div>
        </form>

    )
}

export default PostForm
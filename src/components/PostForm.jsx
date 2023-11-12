import React, {useCallback, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Button, Input, Select, RTE} from "../index.js";
import appwriteService from "../appwrite/config.js";
import { useForm } from 'react-hook-form';    

function PostForm({post}) {

    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active"
        }
    });

    const navigate = useNavigate();
    const userData = useSelector( (state) => state.userData );
    const submit = async (data) => {
        const file = data.image[0] ? appwriteService.uploadFile(data.image[0]) : null;
        if (post) {
            if (file) {
                await appwriteService.deleteFile(post.featuredImage);
            }
            const updatePost = await appwriteService.updatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : post.featuredImage
            })
            if (updatePost) {
                navigate(`/post/${updatePost.$id}`)
            }
        }  else {
            if (file) {
                const fileId = file.$id
                data.featuredImage = 
            } 
        }

    }
    



    return (
        <div>PostForm</div>
    )
}

export default PostForm
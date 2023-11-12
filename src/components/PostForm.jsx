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
    const userData = useSelector( (state) => state.userData )
    



    return (
        <div>PostForm</div>
    )
}

export default PostForm
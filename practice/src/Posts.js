import React, {useEffect, useContext} from 'react';
import { Context } from './Store';
import data from './dummyData.js'

const Posts = () => {
    const [state, dispatch] = useContext(Context)
    useEffect(() => {
        dispatch({ type: 'SET_POSTS', payload: data})
    }, [])
    let {posts} = state
    if (posts.length > 0) {
        console.log('posts length > 0', posts)
        return (
            <div>
                {posts.map(post => {
                return <div key={post}>Post {post}</div>
                 })}
            </div>
        )
    } else {
        console.log('posts length 0', posts)
        return (
            <div>Loading...</div>
        )
    }
}

export default Posts;
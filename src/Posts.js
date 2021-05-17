import React, { useEffect, useContext } from 'react';
import { Context } from './Store';
import data from './dummyData.js'

const Posts = () => {
    console.log('🏠 POSTS RUN')
    const test = useContext(Context)
    console.log('🟢 useContext return:', test)
    const [state, dispatch] = test
    // const [state, dispatch] = useContext(Context)
    // console.log('posts dispatch func:', dispatch)
    // useContext grabs current store values of state & dispatch
    useEffect(() => {
        console.log('🟢 useEffect dispatch run...')
        dispatch({ type: 'SET_POSTS', payload: data })
        // useEffect runs dispatch once, which runs reducer, which updates Posts with new state
    }, [dispatch])
    let { posts } = state
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
        console.log('posts length === 0', posts)
        return (
            <div>Loading...</div>
        )
    }
}

export default Posts;
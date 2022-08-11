import React, { useEffect, useReducer } from 'react'

const initValues = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                loading: false,
                post: action.result,
                error: ''
            }
        case "FAIL":
            return {
                loading: false,
                post: {},
                error: 'There was a problem USEREDUCER'
            }

        default:
            return state
    }
}

export default function GetPostUseReducer() {

    const [state, action] = useReducer(reducer, initValues)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                action({ type: "SUCCESS", result: data })
            })
            .catch(() => {
                action({ type: "FAIL" })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'loading....' : state.post.title}
            {state.error || null}
        </div>
    )
}

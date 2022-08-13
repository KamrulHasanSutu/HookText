import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h2>404</h2>

            <h4>not found</h4>
            <Link to='/' className='btn btn-success'>Back home</Link>

        </div>
    )
}

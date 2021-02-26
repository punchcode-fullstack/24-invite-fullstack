import React, { useEffect } from 'react'
import axios from 'axios'

export default function InvitePage() {
    // refactor to use slice
    useEffect(() => {
        axios.get('/testing')
        .then(resp => {
            console.log(resp)
        })
    }, [])
    return (
        <div>invite</div>
    )
}
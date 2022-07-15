import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
    // storing access, refresh and expires tokens
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()


    useEffect(() => {
        // at port 3001, we need to go to login route and post some data which will be our code. Will code all code on server, get our response here
        console.log('LOOK HERE code!!!', code);
        axios
        .post("http://localhost:3001/login", {
            code,
        })
        .then(res => {
            console.log(res.data)
            window.history.pushState({}, null, "/")
        })
            // if we have error redirect user back to login page
        // })
        // .catch(() => {
        //     window.location = "/";
        // })
    }, [code])
}
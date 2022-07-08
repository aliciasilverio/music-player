const express = require('express');
const cors = require('cors');
const SpotifyWebApi = require('spotify-web-api-node');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('login', (req, res) => {
    const code = request.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'ad83f1d743b14e8c95147919a61b8c4f',
        clientSecret: '5e4ad69013e844af9c71d0fd9f4af1fd',
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refresh_token: data.body.refresh_token,
            expires_in: data.body.expires_in

        })
    }) .catch(() => {
        res.sendStatus(400);
})
        
})

app.listen(3001);

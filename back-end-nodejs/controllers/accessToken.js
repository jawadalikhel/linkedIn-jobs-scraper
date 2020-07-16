const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/test', async (req, res) =>{
    try {
      let accountCode = await req.headers.referer.slice(39, req.headers.referer.length - 16);
      const userToken = await fetch (`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${accountCode}&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate&client_id=86js0zudl3o6gz&client_secret=nEw9jiA5h5iWD7jc`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      await userToken.json()
      .then(async(result) =>{
        await res.json({
          status: 200,
          data: result
        })
      }).catch((err) =>{
        res.json({
          status: 400,
          data: err.message
        })
      })
    } catch (error) {
      res.json({
        status: 400,
        data: error.message
      })
    }
  });

module.exports = router;
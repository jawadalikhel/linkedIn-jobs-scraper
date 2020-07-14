const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.post('/test', async (req, res) =>{
    // console.log(req, '<--- reqqq')
    try {
      await console.log(req.body.code, 'HELLLOOO')
      // let accountCode = await req.body.code;

      const userToken = await fetch (`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${req.body.code}&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate&client_id=86js0zudl3o6gz&client_secret=nEw9jiA5h5iWD7jc`)
      // await console.log(userToken, '<--- userToken')
      // await console.log('BYEEEEEE')
      userToken.json()
      .then((result) =>{
        console.log(result, '<---- result')
        res.json({
          status: 200,
          data: result
        })
      })
      // res.send({
      //   status: 200,
      //   data: 'code accepted'
      // })
    } catch (error) {
      res.json({
        status: 400,
        data: error.message
      })
    }
  });

module.exports = router;
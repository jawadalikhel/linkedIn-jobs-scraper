const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const Admin = require("firebase-admin")
const fetch = require('node-fetch');

Admin.initializeApp();

exports.saveLinkedInTokenToDB = functions.https.onRequest(async (req, res) => {
    await cors(req, res, async () => {
        try {
            let accountCode = await req.headers.referer.slice(65, req.headers.referer.length - 16);
            const userToken = await fetch (`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${accountCode}&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate&client_id=86js0zudl3o6gz&client_secret=nEw9jiA5h5iWD7jc`, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            })
            await userToken.json()
            .then(async(result) =>{
                const db = Admin.firestore()
                await db.collection('Users').doc('token').set({ data: result })
                .then(async(result) =>{
                    await res.json({
                        status: 200,
                        data: result
                    })
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
    })
})

exports.findJobs = functions.https.onRequest(async (req, res) => {
    await cors(req, res, async () => {
        try {
            // let db = Admin.firestore()
            // await db.collection('Users').doc('token')
            // .get()
            // .then((result) =>{

            // })

            let url = 'https://api.linkedin.com/v1/job-search?keywords=quality'

            const getAllJobs = fetch(url, {
                headers: {
                  'token': 'AQXT9lT1WWGisDVzUaG21Ea1As574we_zKFAaxzW2dY6BPhftGc9cfS2YrB1kC1EuMVwQqge7OeMyc0uFoF5SSpBQsO6L5Ofs4YopudDmKecbpwEloEV3SbrSPdrgy3z1J6zVitw-eNlIg4HuMvrf7kOcx16_lKmZDUr4hZO4R1CtKK4geYoU8FExiOZsWIgA_E0PDBKH0Hl9zeQnryWDQIIhEUeGydMlV8i_LDYq5Ddov2hChGXWhBCbVaWF_tOT-QZN6uk8MEKUGrqNRN531-QJzJfWnTZqiEGyLS6-A15x21S-fXFJqdRUwkHsUGh4hZOr9GKgr7X_Hu2wjO7bHK5dxLxeA',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer AQXT9lT1WWGisDVzUaG21Ea1As574we_zKFAaxzW2dY6BPhftGc9cfS2YrB1kC1EuMVwQqge7OeMyc0uFoF5SSpBQsO6L5Ofs4YopudDmKecbpwEloEV3SbrSPdrgy3z1J6zVitw-eNlIg4HuMvrf7kOcx16_lKmZDUr4hZO4R1CtKK4geYoU8FExiOZsWIgA_E0PDBKH0Hl9zeQnryWDQIIhEUeGydMlV8i_LDYq5Ddov2hChGXWhBCbVaWF_tOT-QZN6uk8MEKUGrqNRN531-QJzJfWnTZqiEGyLS6-A15x21S-fXFJqdRUwkHsUGh4hZOr9GKgr7X_Hu2wjO7bHK5dxLxeA',
                }
              })
              .then((jsonData)=> {
                console.log(jsonData, '<----- ');
                res.status(200).send({data: jsonData})
              })
              .catch((error) =>{
                res.status(400).json({data: 'error with token'})
              });
            
                
            // console.log(res.json(), '<--- req.headers')
            // console.log(req.headers, '<--- req.headers')

            // res.send({
            //     headers: req.headers,
            //     body: req.body,
            //     testing: 'testing is working'
            // })
            ///////////////////////////////////////////////////////
            // const fetchJobs = await fetch (`https://api.linkedin.com/v1/job-search?job-title=Software+Engineer`,{
            //     method: 'GET',
            //     // headers: {
            //     //     'Content-Type': 'application/x-www-form-urlencoded'
            //     //   }
            // })

            // let jsonResponse = await fetchJobs.json()
            // jsonResponse.then((result) =>{
            //     console.log(result, '<--- result')
            //     res.json({
            //         status: 200,
            //         data: result
            //     })
            //     // res.json({
            //     //     result: result,
            //     //     fetchJobs: fetchJobs,
            //     //     jsonResponse: jsonResponse
            //     // })
            // })

            // await jsonResponse.then(async(result) =>{
            //     await console.log(result, '<--- jobs search')
            //     // const db = Admin.firestore()
            //     // await db.collection('Users').doc('token').set({ data: result })
            //     // await res.json({
            //     //     status: 200,
            //     //     data: result
            //     // })
            // }).catch((err) =>{
            //   res.json({
            //     status: 400,
            //     data: err.message
            //   })
            // })
          } catch (error) {
            res.json({
              status: 400,
              data: error.message
            })
          }
    })
})
import React, { Component } from 'react';

export default class LandingPage extends Component {
    state = {
        code: ''
    }

    getToken = async() =>{

        if(this.props.location.search !== ''){
            let accountCode = await this.props.location.search.slice(6, this.props.location.search.length - 16);
            await console.log(accountCode, '<---- accountCode')
            this.setState({
                code: accountCode
            })


            await fetch('http://localhost:8000/test', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers:{
                    'Content-Type': 'application/json'
                    }
            })

            // await response.json()
            .then((result) =>{
                console.log(result, '<---- resullltt')
            })
            // const parsedResponse = await response.json();
            // console.log(jsonRequest, '<---- jsonRequest')
            // let userToken = await fetch (`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${accountCode}&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate&client_id=86js0zudl3o6gz&client_secret=nEw9jiA5h5iWD7jc`, {
            //     method: 'POST',
            //     credentials: 'include',
            //     body: JSON.stringify(accountCode),
            //     headers:{
            //         'Content-Type': 'application/json'
            //         }
            // })
            // await console.log('helloo testing TESTING 1')

            // await console.log(userToken, 'userToken # 1')

            // let dataJson = await userToken.json();
            // await console.log(dataJson, '<----- ')
        }else{
            console.log('no code here')
        }

            // const response = await fetch('https://localhost:8080/test', {
            //     method: 'POST',
            //     credentials: 'include',
            //     body: JSON.stringify(accountCode),
            //     headers:{
            //         'Content-Type': 'application/json'
            //         }
            // });
            // console.log(response, '<--- response')

            // console.log( '<----- responseresponse')
            // const parsedResponse = await response.json();
    }

    componentDidMount(){
        this.getToken();
    }

    render() {
        // const authUrl = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=86js0zudl3o6gz&redirect_uri=http://localhost:3000/userPrivate';
        return (
            <div>
                Welcome User

                {/* <a href={authUrl}>Connect to LinkedIn</a> */}
            </div>
        )
    }
}

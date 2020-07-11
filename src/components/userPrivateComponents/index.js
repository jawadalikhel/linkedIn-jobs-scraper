import React, { Component } from 'react';
import fetch from 'fetch';

export default class LandingPage extends Component {
    state = {
        token: ''
    }

    getToken = async () =>{
        if(this.props.location.search !== ''){
            let accountCode = this.props.location.search.slice(6);
            console.log(accountCode, '<--- code')

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            };

            let userToken = await fetch (`https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${accountCode}&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate&client_id=86js0zudl3o6gz&client_secret=nEw9jiA5h5iWD7jc`, requestOptions)
            console.log('helloo testing TESTING 1')

            console.log(userToken, 'userToken # 1')

            let dataJson = userToken.json();
            console.log(dataJson, '<----- ')
                
        }
    }

    componentDidMount(){
        this.getToken()
    }

    componentDidUpdate(){
        this.linkedInAuthorization()
        .then(() =>{
            console.log(this.props, '<--- did update #1')
        })
    }

    render() {
        return (
            <div>
                Welcome User
            </div>
        )
    }
}

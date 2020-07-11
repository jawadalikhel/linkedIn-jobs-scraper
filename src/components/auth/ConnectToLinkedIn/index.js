import React, { Component } from 'react';
import Login from './form';

export default class test extends Component {
    constructor(){
        super();
        this.state = {}
    }

    linkedInAuthorization = async() =>{
        window.open(
            'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=86js0zudl3o6gz&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate'
        )
    }

    componentDidUpdate(){
        console.log(this.props, '<--- did update #2')

    }
    render() {
        const authUrl = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=86js0zudl3o6gz&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate';
        return (
            <div>
                {/* <Login loginTo={this.linkedInAuthorization}/> */}
                <a href={authUrl}>Connect to LinkedIn</a>
            </div>
        )
    }
}

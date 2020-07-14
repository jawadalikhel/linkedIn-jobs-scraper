import React, { Component } from 'react';
import Login from './form';

export default class test extends Component {
    constructor(){
        super();
        this.state = {}
    }

    // linkedInAuthorization = async() =>{
    //     // window.open(
    //     //     'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=86js0zudl3o6gz&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate'
    //     // )
    // }

    // requestProfile = () => {
    //     // var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86js0zudl3o6gz&scope=r_liteprofile&state=123456&redirect_uri=https://localhost:8080/userPrivate`
    //     var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86js0zudl3o6gz&scope=r_liteprofile&state=123456&redirect_uri=https://linkedin-scraper-5a6bf.firebaseapp.com/userPrivate`
    //     var width = 450,
    //       height = 730,
    //       left = window.screen.width / 2 - width / 2,
    //       top = window.screen.height / 2 - height / 2;
    
    //     window.open(
    //       oauthUrl,
    //       "Linkedin",
    //       "menubar=no,location=no,resizable=no,scrollbars=no,status=no,target=_blank,width=" +
    //         width +
    //         ", height=" +
    //         height +
    //         ", top=" +
    //         top +
    //         ", left=" +
    //         left
    //     );
    //   };

    render() {
        const authUrl = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=86js0zudl3o6gz&redirect_uri=https://linkedin-scrapper-6eac2.firebaseapp.com/userPrivate';
        return (
            <div>
                {/* <Login loginTo={this.linkedInAuthorization}/> */}
                <a href={authUrl}>Connect to LinkedIn</a>
                {/* <button onClick={this.requestProfile}>Linkedin Login</button> */}
            </div>
        )
    }
}

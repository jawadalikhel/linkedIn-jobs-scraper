import React, { Component } from 'react';
import Login from './form';

export default class test extends Component {
    constructor(){
        super();
        this.state = {}
    }

    linkedInAuthorization = async() =>{
        // e.preventDefault();
        window.open(
            'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=86js0zudl3o6gz&redirect_uri=http://localhost:3000/userPrivate'
        )
        // let getCode =  await fetch ('https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=86js0zudl3o6gz&redirect_uri=https://linkedin-scraper-5a6bf.firebaseapp.com/userPrivate')

        // await getCode.json()
        // .then((result) =>{
        //     console.log(result, '<---- ')
        // }).catch((err)=>{
        //     console.log(err, '<--- error with linkedin auth')
        // })
    }

    // componentDidMount(){
    //     console.log(this.props.match, '<----')
    // }

    render() {
        return (
            <div>
                <Login loginTo={this.linkedInAuthorization}/>
            </div>
        )
    }
}

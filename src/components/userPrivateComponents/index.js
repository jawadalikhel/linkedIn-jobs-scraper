import React, { Component } from 'react'

export default class LandingPage extends Component {
    state = {
        token: ''
    }

    getToken = () =>{
        if(this.props.location.search !== ''){
            let accountCode = this.props.location.search.slice(6);
            console.log(accountCode, '<------ accountCode')
        }
    }

    componentDidMount(){
        this.getToken()
    }
    render() {
        return (
            <div>
                Welcome User
            </div>
        )
    }
}

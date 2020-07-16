import React, { Component } from 'react';
import LinkedInConnect from '../auth/ConnectToLinkedIn/index';

export default class LandingPage extends Component {
    state = {
        code: '',
        logedIn: false
    }

    getToken = async() =>{
        let accountCode = this.props.location.search;

        if(accountCode !== ''){
            this.setState({
                code: accountCode
            })
            const fetchTest = await fetch('https://us-central1-linkedin-scrapper-6eac2.cloudfunctions.net/saveLinkedInTokenToDB', {
                method: 'POST',
                body: JSON.stringify(this.state.code),
            })
    
            fetchTest.json().then((result) =>{
                this.setState({
                    logedIn: true
                })
            })
        }
        else{
            this.setState({
                logedIn: false
            })
        }
    }

    jobSearch = async () =>{
        // let job = 'software'
        // const fetchJobs = await fetch ('https://us-central1-linkedin-scrapper-6eac2.cloudfunctions.net/findJobs', {
        //     method: 'POST',
        //     body: JSON.stringify(job),
        // })
        // console.log(fetchJobs, '<--- fetchJobs')

        // let josnFetch = await fetchJobs.json()
        // console.log(josnFetch, '<--- josnFetch')
        // josnFetch.then((result) =>{
        //     console.log(result, '<------ resulllt')
        // }).catch((err) =>{
        //     console.log(err, '<---- errrrorrrr')
        // })
    }

    componentDidMount(){
        this.getToken();
        this.jobSearch();
    }

    render() {
        return (
            <div>
                {
                    (this.state.logedIn === true) ? <h1>Welcome User</h1> : <LinkedInConnect />
                }
            </div>
        )
    }
}

import React, { Component } from 'react';
import ConnectToLinkedIn from '../auth/ConnectToLinkedIn/index';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                Welcome to LinkedIn Job Scraper

                <ConnectToLinkedIn />
            </div>
        )
    }
}

import React from 'react'

const LinkedInLogin = (props) => {
    // console.log(props.login, '<---- props.login')
    return (
        <div>
            <button type="button" className="btn btn-outline-primary connect-buttons" onClick={props.loginTo} target="_blank">Connect With LinkedIn</button>
        </div>
    )
}
export default LinkedInLogin;
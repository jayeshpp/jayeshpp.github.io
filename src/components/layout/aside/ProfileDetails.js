import React from 'react';

import {name} from '../../../constants';

class ProfileDetails extends React.Component {

    render() {
        return (
            <div className="profile-description">
                <div className="profile-title">{name}</div>
                <p className="description">A Javascripter. Love Travel & Photography.</p>
                <div className="tech-profile">
                    <ul className="nav">
                        <li><a href="https://github.com/jayeshpp" target="_blank" rel="noopener noreferrer" title="">Github</a></li>
                        <li><a href="https://linkedin.com/in/jayeshpp/" target="_blank" rel="noopener noreferrer" title="">linkedin</a></li>
                        <li><a href="https://twitter.com/Jayeshpp/" target="_blank" rel="noopener noreferrer" title="">Twitter</a></li>
                        <li><a href="https://www.instagram.com/jayeshpp/" target="_blank" rel="noopener noreferrer" title="">instagram</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ProfileDetails
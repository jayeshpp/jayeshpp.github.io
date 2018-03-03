import React from 'react';
import profilePic from '../../../assets/img/jayesh.jpg';
import {name} from '../../../constants';

function ProfilePic() {
    return (
        <div className="profile-pic">
            <img src={profilePic} alt={name}/>
        </div>
    )
}

export default ProfilePic
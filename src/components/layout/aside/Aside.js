import React from 'react';

import ProfilePic from './ProfilePic';
import ProfileDetails from './ProfileDetails';

class Aside extends React.Component {

    render () {
        return (
            <aside>
                <ProfilePic/>
                <ProfileDetails/>
            </aside>
        )
    }
}

export default Aside
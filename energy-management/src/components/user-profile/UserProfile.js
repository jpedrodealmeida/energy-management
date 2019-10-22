import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './UserProfile.css';

class UserProfile extends Component{
    constructor(props){
        super(props);
        
        this.state = {

        }
    }

    render(){
        return(
            <Card>
                <CardContent>
                    <div>
                        <span>Main Painel Works!!!</span>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default UserProfile;
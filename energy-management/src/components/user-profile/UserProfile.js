import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './UserProfile.css';

class UserProfile extends Component{
    constructor(props){
        super(props);
        
        this.state = {

        }
        this.userPhoto = {
            url: 'http://odontoespaco.com.br/wp-content/uploads/2016/03/tratamento-1.jpg'
        }
        this.styleClass = {
            cardProfile: {
                backgroundColor: 'aliceblue',
                height: '70%'
            }
        }
    }

    render(){
        const classes = this.styleClass;
        return(
            <Card style={classes.cardProfile}>
                <CardContent>
                    <div className="user-container">
                        <div className="user-photo-structure">
                            <img className="user-photo" src={this.userPhoto.url} />
                        </div>
                        <span className="user-name">Melissa Alcantara</span>
                    </div>
                </CardContent>
            </Card>
        );
    }
}

export default UserProfile;
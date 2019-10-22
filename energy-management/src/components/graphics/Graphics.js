import React, {Component} from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import './Graphics.css'

class Graphics extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }

    }

    render(){
        return (
            <Card>
                <CardContent>
                    <div>
                        <span>Graphics Works!!!</span>
                    </div>
                </CardContent>
            </Card>
        );
    }

}

export default Graphics;
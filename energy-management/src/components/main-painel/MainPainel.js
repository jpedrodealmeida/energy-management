import React, {Component} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './MainPainel.css'

const useStyles = makeStyles(theme => ({
    button: {
      width: '500px'
    },
    input: {
      display: 'none',
    },
  }));


class MainPainel extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }
        
        this.styleClass = {
            button: {
            backgroundColor: '#00FFFA',
            color: 'white'
            },
            userName:{
                color: "#00000066",
                textAlign: "initial"
            }
        }
    }

    
    render(){
        const classes = this.styleClass;
        return (
            <Card>
                <CardContent>
                    <div className="title-card-structure">
                        <span style={classes.userName}>Hello Johnn</span>
                        <div className="button-structure">
                            <Button style={classes.button}>
                                SAVE CHANGES
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

}

export default MainPainel;
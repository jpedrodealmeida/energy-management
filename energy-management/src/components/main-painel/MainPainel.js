import React, {Component} from 'react'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import './MainPainel.css'


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
            userName: {
                color: "#00000066",
                textAlign: "initial"
            },
            textField: {
                
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
                    <div className="body-card-structure">
                        
                        <div className="up-value">
                            <span className="label-data">
                                Data 1
                            </span>
                            <div className="input-structure">
                                <div className="input-up-value" >
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                </div>
                                <div className="input-up-value" >
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="up-value">
                            <span className="label-data">
                                Data 2
                            </span>
                            <div className="input-structure">
                                <div className="input-up-value" >
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                </div>
                                <div className="input-up-value" >
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" style={classes.textField} margin="normal" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        <hr className="line-result" />
                        <div className="up-value">
                            <span className="label-data">
                                +
                            </span>
                            <div className="input-structure">
                                <div className="input-up-value" >
                                    <TextField id="outlined-bare" disabled="true" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" disabled="true" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" disabled="true" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" disabled="true" style={classes.textField} margin="normal" variant="outlined" />
                                </div>
                                <div className="input-up-value" >
                                    <TextField id="outlined-bare" disabled="true" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" disabled="true" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" disabled="true" style={classes.textField} margin="normal" variant="outlined" />
                                    <TextField id="outlined-bare" disabled="true" style={classes.textField} margin="normal" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        <div className="button-graphic">
                            <Button style={classes.button}>
                                GENERATE GRAPH
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

}

export default MainPainel;
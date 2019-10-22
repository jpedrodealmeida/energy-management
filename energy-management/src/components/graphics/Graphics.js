import React, {Component} from 'react'
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
            <div>
                <span>Graphics Works!!!</span>
            </div>
        );
    }

}

export default Graphics;
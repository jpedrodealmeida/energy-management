import React, {Component} from 'react'
import './MainPainel.css'

class MainPainel extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: ''
        }
    }

    render(){
        return (
            <div>
                <span>Main Painel Works!!!</span>
            </div>
        );
    }

}

export default MainPainel;
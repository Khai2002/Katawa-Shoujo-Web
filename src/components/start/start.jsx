import React, {Component} from 'react';
import './start.css'

class Start extends Component{
    //return <img src={require('./bg-popup.png')} alt="pop-up" />
    render(){
        return (
            <div className='start-div'>
                <button onClick={() => this.props.onStart()} className="astext">Do you remember that day 10 years ago?</button>
            </div>
            );
    }
}

export default Start ;
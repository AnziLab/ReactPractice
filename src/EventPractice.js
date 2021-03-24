import React, {Component} from 'react';

class EventPractice extends Component{

    state ={
        message:''
    }
    render(){
        return(
            <div>   
                <h1> EventPractice </h1>
                <input
                type="text"
                name="message"
                placeholder="write anything"
                value={this.state.message}
                onChange={
                    (e)=>{
                        console.log(e.target.value);
                    }
                }
                />
            </div>
        );
    }
}

export default EventPractice;
import React, { Component } from 'react';
import {v4 as uuidv4 } from 'uuid';

class NewTask extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTask({...this.state, id: uuidv4(), completed: false,});
        this.setState({text: ''})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="text">New Task</label>
                    <input 
                    id="text"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    />
                    <button>Add task</button>
                </form>
            </div>
        )
    }
}

export default NewTask

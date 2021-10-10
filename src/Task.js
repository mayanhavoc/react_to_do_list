import React, { Component } from 'react'
import "./Task.css";

class Task extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            text: this.props.text,
        };
        this.removeTask = this.removeTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    removeTask(){
        this.props.removeTask(this.props.id);
    }
    toggleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.editTask(this.props.id, this.state.text);
        this.setState({ isEditing: false });
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleToggle(evt){
        this.props.toggleCompletion(this.props.id);
    }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Task">
                    <form className='Task-edit-form' onSubmit={this.handleSubmit}>
                        <input 
                        value = {this.state.text} 
                        name="text" 
                        onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
            <div className="Task">
                <li className={this.props.completed ? "Task-text completed" : "Task-text"} onClik={this.handleToggle}>
                    {this.props.text}
                </li>
                <div className="Task-buttons">
                    <button onClick={this.toggleForm}>
                        <i className="fas fa-pen"></i>
                    </button>
                    <button onClick={this.removeTask}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            );
        }
        return result;
    }
}

export default Task

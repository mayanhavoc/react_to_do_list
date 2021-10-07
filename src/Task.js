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
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.editTask(this.props.id, this.state.text);
        this.setState({ isEditing: false });
    }
    handleToggle(e){
        this.props.toggleCompletion(this.props.id);
    }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleSubmit}>
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
            <div>
                <p>{this.props.text}</p>
                <button onClick={this.toggleForm}>edit</button>
                <button onClick={this.removeTask}> X </button>
                <li onClick={this.handleToggle} className={this.props.completed ? "completed" : ""}>
                    {this.props.text}
                </li>
            </div>
            );
        }
        return result;
    }
}

export default Task

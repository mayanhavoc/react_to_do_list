import React, { Component } from 'react'
import Task from './Task';
import NewTask from './NewTask';
import './ToDoList.css'

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks : [],
        };
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    editTask(id, updatedText){
        const updatedTasks = this.state.tasks.map(task => {if(task.id === id){
                return {...task, text: updatedText };
            }
            return task;
        });
        this.setState({ tasks: updatedTasks });
    }
    removeTask(id){
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id )
        });
    }
    addTask(newTask){
        this.setState(state => ({
            tasks: [...state.tasks, newTask]
        }));
    }
    toggleCompletion(id){
        const updatedTasks = this.state.tasks.map(task => {if(task.id === id){
            return {...task, completed: !task.completed };
        }
        return task;
    });
    this.setState({ tasks: updatedTasks });
    }
    render() {
        const tasks = this.state.tasks.map(task => {
            return (
                <Task 
                key={task.id}        
                id={task.id}
                text={task.text}
                editTask={this.editTask}
                removeTask={this.removeTask}
                completed={task.completed}
                toggleCompletion={this.toggleCompletion} />
            );
        });
        return (
            <div className="TodoList">
                <h1>To Do List</h1>
                <NewTask addTask={this.addTask}/>
                <ul>
                    <div className="task-list">
                        {tasks}
                    </div>
                </ul>
            </div>
        )
    }
}

export default ToDoList

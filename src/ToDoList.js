import React, { Component } from 'react'
import Task from './Task';
import NewTask from './NewTask';

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
    renderTasks(){
        return(
            <div>
                {this.state.tasks.map(task => 
                <div key={task.id}>
                    <Task 
                        id={task.id}
                        text={task.text}
                        editTask={this.editTask}
                        removeTask={this.removeTask}
                        completed={task.completed}
                        toggleCompletion={this.toggleCompletion} />
                </div>)}
            </div>
        )
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
        return (
            <div>
                <NewTask addTask={this.addTask}/>
                {this.renderTasks()}
            </div>
        )
    }
}

export default ToDoList

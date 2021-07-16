import {Component} from 'react';

import Header from './Header';
import TodoContainer from './TodoContainer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            darkMode: true,
            input: '',
            idCount: '0',
            sort: 'all',
            todoList: [],
        }
        
        this.toggleMode = this.toggleMode.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
        this.handleSortItem = this.handleSortItem.bind(this);
    }

    toggleMode() {
        this.setState((prevState) => ({
            darkMode: !prevState.darkMode,
        }));
    }

    handleInputChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        this.setState((prevState) => {
            const prevTodoList = prevState.todoList;
            const newId = String(Number(prevState.idCount) + 1);
            return ({
                input: '',
                idCount: newId,
                todoList: prevTodoList.concat({
                    id: newId,
                    name: event.target.lastChild.value,
                    completed: false
                })
            });
        });
    }

    handleCompleted(event) {
        const targetId = event.target.parentElement.parentElement.parentElement.id;

        this.setState((prevState) => {
            const newTodoList = [...prevState.todoList].map( (item) => {
                if(item.id === targetId) item.completed = !item.completed;
                return item;
            });

            return ({
                todoList: newTodoList
            });
        });
    }
    
    handleDeleteItem(event) {
        const targetId = event.currentTarget.parentElement.id;

        this.setState((prevState) => {
            const newTodoList = [...prevState.todoList].filter( (item) => (item.id !== targetId));
            return ({
                todoList: newTodoList
            });
        });
    }

    handleClearCompleted() {
        this.setState((prevState) => ({
            todoList: [...prevState.todoList].filter((item) => !item.completed)
        }));
    }

    handleSortItem(event) {
        this.setState({
            sort: event.target.id
        });
    }

    render() {
        const colorMode = this.state.darkMode ? 'dark' : 'light';
        
        return (
            <div id='app-container' className={colorMode}>
                <div id='cover-img' className={colorMode}>
                    <Header 
                        darkMode={this.state.darkMode} 
                        toggleMode={this.toggleMode}
                    />
                </div>
                <TodoContainer 
                    input={this.state.input} 
                    sort={this.state.sort}
                    handleInputChange={this.handleInputChange} 
                    handleSubmit={this.handleSubmit} 
                    handleCompleted={this.handleCompleted} 
                    handleDeleteItem={this.handleDeleteItem} 
                    handleClearCompleted={this.handleClearCompleted}
                    handleSortItem={this.handleSortItem}
                    todoList={this.state.todoList} 
                    darkMode={this.state.darkMode} 
                />
            </div>
        );
    }
}

export default App;
import NewItem from './NewItem';
import TodoItem from './TodoItem';
import SummaryTab from './SummaryTab';
import SortTab from './SortTab';

function TodoContainer(props) {
    const input = props.input;
    const handleInputChange = props.handleInputChange;
    const sort = props.sort;
    const handleSortItem = props.handleSortItem;
    const handleCompleted = props.handleCompleted;
    const handleDeleteItem = props.handleDeleteItem;
    const handleSubmit =  props.handleSubmit;
    const handleClearCompleted = props.handleClearCompleted;
    const todoList = props.todoList;
    const darkMode = props.darkMode;
    const tabColor = darkMode ? 'dark-tab' : 'light-tab';
    const count = todoList.filter((item) => !item.completed).length;

    const todoItems = 
        (sort === 'active') ? 
            todoList
                .filter((item) => !item.completed)
                .map( (item) => <TodoItem 
                                    id={item.id}
                                    name={item.name} 
                                    completed={item.completed} 
                                    handleCompleted={handleCompleted} 
                                    handleDeleteItem={handleDeleteItem} 
                                    darkMode={darkMode} 
                                    key={item.id} 
                                /> )
        :(sort === 'completed') ? 
            todoList.filter((item) => item.completed)
            .map( (item) => <TodoItem 
                                id={item.id}
                                name={item.name} 
                                completed={item.completed} 
                                handleCompleted={handleCompleted} 
                                handleDeleteItem={handleDeleteItem} 
                                darkMode={darkMode} 
                                key={item.id} 
                            /> )
        :todoList.map( (item) => <TodoItem 
                                    id={item.id}
                                    name={item.name} 
                                    completed={item.completed} 
                                    handleCompleted={handleCompleted} 
                                    handleDeleteItem={handleDeleteItem} 
                                    darkMode={darkMode} 
                                    key={item.id} 
                                /> );

    return (
        <div id='todo-container' className={tabColor}>
            <NewItem 
                input={input} 
                handleInputChange={handleInputChange} 
                handleSubmit={handleSubmit} 
                darkMode={darkMode} 
            />
            <div className='todo-list-container'>
                {todoItems}
                <SummaryTab 
                    count={count}
                    handleClearCompleted={handleClearCompleted}
                    darkMode={darkMode}
                />
                <SortTab 
                    sort={sort}
                    handleSortItem={handleSortItem}
                    darkMode={darkMode}
                />
            </div>
        </div>
    );
}

export default TodoContainer;
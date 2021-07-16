
function TodoItem(props) {
    const id = props.id;
    const name = props.name;
    const completed = props.completed;
    const darkMode = props.darkMode;
    const handleCompleted = props.handleCompleted;
    const handleDeleteItem = props.handleDeleteItem;
    let itemClassNames = 'tab';
    let nameClassNames = 'name-container';

    darkMode ? itemClassNames += ' tab-dark' : itemClassNames += ' tab-light';
    completed ? nameClassNames += ' completed' : nameClassNames += ' not-completed';

    return (
        <div id={id} className={itemClassNames +' todo-item'}>
            <div className='checkbox-container'>
                <label htmlFor={id+'-checkbox'}>
                    <input id={id+'-checkbox'} type='checkbox' checked={completed} onChange={handleCompleted} />
                    <div className="checkmark">
                        {checkedIcon}
                    </div>
                </label>
            </div>
            <label htmlFor={id+'-checkbox'} className={nameClassNames}>
                {name}
            </label>
            <div className='delete-btn' onClick={handleDeleteItem}>
                {crossIcon}
            </div>
        </div>
    );
}

const checkedIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 20 20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>;

const crossIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 30"><path fill="hsl(252, 4%, 72%)" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>;

export default TodoItem;
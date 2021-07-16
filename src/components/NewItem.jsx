
function NewItem(props) {
    const input = props.input;
    const handleInputChange = props.handleInputChange;
    const handleSubmit = props.handleSubmit;
    const darkMode = props.darkMode;
    const tabColor = darkMode ? 'tab tab-dark' : 'tab tab-light';

    return (
        <form id="new-item" className={tabColor} onSubmit={handleSubmit}>
            <div className='checkbox-container'></div>
            <input type="text" value={input} onChange={handleInputChange} placeholder='Create a new todo...' />
        </form>
    );
}

export default NewItem;

function SummaryTab(props) {
    const count = props.count;
    const darkMode = props.darkMode;
    const handleClearCompleted = props.handleClearCompleted;
    let summaryClassNames = 'tab';

    darkMode ? summaryClassNames += ' tab-dark' : summaryClassNames += ' tab-light';

    return (
        <div id='summary-tab' className={summaryClassNames}>
            <p className='item-count'>
                {count} items left
            </p>
            <button type='button' className='clear-btn' onClick={handleClearCompleted}>
                Clear Completed
            </button>
        </div>
    );
}

export default SummaryTab;
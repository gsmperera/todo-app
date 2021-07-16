
function SortTab(props) {
    const sort = props.sort;
    const darkMode = props.darkMode;
    const handleSortItem = props.handleSortItem;
    let sortClassNames = 'tab';

    darkMode ? sortClassNames += ' tab-dark' : sortClassNames += ' tab-light';

    return (
        <div id='sort-tab' className={sortClassNames}>
            <input type="radio" name="sort" id="all" onChange={handleSortItem} checked={sort === 'all'} />
            <label htmlFor="all">All</label>
            <input type="radio" name="sort" id="active" onChange={handleSortItem} checked={sort === 'active'} />
            <label htmlFor="active">Active</label>
            <input type="radio" name="sort" id="completed" onChange={handleSortItem} checked={sort === 'completed'} />
            <label htmlFor="completed">Completed</label>
        </div>
    );
}

export default SortTab;
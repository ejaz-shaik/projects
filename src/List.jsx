import PropTypes from 'prop-types'

function List(props) {
    
    const fruitsItem = props.items;
    const category = props.category;

    // fruits.sort((a,b) => a.name.localeCompare(b.name));  //Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name));    //Reverse alphabetical
    // fruits.sort((a,b) => b.calories - a.calories); // Reverse Numeric
    // fruits.sort((a,b) => a.calories - b.calories); // Numeric
    // const filteredList = fruits.filter(fruit => fruit.calories > 71);

    const fruitsList = fruitsItem.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            {fruit.calories}</li>);
    return(
        <>
            <h3>{category}</h3>
            <ol>{fruitsList}</ol>
        </>
        
    )
}
List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
    }))
}

export default List
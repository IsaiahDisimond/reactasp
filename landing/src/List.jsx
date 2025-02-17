import PropTypes from 'prop-types';

function List (props){
    const category = props.category;
    const itemList = props.items;
    // const fruits = [{id: 1, name:"apple",calories:50},
    //                 {id: 2, name:"orange",calories:200},
    //                 {id: 3, name:"coconut",calories:300}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); Alphabet
    // fruits.sort((a, b) => b.name.localeCompare(a.name));
    // fruits.sort((a, b) => a.calories-b.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);


    const listItems = itemList.map(item =>     <li key = {item.id}>
                                                {item.name}: &nbsp;
                                                <b>{item.calories}</b></li>);

    return (<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>);
}

List.PropTypes = {
    category: PropTypes.string,
    itmes: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}
List.defaultProps = {
    category: "Category",
    itmes: [],
}

export default List
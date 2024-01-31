import './MainContainer.css'
import Row from './Row'

function MainContainer(props) {
    const todoItems = props.todoItems
    const removeItem = props.removeItem
    const checkboxClick = props.checkboxClick

    const todoItemsTransformed = todoItems.map((item, index) => (
        <Row
            key={index}
            item={item}
            removeItem={removeItem}
            checkboxClick={checkboxClick}
        />
    ))

    return <div className="mainContainer">{todoItemsTransformed}</div>
}

export default MainContainer

import './Row.css'
import './CheckboxWrapper.css'
import CheckboxWrapper from './CheckboxWrapper'

function Row(props) {
    const removeItem = props.removeItem
    const item = props.item
    const checkboxClick = props.checkboxClick

    return (
        <div className="row">
            <CheckboxWrapper checkboxClick={checkboxClick} item={item} />
            <div className="item">{item.namn}</div>
            <button className="itemRemove" onClick={() => removeItem(item)}>
                X
            </button>
        </div>
    )
}

export default Row

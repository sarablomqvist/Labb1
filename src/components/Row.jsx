import './Row.css'
import './CheckboxWrapper.css'
import CheckboxWrapper from './CheckboxWrapper'

function Row(props) {
    const removeItem = props.removeItem
    const item = props.item

    return (
        <div className="row">
            <CheckboxWrapper />
            <div className="item">{item}</div>
            <button className="itemRemove" onClick={() => removeItem(item)}>
                X
            </button>
        </div>
    )
}

export default Row

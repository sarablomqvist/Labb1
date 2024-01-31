import './CheckboxWrapper.css'

function CheckboxWrapper(props) {
    const item = props.item

    const checkboxClick = () => {
        props.checkboxClick(item)
    }

    return (
        <div className="checkBoxWrapper">
            <input
                type="checkbox"
                className="checkBox"
                name="subscribe"
                onClick={checkboxClick}
            />
            <div className="checkboxOverlay"></div>
        </div>
    )
}

export default CheckboxWrapper

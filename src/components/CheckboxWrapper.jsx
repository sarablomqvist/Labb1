import './CheckboxWrapper.css'

function CheckboxWrapper() {
    return (
        <div className="checkBoxWrapper">
            <input
                type="checkbox"
                className="checkBox"
                name="subscribe"
            ></input>
            <div className="checkboxOverlay"></div>
        </div>
    )
}

export default CheckboxWrapper

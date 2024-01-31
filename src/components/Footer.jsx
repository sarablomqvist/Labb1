import './Footer.css'

function Footer(props) {
    const activeItems = props.todoItems.filter((item) => {
        if (item.checked === false) {
            return true
        }
    })

    const countList = activeItems.length

    return (
        <div className="footerBox">
            <div className="xItem">{countList} item left </div>
            <div className="allActiveCompleted">
                <span className="footerButton">All</span>
                <span className="footerButton marked">Active</span>
                <span className="footerButton">Completed</span>
            </div>
            <div className="clearCompleted">Clear completed</div>
        </div>
    )
}

export default Footer

import { useState } from 'react'
import './Footer.css'

function Footer(props) {
    const countList = props.todoItems.length

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

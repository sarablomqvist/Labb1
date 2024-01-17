import { useState, useRef } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

function App() {
    const myInput = useRef(null)
    const [todoItems, setTodoItems] = useState([])

    const addItem = () => {
        const val = myInput.current.value
        const nyLista = [...todoItems, val]

        setTodoItems(nyLista)
    }

    const removeItem = (itemToRemove) => {
        const test = (item) => {
            if (item === itemToRemove) {
                return false
            }
            return true
        }

        const nyLista = todoItems.filter(test)
        setTodoItems(nyLista)
    }

    return (
        <>
            <div>
                <button onClick={addItem}>
                    <h1 className="header">todos</h1>
                </button>
            </div>
            <div className="bigBox">
                <input
                    ref={myInput}
                    type="text"
                    className="writeHere"
                    id="subscribe"
                    name="subscribe"
                    placeholder="What needs to be done?"
                ></input>

                <MainContainer todoItems={todoItems} removeItem={removeItem} />

                <Footer todoItems={todoItems} />
            </div>
        </>
    )
}

export default App

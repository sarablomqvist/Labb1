import { useState, useRef } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

function App() {
    const myInput = useRef(null)
    const [todoItems, setTodoItems] = useState([])

    const addItem = () => {
        const val = myInput.current.value
        const newItem = {
            namn: val,
            checked: false
        }

        const nyLista = [...todoItems, newItem]

        setTodoItems(nyLista)

        myInput.current.value = ''
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addItem()
        }
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
        console.log(nyLista)
    }

    const checkboxClick = (item) => {
        const nyLista = [...todoItems]

        const result = nyLista.find((element) => {
            if (element === item) {
                return true
            }
            return false
        })
        if (result.checked === false) {
            result.checked = true
        } else {
            result.checked = false
        }

        setTodoItems(nyLista)
    }

    return (
        <>
            <div>
                <h1 className="header">todos</h1>
            </div>
            <div className="bigBox">
                <input
                    ref={myInput}
                    type="text"
                    className="writeHere"
                    id="subscribe"
                    name="subscribe"
                    placeholder="What needs to be done?"
                    onKeyDown={handleKeyDown}
                ></input>

                <MainContainer
                    todoItems={todoItems}
                    removeItem={removeItem}
                    checkboxClick={checkboxClick}
                />

                <Footer todoItems={todoItems} />
            </div>
        </>
    )
}

export default App

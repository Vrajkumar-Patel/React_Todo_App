import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
    const [inputList, setInputList] = useState();
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listItems = () => {
        setItems(
            (oldItems) => {
                return [...oldItems, inputList];
            }
        );
        setInputList('');
    };

    const deleteItems = (id) => {
        console.log('deleted');

        setItems(
            (oldItems) => {
                return oldItems.filter(
                    (arrItem, index) => {
                        return id !== index;
                    }
                )
            }
        )
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>ToDo List</h1>
                    <input type='text' placeholder='Add Items' value={inputList} onChange={itemEvent} />
                    <button onClick={listItems} className='plusbtn'>+</button>
                    <ul>
                        {/* <li>{inputList}</li> */}
                        {items.map(
                            (itemVal , index) => {
                                return (
                                    <>
                                        <TodoList text={itemVal} key={index} id={index} onSelect={deleteItems} />
                                        {/* <br/>     */}
                                    </>
                                )
                            }
                        )
                        }
                    </ul>
                </div>

            </div>
        </>
    )

};

export default App;



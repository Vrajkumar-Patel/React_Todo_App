import React from 'react';

const TodoList = (props) => {
    return (
        <>
            <li>
                <i className="fa fa-times" aria-hidden="true"
                    onClick={
                        () => {
                            props.onSelect(props.id);        
                        }
                    } />
                {props.text}
            </li>
        </>
    );
};

export default TodoList;
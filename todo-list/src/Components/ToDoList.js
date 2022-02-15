import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <div>
            <button className='todo__Clear' style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
        </div>
    );
};

export default ToDoList;
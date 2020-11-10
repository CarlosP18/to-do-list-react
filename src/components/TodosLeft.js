import React from 'react'

const TodosLeft = (props) => {
    return (
        <>
        <div className='spacing'>
            <span className='todos-left'>
                You have {props.numTodos} Todos left.
            </span>
        </div>
        </>
    )
}


export default TodosLeft

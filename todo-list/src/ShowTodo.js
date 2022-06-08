import React from 'react';


const ShowTodo = (props) => {
    // console.log(props.task);
  return (
      <>
      <div className="items-container">
          <h3>{props.task}</h3>
          <button className='remove-buttons' onClick={()=>{props.fn(props.task)}}>x</button>
      </div>
      </>
  )
}

export default ShowTodo
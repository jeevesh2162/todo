import React, { useState } from "react";
import ShowTodo from "./ShowTodo";

const Todo = () => {
    const [task, setTask] = useState("") // Add Tasks in input box
    const [data, setData] = useState([]) // Set Data fetched values from 

    function submitHandler(e){
        e.preventDefault();
        const newData = task;
        setData([...data, newData]);
        setTask("");
        
    }

    const deleteItem = (a) => {
        // console.log("KK",a);
        setData(data.filter((index)=>{
            // console.log(index);
            return index!==a;
        }));
    }

  return (
    <div className="App">
    <div id="main">
        <form onSubmit={submitHandler}>
            <h3>Todo List</h3>
            <section id="inputs-section">
                <input type="text" placeholder='Add a Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button type="submit">Add</button>
            </section>
        </form>

        {
            data.map((value,index) => {
                // console.log(value,index);
                return <ShowTodo key={index} id={index} task={value} fn={deleteItem}/>
            })
        }
    </div>
    </div>
  )
}

export default Todo
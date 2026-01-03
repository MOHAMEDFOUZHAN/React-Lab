import React,{useState} from 'react'

function App() {
  const [task,setTask]=useState([]);
  const [text,setText]=useState("");
  const addtext=()=>{
    setTask([...task ,{name:text, completed:false}])
    setText("")

  }
  const deleteTask =(index)=>{
    setTask(task.filter((_,i)=>i !== indexToDelete));
  }
  return (
    <div>
      <h1>To-Do List</h1>
      <input
      value={text}
      onChange={(e)=>setText(e,target.value)}
      placeholder='Enter task'/>
      <button onClick={addtask}>Adde</button>
      <ul>
        {task.map((task,index)=>(
          <li key={index}>
            <input type="checkbox"
            checked={task.completed} 
            />
              <span>{task.name}</span>
              <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

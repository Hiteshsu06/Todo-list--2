import React ,{useState,useEffect} from 'react';
import './Todo.css';
import img1 from './img.png';
import { AiOutlinePlus, AiOutlineEdit} from 'react-icons/ai';
import { RiDeleteBinLine} from 'react-icons/ri';


const Todo = () => {
  const [inputdata, setInputData]=useState("");
  const [item, setItem]=useState([]);

 const addItem= () => {
  if(!inputdata){
    alert('pass any value');
  }
  else{
    const myNewInputData={
      id: new Date().getTime().toString(),
      name:inputdata,
    }
    setItem([...item , myNewInputData]);
    setInputData("");
  }
 }
 const deleteItem=(index) =>{
  const updatedItem=item.filter((curElem) =>{
    return curElem.id !== index;
  })
  setItem(updatedItem);
 }
 const removeall = () =>{
  setItem([]);
 }
 useEffect(() => {
  localStorage.setItem("mytodolist", JSON.stringify(item));
}, [item])

  return (
    <div className='todo'>
      <div className='todo_pic'><img src={img1} alt="top" width="100px" height="100px" /></div>
      <div className='todo_1'>
             <input type="text" value={inputdata} onChange={ (event) => {setInputData(event.target.value)}} placeholder='✍ Add Item...' className="todo_1_1" />
             <div className="todo_1_2">
                       <button className='btn1' onClick={addItem}><AiOutlinePlus/></button>
             </div>
      </div>
     { item.map((curElem) => {
        return(
          <div className="todo_2" key={curElem.id}>
          <div className="todo_2_1"><h3>{curElem.name}</h3></div>
          <div className="todo_2_2"><button className='btn2'><AiOutlineEdit/></button></div>
          <div className="todo_2_3"><button className='btn3' onClick={() => deleteItem(curElem.id)}><RiDeleteBinLine/></button></div>
          </div>
        )
      })
    }
      <div className="todo_3">
             <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeall}>
              <span>CHECK LIST</span>
            </button>
      </div>
    </div>
  )
}

export default Todo
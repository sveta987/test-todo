import { useState } from "react"

const AddTodo = ({addTodo}) => {

    const [input, setInput] = useState('');


    const handleChange = (e)=>{
        setInput(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo({
            id: Math.floor(Math.random()* 1000),
            title: input,
            done: false
        });
        setInput('');
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex ">
        <input
          type="text"
          placeholder="Add ToDo"
          value={input}
          onChange={handleChange}
          className=" border-[1px] border-black shadow-lg px-[29px] py-[5px] "
        />
        <input type="submit" value="Add Todo" className="btn" />
      </div>

    </form>
  )
}

export default AddTodo

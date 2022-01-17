import React,{useState} from 'react'

function ToDoForm(props) {
   
    const [input, setInput] = useState('') 

    const handletext = e =>{
        setInput(e.target.value)
    }

    const norefreshonsubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*100000),
            text : input,
            is_completed: "false"
        })


        setInput(' ');
    }


    return (
        <div>
            
            <form className = "ToDoForm" onSubmit = {norefreshonsubmit} >

            <div class ="row">

                <div class="col-sm">

                </div>
                <div class ="col-sm">
                <h1> To Do List </h1>

            <div class = "row">

                <div class = "col-sm-6">
                <input 
                type="text" 
                placeholder = "Enter the task" 
                name ="text" 
                value = {input} 
                className="input"   onChange= {handletext}>
              
                </input>
                </div>


                <div class = "col-sm-4">
                

                <button class = "btn btn-success" type="button" className="add-task" onClick={norefreshonsubmit}>
                     Add todo
                </button> 
                </div>
                <div class="col-sm-2">
                     
                </div>

            </div>

               
                 
                </div>

            <div class="col-sm">
                    
                </div>
                
                </div>


        <hr />
            </form>


        </div>
    )
}

export default ToDoForm
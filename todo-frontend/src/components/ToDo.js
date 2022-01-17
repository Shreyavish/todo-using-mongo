import React from 'react'


    const Todo = ({ todos, completeTodo,clearItemFromPending }) => {
   
        return todos.map((todo, index) => (
            
          <div
            className="to-do-row"
            key={index}
          >
            
                        <div>
            

                        
                            <div  key={todo.id}>

                               
                    <div class ="row mb-2">

                   

                    <div class = "col-2">
                        
                    <input type="checkbox"  onClick={() => completeTodo(todo.id)} />
                    </div>
                    <div class = "col-3">
                        
                    
                    {todo.text}
                    </div>
                    <div class = "col-2">
                    <button  class="btn btn-danger btn-sm" name="remove" key={todo.id} onClick={() => clearItemFromPending(todo.id)}>
                                            remove
                                            </button>
                    </div>

                    <div class = "col-5">

                    </div>
    
                    </div>
                            </div>
                        </div>
                        
            </div>

        ));
      };


export default Todo

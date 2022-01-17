import React,{useState,useEffect} from 'react'
import Completedtask from './Completed';
import Todo from './ToDo';
import ToDoForm from './ToDoForm'
import apihelper from '../apihelper';

function ToDoList() 
{

    const [todos, setTodos] = useState([]);

    const [completed,setCompleted] = useState([]);


    useEffect(() => {
        const fetchTodoAndSetTodos = async () => {
          const todos = await apihelper.getAllTodos()
          console.log(todos)
          //setTodos(todos)

          const current_pending = todos.filter(el => {
            return el.is_completed === "false";
          });

          const finished = todos.filter(el => {
            return el.is_completed === "true";
          });

          console.log(current_pending);
          console.log(finished)

         setTodos (current_pending);

          setCompleted (finished);





        }
        fetchTodoAndSetTodos()
      }, [])
    

    //adding to dos
    const addToDo = async task => {

        console.log(task);
      if(!task.text)
            {return}

            if (!task) {
                alert("please enter something")
                return
              }
              if (todos.some(({ element }) => element === task)) {
                alert('Task: ${todo} already exists')
                return
              }
              const newTodo =  await apihelper.createTodo(task)
              console.log(newTodo);
             //setTodos([...todos, newTodo])



    const newTodos = [task, ...todos] // we are adding our newly created task to todos array created above

    setTodos(newTodos)


   console.log(...todos)
    }


    //removing to dos

    const completeTodo = async id =>{



        const message = await apihelper.updateTodo(id, true)

        if(message.data === "done"){

      const removedlist = [...todos].filter(task =>task.id !== id);
      


      setTodos(removedlist)

        const finisheditem = [...todos].filter(task => task.id === id);
         const newFinished = [...finisheditem, ...completed]   
        
      
         setCompleted(newFinished)
        }

        //console.log(finisheditem)
        //console.log([newFinished, ...completed])
            
    }

    const moveToPending = async id =>{

        const message = await apihelper.updateTodo(id, false)

        if(message.data ==="done" ){

            const remainingInFinished = [...completed].filter(task=>task.id !== id);
        setCompleted(remainingInFinished)

        const moveitemtopending = [...completed].filter(task => task.id === id);
         const mergearrays =[...moveitemtopending,...todos]
         setTodos(mergearrays)   
        }

        
    }

    const clearItemFromPending = async id =>{


        const message = await apihelper.deleteTodo(id)
        console.log(message)
        if(message.statusText === "OK"){
        const items = [...todos].filter(task => task.id !== id);
        setTodos(items);
        }
        else{
           alert("failed to delete");
        }
    }
    
    const clearItemFromFinished =async id =>{

        

        const message = await apihelper.deleteTodo(id)
        console.log(message)
        if(message.statusText === "OK"){
        
            const items = [...completed].filter(task => task.id !== id);
            setCompleted(items);
        }
        else{
            alert("failed to delete");
        }




    }

    return (
        <div>
            
            <div class="row row-cols-1">
              <div class="col">
   
           
            
                    </div>
               
              <div class="col">
              
                <ToDoForm onSubmit={addToDo} />
              </div>
            </div>

<div class="row row-cols-8">


<div class="col-2"></div>

  <div class="col-4"><h3>
                    Pending tasks
                </h3></div>



  <div class="col-4"><h3>
                    Finished tasks
                </h3></div>

                <div class="col-2"></div>
                <div class="col-2"></div>

  <div class="col-4">
  <Todo
           todos = {todos}
            clearItemFromPending = {clearItemFromPending}
           addToDo = {addToDo}
           completeTodo={completeTodo}
           />
  </div>
  <div class="col-4">
  <Completedtask
           clearItemFromFinished ={clearItemFromFinished}
           completed = {completed}
           moveToPending ={moveToPending}
           />
           </div>
           <div class="col-2"></div>
  </div>
</div>
      

    )
}



export default ToDoList

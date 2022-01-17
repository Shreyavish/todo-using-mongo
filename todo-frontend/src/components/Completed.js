import React from 'react'

const Completedtask = ({completed,moveToPending,clearItemFromFinished}) => {
   //console.log(completed)
    return completed.map((task, index) => (
        
      <div className ="completed-row"
        key={index}
      >


                <div class ="row mb-2">


                <div class =" col-3">

                {task.text}
                </div>

                <div class =" col-5">
                <button  class = "btn btn-primary btn-sm"  name="move to pending" key={task.id} onClick={() => moveToPending(task.id)}>
                            move to pending
                            </button>
                </div>

                <div class =" col-2">

                <button  class="btn btn-danger btn-sm" name="remove" key={task.id} onClick={() => clearItemFromFinished(task.id)}>
                            remove
                            </button>
                </div>

                <div class =" col-2">

                </div>

                

                </div>

          
   
        </div>

    ));
  };



/*const Completed = ({ completed }) => {
   console.log(completed)

    return completed.map((completed, index) => (
       
      <div
        className="completed-row"
        key={index}
      >
        <div key="completed.id">
        h1
        {completed.text}
        </div>
       
        
        
        </div>

    ));
  };*/

export default Completedtask
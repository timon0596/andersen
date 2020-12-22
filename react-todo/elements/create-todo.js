import React from 'react'
export const CreateTodo = () => {
  const [state,setState] = React.useState({
    taskName:'',
    taskDescription:''
  })
  function create(){
    const dateKey=Date.now()
    localStorage.setItem(`task_${dateKey}`,JSON.stringify(state))
  }

  function handleNameChange(event){
    setState({
      taskName: event.target.value
    })
  }
  return(
  <div className="create-todo">
    <div className="create-todo__name">task name</div>
    <input className="create-todo__name-input" onInput={handleNameChange}/>
    <div className="create-todo__description-label">task description</div>
    <textarea className="create-todo__description"/>
    <div className="create-todo__button" onClick={create}>create</div>
  </div>
  );}



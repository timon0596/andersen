import React from 'react'
import ReactDom from 'react-dom'
import {CreateTodo} from './elements/create-todo.js'
require.context('./',true,/.css$/)
const App = () => (
    <CreateTodo/>
 );

ReactDom.render(<App/>,document.querySelector('.root'))
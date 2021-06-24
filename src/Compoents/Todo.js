import {div} from 'prelude-ls';
import React, {Component} from 'react';

export default class Todo extends Component {
	render() {
		const tasks = [
			{id: 1, txt: 'First Task'},
			{id: 1, txt: 'Second Task'},
			{id: 3, txt: 'Third Task'},
		];
		return (
			// JSX
			<div>
            <div className="inputContainer">
               <input placeholder="Enter task name"></input>
               <button>Add</button>
            </div>
            <div className="taskList">
               <ul>
                  {
                     tasks.map(function(taskObj){
                        return(
                           <div>
                              <li>{taskObj.txt}</li>
                              <button>Delete</button>
                           </div>
                        )
                     })
                  }
               </ul>
            </div>
         </div>
		);
	}
}

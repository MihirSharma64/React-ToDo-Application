import React, {Component} from 'react';

export default class Todo extends Component {
	constructor() {
		super();
		this.state = {
			tasks: [
				{id: Date.now(), txt: 'First Task'},
				{id: Date.now()+1, txt: 'Second Task'},
				{id: Date.now()+2, txt: 'Third Task'},
			],
			currTask: '',
		};
	}

	handleChange = (e) => {
		console.log(e.target.value);
		let val = e.target.value;
		this.setState({
			currTask: val,
		});
	};

	handleAdd = () => {
		let newTaskText = this.state.currTask;
		if (newTaskText !== '') {
			// let newTaskId = this.state.tasks.length;
			let newTaskId = Date.now();
			let newTaskObj = {id: newTaskId, txt: newTaskText};
			let newTasksArr = [...this.state.tasks, newTaskObj];

			this.setState({
				tasks: newTasksArr,
				currTask: '',
			});
		}
	};

	handleDelete(id) {
		let newTasksArr = this.state.tasks.filter(function (taskObj) {
			return taskObj.id !== id;
		});

		this.setState({
			tasks: newTasksArr,
		});
	}

	render() {
		// const tasks = [{id: 1, txt: 'First Task'},{id: 1, txt: 'Second Task'},{id: 3, txt: 'Third Task'}];

		return (
			// JSX
			<div>
				<div className="inputContainer">
					<input value={this.state.currTask} onChange={this.handleChange} placeholder="Enter task name"></input>
					<button onClick={this.handleAdd}>Add</button>
				</div>
				<div className="taskList">
					<ul>
						{this.state.tasks.map((taskObj) => {
							// niche this use kr rhe hai to abhi arrow fn nhi use krenge to niche this = undefined hoga
							return (
								<li key={taskObj.id}>
									<h1>{taskObj.txt}</h1>
									<button
										onClick={() => {
											this.handleDelete(taskObj.id);
										}}
									>
										Delete
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

var all_todos = [];
function restoreFromLocalStorage(){
	let todos = localStorage.getItem('tasks');
	let json = JSON.parse(todos);
	if (json) {
		for (i=0; i<json.length; ++i) {
			document.getElementById('tsks').innerHTML += json[i].task;
			all_todos.push(json[i]);
		}
	}
}
restoreFromLocalStorage();

function todolist(){
	var input = document.getElementById('addList').value;
	var todo = {
		"id": 1,
		"task": "<div class='task justify-content-between d-flex' onclick='taskDone(this)'><div class='text-start d-flex checkbox' ><input type='checkbox'/><span class='task-name text-start ms-2' id='text'>"+input+"</span></div><button class='delete ms-2 text-end' type='button'  onclick='removeTodo(this)'><i class='fa fa-times'></i></button></div>",
		"status": "P"
	}; 

	all_todos.push(todo);
	localStorage.setItem("tasks", JSON.stringify(all_todos));
	if (input !== '') {
		document.getElementById('tsks').innerHTML += todo.task;
		document.getElementById('addList').value = '';
	}
}

function getTaskIndex(target, is_parent=false){
	var parent = document.getElementById('tsks');
	if (is_parent) {
		target = target
	}else{
		target = target.parentNode
	}
	console.log(target);
	return[].indexOf.call(parent.children, target);
}

function taskDone(target){
	var index = getTaskIndex(target, is_parent=true);
	var task = all_todos[index];
	task.status = 'D';
	var task_text = target.querySelector('span');
	task.task = "<div class='task justify-content-between d-flex completed' onclick='taskDone(this)'><div class='text-start d-flex checkbox' ><input type='checkbox'/><span class='task-name text-start ms-2' id='text'>"+task_text.innerHTML+"</span></div><button class='delete ms-2 text-end' type='button'  onclick='removeTodo(this)'><i class='fa fa-times'></i></button></div>";
	localStorage.setItem('tasks', JSON.stringify(all_todos));
};

function removeTodo(target){
	var index = getTaskIndex(target);
	all_todos.splice(index, 1);
	localStorage.setItem('tasks', JSON.stringify(all_todos));
	const rmv = target.parentNode.remove();
};
var currentDate = new Date();
var dd = currentDate.getDate();
var mm = currentDate.getMonth() + 1;
var yyyy = currentDate.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {

  mm = '0' + mm;
}
currentDate = "Date :" + "  " + " " + dd + " " + '/' + " " + mm + " " + '/' + " " + yyyy;
document.getElementById('date').innerHTML = " " + currentDate;
// function todolist(){
	// let crossIcon = '<i class="fa fa-times" aria-hidden="true"></i>';
	// var input = document.getElementById('addList').value;
	// const node = document.createElement("li");
	// const textnode = document.createTextNode(input);
	// node.appendChild(textnode);
	// document.getElementById('task').appendChild(node);
// }
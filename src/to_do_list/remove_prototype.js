// en este ejemplo utilizamos un ID para cada tarea
let data_base = {
    task_list: [
        [1, "this is a task", true],
        [2, "this is other task", true],
        [3, "this is other more task", true],
        [4, "this is last task", false]
    ]
}

function remove_task(id) {
    data_base.task_list = data_base.task_list.filter(task => task[0] !== id);
}

console.log("Before removal:");
console.log(data_base.task_list);

// remueve la tarea con el ID=2
remove_task(2);

console.log("After removal:");
console.log(data_base.task_list);

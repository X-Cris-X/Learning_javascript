// Objeto que almacena la lista de tareas y otras posibles propiedades
let data_base = {
    task_list: [[5,"old task", false]]
}

function create_task(name_task, done) {
    // comprobar la intencion de marcar completada o no la tarea
    done == "done" ? done = true : done = false

    // generamos el ID para la tarea
    const id = Math.floor(Math.random() * 10) + 1;

    // para entender el metodo push
    const new_task = [id,name_task,done];
    data_base.task_list.push(new_task);
}
create_task(
    "new task",
    "done"
);
create_task(
    "other more task"
);

console.log(data_base.task_list);
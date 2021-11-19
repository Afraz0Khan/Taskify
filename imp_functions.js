function convert_to_algo_input(data) {
    var inputData = {}
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const dueDate = new Date(element.due_date*1000);
        const dueDateString = dueDate.toDateString();
        const due_day = dueDateString.split(' ')[0];

        const weightage = element.weightage;
        const difficulty = element.difficulty;
        const task_name = element.task_name;

        const task_info = {
            weightage: weightage,
            difficulty: difficulty,
        }

        due_day[task_name] = task_info;

        inputData[due_day] = due_day[task_name];
    }
    console.log(inputData)
    return inputData;
}

export default convert_to_algo_input;


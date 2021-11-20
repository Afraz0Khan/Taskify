async function convert_to_algo_input(data) {
    const finalData = {
        'Mon':{},
        'Tue':{},
        'Wed':{},
        'Thu':{},
        'Fri':{},
        'Sat':{},
        'Sun':{}
    };

    for (let i = 0; i < data.length; i++) {
        const element = data[i];

        const dueDate = new Date(element.due_date['seconds']*1000);
        const dueDateString = dueDate.toDateString();
        const due_day = dueDateString.split(' ')[0];

        const weightage = element.weightage;
        const difficulty = element.difficulty;
        const task_name = String(element.task_name);
        

        const task_info = {
            weightage: weightage,
            difficulty: difficulty,
        }

        finalData[due_day][task_name] = task_info

        // oneTask[task_name] = task_info;
        // console.log(oneTask)
        // oneDay[due_day] = oneTask;
        // console.log(oneDay)
        // inputData[due_day] = oneDay[task_name];
    }
    
    console.log(finalData)
    return finalData;
}

export default convert_to_algo_input;


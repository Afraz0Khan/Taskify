function convert_to_algo_input(data) {
    var finalData = {
        'Mon':{},
        'Tue':{},
        'Wed':{},
        'Thu':{},
        'Fri':{},
        'Sat':{},
        'Sun':{}
    };

    for (let i = 0; i < data.length; i++) {
        var element = data[i];

        var dueDate = new Date(element.due_date*1000);
        var dueDateString = dueDate.toDateString();
        var due_day = dueDateString.split(' ')[0];

        var weightage = element.weightage;
        var difficulty = element.difficulty;
        var task_name = String(element.task_name);
        

        var task_info = {
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


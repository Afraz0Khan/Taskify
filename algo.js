deadlines = {
    'Monday': {
        1: {
            'weightage': 5/100,
            'difficulty': 50/100
        },

        2: {
            'weightage': 10/100,
            'difficulty': 10/100
        }
    },

    'Tuesday':{
        1: {
            'weightage': 10/100,
            'difficulty': 100/100
        },

        2: {
            'weightage': 2/100,
            'difficulty': 60/100
        }
    },

    'Wednesday': {
    },

    'Thursday':{
        1: {
            'weightage': 7/100,
            'difficulty': 90/100
        },

        2: {
            'weightage': 1/100,
            'difficulty': 30/100
        },

        3: {
            'weightage': 15/100,
            'difficulty': 70/100
        }
    },

    'Friday': {
        1: {
            'weightage': 25/100,
            'difficulty': 80/100
        }
    }
}
//Code translated to JS by Andrew Tischenko

function copy(mainObject) { //FOUND ON W3: https://www.w3docs.com/snippets/javascript/how-to-clone-a-javascript-object.html
    let objectCopy = {}; // objectCopy will store a copy of the mainObject
    let key;
    for (key in mainObject) {
      objectCopy[key] = mainObject[key]; // copies each property to the objectCopy object
    }
    return objectCopy;
  }
  
function order(deadlines){
    var ratioList = [];
    var deadlinesList = [];
    var x = 0;
    for (const i in deadlines){
        for(const j in deadlines[i]){
            ratioList.push(Math.round((deadlines[i][j]['weightage']/deadlines[i][j]['difficulty'])*1000)/1000);
            deadlines[i][j]['ratio'] = ratioList[x];
            x += 1;
            //NEW-Dictionary with ratio key made above ^_^
            deadlinesList.push(i);
            deadlinesList.push(j);
            deadlinesList.push(deadlines[i][j]['weightage']);
            deadlinesList.push(deadlines[i][j]['difficulty']);
            deadlinesList.push(deadlines[i][j]['ratio']);
            var nested_deadlines = [];
            var k = 0;
            var minilist = [];
            while(k < deadlinesList.length){
                minilist = [];
                for (let i = k; i < k+5; i++){
                    minilist.push(deadlinesList[i]);                    
                }
                nested_deadlines.push(minilist);
                k = k+5;
            }
            
        }
    }
    var initial_list = ratioList.slice(); //Backing up ratioList also not sorting here to make tracing back easier!
    
    //console.log("NESTED_DEADLINES: ",nested_deadlines);
    //console.log(nested_deadlines); //DEBUG
    //var nested_newList = nested_deadlines.sort(function(a, b){return b-a});
    
    //Sort based on ratios descending
    var nested_newList = nested_deadlines.sort(function(a,b){
        return a[4] - b[4];
    });
    nested_newList = nested_newList.reverse();

    var sortedratioList = [];
    for(var i = 0; i < nested_newList.length; i++){
        let x = parseFloat(nested_newList[i][4]);
        sortedratioList.push(x);
    }
    //console.log("ratio processed sorted: ", sortedratioList);

    console.log("NESTED_DEADLINES new: ",nested_newList);
    
    

    //console.log("ratio: ",ratioList);

    var occurrences = ratioList.reduce(function(obj, item) {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
      }, {});

    //console.log("occurrences: ",occurrences);
    
    var duplicates = [];
    for (const [key, value] of Object.entries(occurrences)){
        if(value > 1){
            duplicates.push((key));
                            
        }
    }
    //console.log("duplicates in progress: ",duplicates);

    var processed_list =[];
    ratioList.forEach((c) => {
    if (!processed_list.includes(c)) {
        processed_list.push(c);
        }
    });
    //console.log("ratio processed: ", processed_list);

    console.log(initial_list.length);
    console.log(processed_list.length);

    if(initial_list.length == processed_list.length){ //Compare
        //console.log("EQUALS");
        return(nested_newList);
    }
    
    else{
        var indexList= [];
        //console.log("duplicates: ",duplicates);
        for(var x in duplicates){
            var index = sortedratioList.findIndex(element => element == duplicates[x]);
            indexList.push(index);
        }
       
        console.log("indexList: ",indexList);

        for (var i=0; i< indexList.length; i++) {
            var indexpos = indexList[i];
            //console.log(indexpos);
            if(nested_newList[indexpos][2] != nested_newList[indexpos+1][2]){
                //console.log(nested_newList);
                //console.log("YO: NOT ");
                var mini_nested_newList = nested_newList.splice(indexpos,2)
                mini_nested_newList = mini_nested_newList.sort(function(a,b){
                    return a[2] - b[2];
                });
                mini_nested_newList = mini_nested_newList.reverse();
                
                nested_newList.splice(indexpos,0, mini_nested_newList[0], mini_nested_newList[1] );
                
                
            }    
            if(nested_newList[indexpos][2] == nested_newList[indexpos+1][2]){
                //console.log("YO: YES ");
                var mini_nested_newList = nested_newList.splice(indexpos,2)
                mini_nested_newList = mini_nested_newList.sort(function(a,b){
                    return a[3] - b[3];
                });
                mini_nested_newList = mini_nested_newList.reverse();
                nested_newList.splice(indexpos,0, mini_nested_newList[0], mini_nested_newList[1]);
            }
            
        }
        return nested_newList;        
    }
}
console.log(order(deadlines));

//Trim output data:
//var new_nestedList = order(deadlines); //Running code here!

//for(var i = 0; i < new_nestedList.length; i++) {
//    new_nestedList[i].splice(4, 1);
//    new_nestedList[i].splice(3, 1);
//    new_nestedList[i].splice(2, 1);
//}
    

//The code below displays the initial dictionary but in nested list format and only with the day and the task of that day mentioned:

//deadlinesList = [];
//for(const i in deadlines){
    //for(const j in deadlines[i]){
        //deadlinesList.push(i);
        //deadlinesList.push(j);
        //var nested_deadlines = [];
        //var k = 0;
        //var minilist = [];
        //while(k < deadlinesList.length){
            //minilist = [];
            //for (let i = k; i < k+2; i++){
                //minilist.push(deadlinesList[i]);                    
            //}
            //nested_deadlines.push(minilist);
            //k = k+2;
        //}
    //}
//}
//console.log(nested_deadlines,'INITIAL');
//console.log();
//console.log(new_nestedList,'PROCESSED');

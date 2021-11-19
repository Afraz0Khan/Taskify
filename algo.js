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
    //console.log(nested_deadlines); //DEBUG
    //var nested_newList = nested_deadlines.sort(function(a, b){return b-a});
    var nested_newList = nested_deadlines.sort(function(a,b){
        return a[4] - b[4];
    });
    nested_newList = nested_newList.reverse();

    var initial_list = copy(ratioList); //Backing up ratioList also not sorting here to make tracing back easier!
    var counter_list = [];

    for (const elem in ratioList){
        var b = 1;
        while(b==1){
            var occurrences = ratioList.reduce(function(obj, item) {
                obj[item] = (obj[item] || 0) + 1;
                return obj;
              }, {});

            if(occurrences[elem] > 1){
                counter_list.push(elem);
                counter_list.push(occurrences[elem]);
                          

                //nested_counterL = [[element, its count], [element2, its count],...]
                var nested_counterL = [];
                var i = 0;
                var minilist = [];

                while(k < len(counter_list)){
                    for (let i = k; i <= k+2; i++){
                        minilist.push(deadlinesList[i]);                    
                    }
                    nested_counterL.push(minilist);
                    k += 2
                }
                    
                //Breaking the loops
                b = null;
                ratioList = ratioList.filter(e => e !== elem);
            }
            else{
                //Breaking the loop to pass the initial list
                break;
            }
        }
    }
    processed_list = ratioList;
    if(initial_list.length == processed_list.length){
        return(nested_newList);
    }
    else{
        //This list to fetch ratio values from nested_counterL
        samevalList = [];
        for(const numbers in nested_counterL){
            samevalList.push(numbers[0]);
        }

        nested_newList = nested_deadlines.sort(function(a,b){
            return a[4] - b[4];
        });
        nested_newList = nested_newList.reverse();

        var z = 0;
        indexList= [];
        
        for (const i in nested_counterL){
            for (let [indexx, value] of Object.entries(nested_newList)) {
                if((value[4] == samevalList[z]) || (value[4] == samevalList[z])){
                    indexList.push(indexx);
                }
            }                  
            z = z + 1;
        }

        //Removing every second element from the indexList as the second element is just 1 more of the first element.
        //indexList = indexList[::2] //OLD PYTHON

        var new_indexList = [];
        for (const i = 0; i < indexList.length; i = i+2) {
            new_indexList.push(indexList[i]);
        };
        indexList = new_indexList;

        for(const i in indexList){
            if(nested_newList[i][2] != nested_newList[i+1][2]){
                var mini_nested_newList = nested_newList.splice(2,2)
                mini_nested_newList = mini_nested_newList.sort(function(a,b){
                    return a[2] - b[2];
                });
                mini_nested_newList = nested_newList.reverse();
                nested_newList.splice(2,0, mini_nested_newList);
                
                
            }    
            else if(nested_newList[i][2] == nested_newList[i+1][2]){

                var mini_nested_newList = nested_newList.splice(2,2)
                mini_nested_newList = mini_nested_newList.sort(function(a,b){
                    return a[3] - b[3];
                });
                mini_nested_newList = nested_newList.reverse();
                nested_newList.splice(2,0, mini_nested_newList);
            }
        }
        return nested_newList;        
    }
}
//console.log(order(deadlines));

//Trim output data:
var new_nestedList = order(deadlines); //Running code here!

for(var i = 0; i < new_nestedList.length; i++) {
    new_nestedList[i].splice(4, 1);
    new_nestedList[i].splice(3, 1);
    new_nestedList[i].splice(2, 1);
}
    

//The code below displays the initial dictionary but in nested list format and only with the day and the task of that day mentioned:

deadlinesList = [];
for(const i in deadlines){
    for(const j in deadlines[i]){
        deadlinesList.push(i);
        deadlinesList.push(j);
        var nested_deadlines = [];
        var k = 0;
        var minilist = [];
        while(k < deadlinesList.length){
            minilist = [];
            for (let i = k; i < k+2; i++){
                minilist.push(deadlinesList[i]);                    
            }
            nested_deadlines.push(minilist);
            k = k+2;
        }
    }
}
console.log(nested_deadlines,'INITIAL');
console.log();
console.log(new_nestedList,'PROCESSED');

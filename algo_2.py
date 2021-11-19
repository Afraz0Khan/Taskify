import copy
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

def order(deadlines):
    ratioList = []
    deadlinesList = []
    x = 0
    for i in deadlines:
            for j in deadlines[i]:
                ratioList.append(round(deadlines[i][j]['weightage']/deadlines[i][j]['difficulty'] , 3))
                deadlines[i][j]['ratio'] = ratioList[x]
                x += 1
                '''
                NEW-Dictionary with ratio key made above ^_^
                '''
                deadlinesList.append(i)
                deadlinesList.append(j)
                deadlinesList.append(deadlines[i][j]['weightage'])
                deadlinesList.append(deadlines[i][j]['difficulty'])
                deadlinesList.append(deadlines[i][j]['ratio'])
                nested_deadlines = []
                k = 0
                while k < len(deadlinesList):
                    nested_deadlines.append(deadlinesList[k:k+5])
                    k += 5
    nested_newList = sorted(nested_deadlines, key=lambda x: x[4], reverse=True)
    '''
    nested_newList = In descending order according to ratio [['Monday', 1, weightage, difficulty, ratio], ...]
    '''
    print(ratioList, 'ratioList')
    initial_list = copy.deepcopy(ratioList) #Backing up ratioList also not sorting here to make tracing back easier!
    counter_list = []
    for elem in ratioList:
        b = True
        while b:
            if ratioList.count(elem) > 1:
                counter_list.append(elem)  
                counter_list.append(ratioList.count(elem))

                #nested_counterL = [[element, its count], [element2, its count],...]
                nested_counterL = []
                i = 0
                while i < len(counter_list):
                    nested_counterL.append(counter_list[i:i+2])
                    i += 2
                #Breaking the loops
                b = False
                ratioList.remove(elem)
                print(counter_list, 'counter_list')
                print(nested_counterL, 'nested_counterL')
            else:
                #Breaking the loop to pass the initial list
                break

    processed_list = ratioList 
    print(processed_list, 'processed_list')
    if len(initial_list) == len(processed_list):
        '''
        Returning the nested_newList with no processing done do it as the list has no similar ratios
        as the lenght of initial_list and processed_list would be equal that is no similar 
        ratios in them
        '''
        return nested_newList
    else:
        '''
        Performing processing as the length of the lists are not equal that mean there were some similar ratios in the 
        initial_list that got removed in the processed_list and now their lenghts does not match!
        '''
        #This list to fetch ratio values from nested_counterL
        samevalList = [] 
        for numbers in nested_counterL:
            samevalList.append(numbers[0])
        nested_newList = sorted(nested_deadlines, key=lambda x: x[4], reverse=True)
        print(nested_newList, 'nested_newList')
        z = 0
        indexList= []
        for i in nested_counterL:
            for indexx, value in enumerate(nested_newList):
                if value[4] == samevalList[z] or value[4] == samevalList[z]:
                    indexList.append(indexx)
            z += 1
        #Removing every second element from the indexList as the second element is just 1 more of the first element.
        indexList = indexList[::2] 
        print(indexList, 'indexList') #This line is for debugging
        for i in indexList:
            # print(nested_newList[i][3], nested_newList[i+1][3]) #This line is for debugging
            
            if nested_newList[i][2] != nested_newList[i+1][2]:
            
                if nested_newList[i][2] > nested_newList[i+1][2]:
                    nested_newList[i:i+2] = sorted(nested_newList[i:i+2], key=lambda x: x[2], reverse=True)
                    
                elif nested_newList[i][2] < nested_newList[i+1][2]:
                    nested_newList[i:i+2] = sorted(nested_newList[i:i+2], key=lambda x: x[2], reverse=True)
                    
            elif nested_newList[i][2] == nested_newList[i+1][2]:
                if nested_newList[i][3] > nested_newList[i+1][3]:
                    nested_newList[i:i+2] = sorted(nested_newList[i:i+2], key=lambda x: x[3], reverse=True)
                    
                elif nested_newList[i][3] < nested_newList[i+1][3]:
                    nested_newList[i:i+2] = sorted(nested_newList[i:i+2], key=lambda x: x[3], reverse=True)
            else:
                pass
        return nested_newList

print(order(deadlines)) #Running code here!
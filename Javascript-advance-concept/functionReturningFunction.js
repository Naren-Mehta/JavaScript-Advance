

function interviewQuestion(job){

    if(job === 'designer'){
        return function(name){
            console.log(name+', can you please explain what is your UX design is?')
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log(name+', what subject do you teach?')
        }
    }else{
        return function(name){
            console.log('Hello, '+name+' What do you do?');
        }
    }   

}

var teacherQuestion= interviewQuestion('teacher');
    console.log(teacherQuestion);

teacherQuestion('John');


var designerQuestion= interviewQuestion('designer');
    console.log(designerQuestion);

    designerQuestion('jane');


    interviewQuestion('teacher11')('megha');
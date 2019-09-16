function interviewQuestion(job){

    return function(name){
        if(job === 'designer'){
                console.log(name+', can you please explain what is your UX design is?')
        
        }else if(job === 'teacher'){
                console.log(name+', what subject do you teach?')
            
        }else{
                console.log('Hello, '+name+' What do you do?');
        }   
    }

}

interviewQuestion('designer')('john');

console.log("Multiple choice questions");

/*
(function(){

    function Question(question, options, answer){
        this.question= question;
        this.options=options;
        this.answer=answer;
    }
    
    Question.prototype.displayQuestion= function(){
        console.log(this.question);
        for(var i=0;i<this.options.length;i++){
            console.log(i+ ' '+this.options[i]);
        }
    };
    
    var q1= new Question("Capital of India? ", ['Delhi', 'Bengaluru','Chennai','Kolkata'],0);
    var q2= new Question("Capital of Uttarakhand? ", ['Delhi', 'Deharadoon','Chennai','Kolkata'],1);
    var q3= new Question("Capital of Karnataka? ", ['Delhi','Chennai','Kolkata', 'Bengaluru'],4);
    
    var questions=[q1,q2,q3];
    
    var n=Math.floor(Math.random()* questions.length);    
    questions[n].displayQuestion();
    
    var answer= prompt('Please select the currect answer');
    
    if(parseInt(answer) === questions[n].answer){
        console.log("Currect Answer :)");
    }else{
        console.log('Wrong Answer :(');
    }
})(); 

*/

// Expert level
(function(){

    function Question(question, options, answer){
        this.question= question;
        this.options=options;
        this.answer=answer;
    }
    
    Question.prototype.displayQuestion= function(){
        console.log(this.question);
        for(var i=0;i<this.options.length;i++){
            console.log(i+ ' '+this.options[i]);
        }
    };

    Question.prototype.checkAnswer=function(answer, callback){
     
        var sc;
        if(parseInt(answer) === this.answer){
            console.log('Currect Answer :) \n');
            sc=callback(true);
        }else{
            console.log('Wrong Answer :( \n');
            sc=callback(false);
        }

        this.displayScore(sc);
        
    }


    Question.prototype.displayScore =function(score){
        console.log('Your Current score is '+score);
        console.log('--------------------------------------------------');
    }
    
    var q1= new Question("Capital of India? ", ['Delhi', 'Bengaluru','Chennai','Kolkata'],0);
    var q2= new Question("Capital of Uttarakhand? ", ['Delhi', 'Deharadoon','Chennai','Kolkata'],1);
    var q3= new Question("Capital of Karnataka? ", ['Delhi','Chennai','Kolkata', 'Bengaluru'],3);
   
    function score(){
        var sc=0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore =score();

    function nextQuestion(){
        var questions=[q1,q2,q3];
        var n=Math.floor(Math.random()* questions.length);    
        questions[n].displayQuestion();
        var answer= prompt('Please select the currect answer');
        if(answer !=='exit'){
            questions[n].checkAnswer(answer, keepScore);
            nextQuestion();
        }
    }

    nextQuestion();
   
})();



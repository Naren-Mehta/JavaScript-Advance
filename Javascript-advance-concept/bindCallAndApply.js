
var john ={
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style == 'formal'){
            console.log('Good '+timeOfDay 
            +', Ladies and gentlemen! I\'m '+this.name 
            + ', I\'m a '+this.job 
            + ' and I\'m '+this.age +' years old.');
        }else if(style==='friendly'){

            console.log('Hy! What\'s up? I\'m '+this.name 
            + ', I\'m a '+this.job 
            + ' and I\'m '+this.age +' years old. Have a nice '+timeOfDay);

        }
    }
}

john.presentation('formal','morning');


var emily ={
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation.call(emily,'friendly','afternoon'); // this is called Method Borrowing

console.log("===now apply====");

john.presentation.apply(emily,['friendly','evening']); // this is called Method Borrowing

console.log("===now bind====");
var johnFriendly =john.presentation.bind(john, 'friendly')

johnFriendly('morning'); 
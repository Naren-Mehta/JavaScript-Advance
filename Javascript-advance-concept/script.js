
// var Person = function(name, yearOfBirth, job){
//     this.name=name,
//     this.yearOfBirth=yearOfBirth,
//     this.job=job
//     // this.calculateAge= function(){
//     //     console.log(2019-this.yearOfBirth);
//     // }
// }

// Person.prototype.lastName='Smith';

// Person.prototype.calculateAge= function(){
//         console.log(2019-this.yearOfBirth);
//     }

// var john= new Person('John',1990,'teacher');
// var ram= new Person('ram',1890,'engineer');
// john.calculateAge()
// ram.calculateAge();

// console.log(john);
// console.log(ram.lastName);

//Object.create

console.log('Object.create=============>');

var personProto = {
    calculateAge:function(){
        console.log(2019- this.yearOfBirth );
    }
}

var john = Object.create(personProto);
john.name='John';
john.yearOfBirth=1990;
john.job='teacher';

var jane= Object.create(personProto,
    {
        name:{value:'Jane'},
        yearOfBirth:{value:1969},
        job:{value:'designer'}
    })




























































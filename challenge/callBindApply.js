
var naren = {
    name:'Naren',
    age:30,
    address:'Bengaluru',
    ageCalculater:function (currentYear, test){
        console.log(test + '  ' + (currentYear-this.age));
    }
}

console.log(naren);











var currentYear= 2019;

naren.ageCalculater(currentYear,'Naren Comment');

var prema = {
    name:'Prema',
    age:26,
    address:'Mysure'
}

naren.ageCalculater.call(prema, currentYear,'Prema Comment for Call ');

naren.ageCalculater.apply(prema, [currentYear, 'Prema Comment for Apply']);

var premaAgeCalculater= naren.ageCalculater.bind(prema);
premaAgeCalculater(currentYear,'Prema comment for Bind');



const add = function (...arg) {
    return arg.reduce(function(prev, current){
        return prev + current
    })
};

console.log(add(1,2,3,4,5,6));

const addAgain = function (nu1, nu2, nu3){
    return nu1 + nu2 + nu3;
}
 const nums = [1, 2, 3];

 console.log(addAgain(...nums));
 
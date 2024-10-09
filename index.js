// code your solution here
function saturdayFun(activity){
    if (activity == undefined){
    return `This Saturday, I want to roller-skate!`
    } else {
        return `This Saturday, I want to ${activity}!`
    }
}
console.log(saturdayFun("bathe my dog"))
console.log(saturdayFun())
//second  fucntion using a function expression
const mondayWork = function (doing) {
    if (doing == undefined){
        return `This Monday, I will go to the office.`
    } else {
        return `This Monday, I will ${doing}.`
    }
}

console.log(mondayWork())
console.log(mondayWork("work from home"))

function wrapAdjective(flair= "*"){
    const innerfunction= function(name = "special"){
        return `You are ${flair}${name}${flair}!`
    }

    
     return innerfunction;
}
const encprompt = wrapAdjective();
const result = encprompt("a hard worker")
let result1 = wrapAdjective("||")
let emphatic = result1("a dedicated programmer")
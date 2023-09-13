//Function Declaration

//Example 1
function demo()
{
    let demo = "Hello Baby, My Baby How are you....";
    document.write(demo);
}

//Example 2
function start()
{
    let start = "I am 25, Please can I have you....";
    console.log(start);
}
start()
start()

//Example 3
function end(firstname, lastname)
{
    let msg = "Hello "+firstname+""+lastname+" and we are live";
    console.log(msg);
}
end("Humans", "They are alive")
end("Humans", "They are alive")

//Example 4
function sum(p,q)
{
    const result = p*q;
    console.log(result);
}
sum(50,6)

//Example 5
// let scanner = prompt("Enter your Name : ");
// console.log(scanner);
// window.alert(scanner);

//Example 6
let a = prompt("Enter the Value for A for Addition : ");
let b = prompt("Enter the Value for B for Addition : ");
let total = Number(a)+Number(b);
console.log("The Addition of Two Numbers "+a+" and "+b+" is : "+total);
window.alert("The Addition of Two Numbers "+a+" and "+b+" is : "+total);
document.write("The Addition of Two Numbers "+a+" and "+b+" is : ");
document.write(total);
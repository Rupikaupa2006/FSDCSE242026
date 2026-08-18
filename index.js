//console.log("Hello I'm using Js");
//The statement below is for arrow function
//const sum= (a,b) => {
  //  return Math.sqrt(a)+Math.sqrt(b);
//}
///console.log (sum(100,200));
//Immediate invoked function expression(IIFE)
//(()=>{
  //  console.log("Hello, I'm an immediately invoked function expression!");
//})();
// let and var difference:
//let->let keyword is block scoped(local variable), it means that the variable declared with let is only accessible within the block in which it is defined. It is not hoisted to the top of the block, so it cannot be accessed before it is declared.
//var->var keyword is function scoped,(globally available) it means that the variable declared with var is accessible within the entire function in which it is defined. It is hoisted to the top of the function, so it can be accessed before it is declared.
//var a="HELLO";
//console.log(typeof(a));
//let a=23;
//if(a>20){
  //  let a =40;
    //console.log("value of a inside block="+a);
//}
//console.log("value of a outside block="+a);
//Callback functions
/*function sum(a,b){
    return a+b;
}
function sumWithMsg(clbk,msg){
    const result = clbk(40, 50);
    console.log("Hii , "+ msg +" and your result="+result);
}
sumWithMsg(sum,"XYZ");*/
/*function login(eror,msg){
    if(eror){
        console.log("Error: "+eror);
    }
    else{
        console.log("Hii, "+msg);
    }
}
function loginHandler(username,password,clbk){
    if(username==="rupi15"&& password==="12345"){
        clbk(null,"Login successful");
    }
    else{
        clbk("Username or password is invalid", null);
    }
}

loginHandler("rupi15","123",login);*/
//Callback hell
//Synchronous programming-synchronous programming is a programming paradigm where tasks are executed one after another in a sequential manner. In synchronous programming, each task must complete before the next one can begin. This means that if a task takes a long time to complete, it can block the execution of subsequent tasks, leading to delays and inefficiencies in the program's execution. Synchronous programming is often used in situations where tasks are dependent on each other and must be executed in a specific order. However, it can also lead to performance issues and reduced responsiveness in applications that require real-time processing or user interaction.
/*console.log("One");
console.log("Two");
console.log("Three");*/
//asynchronous programming
/*console.log("one");
/*setTimeout(()=>{
    console.log("Two");
}*/
/*for(i=0;i<10000;i++){
    console.log(i);
}
console.log("Three");
*/

//document.getElementById is used to access the HTML element with the specified ID. It returns a reference to the first element with the given ID, allowing you to manipulate its properties and content using JavaScript. In this case, it is used to get a reference to the HTML element with the ID "container" and store it in the variable container for further use in the code.
const container=document.getElementById("container");
const button=document.getElementById("btn");

  const h1=document.createElement("h1");//it is not now a part of DOM tree, it is just created in memory. It is not yet visible on the web page until it is appended to a parent element in the DOM tree.
  console.log(h1);
  h1.innerText="Hello I'm using Js";//it is used to set the text content of the h1 element to "Hello I'm using Js". This means that when the h1 element is eventually added to the DOM tree, it will display this text on the web page.
//console.log(container);
//console.log(button);

function ping(){
    //alert("server ping");
    container.innerHTML="<h2 style='color: red;'> Welcome to DOM</h2>";// This line of code sets the inner HTML content of the container element to a new heading element with the text "Welcome to DOM". It replaces any existing content within the container with this new heading, effectively updating the displayed content on the web page when the ping function is called.
    container.appendChild(h1);// This line of code appends the previously created h1 element to the container element. By doing this, the h1 element becomes a child of the container in the DOM tree, making it visible on the web page. The text "Hello I'm using Js" will now be displayed within the container when the ping function is executed.
}
//it is done through DOM manipulation, we can add an event listener to the button element that listens for a click event. When the button is clicked, the ping function will be executed, which will display an alert message saying "server ping". This allows us to create interactive web pages that respond to user actions.
button.addEventListener("click",ping);
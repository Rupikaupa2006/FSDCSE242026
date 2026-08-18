const box=document.getElementById("box");
const btn1=document.getElementById("btn1");
const img=document.createElement("img");
const loader=document.createElement("h2");
loader.innerText="Loading...";
console.log(loader);
loader.innerHTML="<h2 style='color: yellow;'>Loading...</h2>";
box.appendChild(loader);
img.src="https://images.com.jpg";

function generateResume(){
    try{
    const user={
        name:"Rupika",
         email:"xyz@gmail.com",
        phone_no:1234567890,
         age:20,
        address:"xyz",
        education:{
             degree:"B.Tech",
    }
}
    box.appendChild(img);
    box.innerHTML+=`
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <p>Phone Number: ${user.phone_no}</p>
    <p>Age: ${user.age}</p>
    <p>Address: ${user.address}</p>
    <p>Education: ${user.education.degree}</p>
    `
}
catch(e){
    loader.innerHTML="<h2 style='color: red;'>Error in loading</h2>";
}
finally{
    loader.innerHTML="<h2 style='color: green;'>Resume generated successfully</h2>";
}
}
    
btn1.addEventListener("click",generateResume);
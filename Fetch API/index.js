const root=document.getElementById('container');
const button=document.getElementById('btn');
const disp=document.getElementById('disp');
const loader=document.getElementById('loader');
async function fetchData(){
    //fetch is asynchronou function used to make network requests and retrieve data from a specified URL. It returns a Promise that resolves to the Response object representing the response to the request. In this case, it is used to fetch data from the URL 'https://fakestoreapi.com/products', which is an API endpoint that provides product information. The fetched data can then be processed and used in the application as needed.
    //alert("Hiiii");//alert is a function of browser not js
    //template string->jab bhi hum apne text ko beuatify ya append krne k liye hum ${} ka use krte hai to usko template string kehte hai. isme hum static data ko dynamic data ke sath append krte hai.
    try{
        loader.innerHTML="<h2 style=color:red>Loading data...</h2>";
        const serverData=await fetch('https://fakestoreapi.com/products');
        const jsonData=await serverData.json();
        //disp.innerHTML=`${jsonData[0].title}`;
        //console.log(jsonData[0].title);
        let table=`<table border=2px>
        ${
         jsonData.map((ele)=>(
            `<tr>
            <td><img src=${ele.image} height=200 width=200></img></td>
            <td>${ele.title}</td>
            <td>${ele.description}</td>
            <td>${ele.price}</td>
            <td>${ele.category}</td>
            </tr>`
         ))
        }
        </table>`
        disp.innerHTML=table;
    }catch(e){
        console.log("Error is:"+e);
    }
    finally{
        loader.innerHTML=" ";
    }
}
button.addEventListener('click',fetchData);
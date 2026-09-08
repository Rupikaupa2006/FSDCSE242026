const container = document.getElementById('root');

console.log(container);

const root = ReactDOM.createRoot(container);

// here we are creating a root element for ReactDOM

/*const h2 = React.createElement(
    'h2',
    { style: { color: 'red', backgroundColor: 'cyan' } },
    'Welcome to ReactDOM'
);

// here we are creating an element

const h1 = React.createElement(
    'h1',
    { style: { color: 'brown' } },
    'ABES Engineering College'
);
const img= React.createElement('img',{src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4W5se-3sXcI-CuvSm5GbPoSk655stnvqEeWyX1M79KA&s=10',style:{height:'200px',width:'200px'}});

// in React.createElement we can provide style simultaneously

const div = React.createElement(
    'div',
    { style: { border: '2px solid red' } },
    img,
    h1,
    h2
);*/

  
const h21=<h2>Hello World</h2>//here we are creating an element using JSX(javascript XML)
//for converting jsx to js we use babel compiler which is already included in react library. we are converting it to js because browser can only understand js not jsx
const h22=<h2 style={{color:'red',backgroundColor:'cyan'}}>Welcome to ReactDOM</h2>//
const div=<div>{h21}{h22}</div>
const wrapper=<div style={{border:'2px solid red'}}>
{div}
<h2>Hey using JSX</h2>
</div>
root.render(wrapper);//here we are rendering the element using render method of root
import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['salman', 'razzak', 'jashim', 'Bappy', 'Shuvo']

  const products = [{name: 'Photoshop', price: '$99.99'},
                    {name: 'Illustrator', price: '$60.00'},
                    {name: 'PDF Reader', price: '$30.00'},
                    {name: 'Adobe InDesign', price: '$20.00'},

]

const nayokNames = nayoks.map(nayok => nayok);
console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        
    <p>I am a React Person</p>
    <Counter></Counter>
    <Users></Users>
    <ul>
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {
       products.map(product => <li>{product.name}</li>) 
      }
    </ul>
    {
      products.map(product =><Product product={product}> </Product>)
    }
    
    
    <Person></Person>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {setCount(count - 1);}}>Decrease</button>
      <button onClick={() => {setCount(count + 1);}}>Increase</button>
    </div>

  )

}

function Users (){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>{
        users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid white',
    borderRadius: '5px',
    backgroundColor: 'gray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price);
  return(
    <div style={productStyle}>
<h3>{name}</h3>
<h2>{price}</h2>
<button>Buy Now</button>
    </div>
  )
}


function Person(props){
  return (
    <div style={{border: "3px solid gray", width: "400px", margin: "20px", padding: "20px" }}>
      <h3>Name: {props.name}</h3>
      <p>Profession: {props.job}</p>
    </div>
  )
}

export default App;

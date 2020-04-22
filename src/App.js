import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useFetch } from 'use-http';

function RouteA(){
  return (
    <div>
      Hello from route A
    </div>
  );
}

function RouteB(){

  const fetch = useFetch('https://dns.google.com/resolve?name=www.google.com', { data: null }, []);

  let content = null;
  if(fetch.data == null || fetch.loading){
    console.log("Hit loading case");
    console.dir(fetch.data);
    console.dir(fetch.loading);
    return "Loading...";
  } else {
    return JSON.stringify(fetch.data, null, 4);
  }
}

function App() {
  return (
    <BrowserRouter>

      <Link to='/a'>Go to A</Link>
      <br/>
      <Link to='/b'>Go to B</Link>
      <br/>
      <hr/>

      <Route path='/a'><RouteA/></Route>
      <Route path='/b'><RouteB/></Route>
		</BrowserRouter>
	);
}

export default App;

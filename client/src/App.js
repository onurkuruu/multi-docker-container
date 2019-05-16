import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
	 <Router>
		<div className="App">
		  <header>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/otherPage">Other Page</Link></li>
			</ul>
		  </header>
		  <div>
			<Route exact path="/" component={Fib} />
			<Route path="/otherPage" component={OtherPage} />
		  </div>
		</div>
	</Router>
  );
}

export default App;

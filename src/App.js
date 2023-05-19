import React, { useEffect, useState, Component } from "react";
import "./App.css";

// import Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Component
import Header from "./component/Header";
import Footer from "./component/Footer";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import Home from "./Pages/Home";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";
import FormExample from "./Pages/FormExample"; 

//...








function App() {

  let urlCharacters = `https://rickandmortyapi.com/api/character/`;
	let dataURL = {
		info: {},
		character: [],
		error: '',
	};

	const [ characters, setCharacters ] = useState(dataURL);
	const [ ulr, setURL ] = useState(urlCharacters);
	const [ page, setPage ] = useState(1);

	useEffect(
		() => {
			const fetchAPI = () => {
				fetch(ulr)
					.then(res => res.json())
					.then(data => setCharacters({ character: data.results, info: data.info, error: data.error }))
					.catch(error => console.log(error));
			};
			fetchAPI();
		},
		[ ulr ]
	);

	const nextPage = () => {
		setURL(characters.info.next);
		setPage(page + 1);
		scroll();
	};

	const prevPage = () => {
		if (characters.info.prev != null) {
			setURL(characters.info.prev);
			setPage(page - 1);
			scroll();
		}
	};

	const scroll = () => {
		const elemento = document.querySelector('.container');
		elemento.scrollIntoView('auto', 'start');
	};

	const searchData = data => {
		urlCharacters = `https://rickandmortyapi.com/api/character/?name=${data}`;
		setURL(urlCharacters);
		setPage(1);
	};



	




  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
		
            <Route exact path="/" component={Home} />
            
            <Route exact path="/react-hooks" component={ReactHooks} />
            
            <Route exact path="/ui-ux" component={UiUx} />
            <Route exact path="/form-example" component={FormExample} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </React.StrictMode>




  );
}

export default App;

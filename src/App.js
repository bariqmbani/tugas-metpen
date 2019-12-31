import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import TugasTiga from './pages/TugasTiga'
import TugasEmpat from './pages/TugasEmpat'
import TugasEnam from './pages/TugasEnam'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

const App = () => {
	return (
		<Router>
			<Container>
				<Header />
			</Container>
			<Switch>
				<Route path="/tugas-enam">
					<TugasEnam />
				</Route>
				<Route path="/tugas-empat">
					<TugasEmpat />
				</Route>
				<Route path="/tugas-tiga">
					<TugasTiga />
				</Route>

				<Route path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	)
}

export default App

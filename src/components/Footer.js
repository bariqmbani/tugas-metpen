import React from 'react'
import { Navbar } from 'react-bootstrap'

const Footer = () => {
	return (
		<div>
			<Navbar fixed="bottom" style={{background: 'white'}}>
				<Navbar.Collapse className="justify-content-center">
					<Navbar.Text>© 2019 oleh Bariq Mbani</Navbar.Text>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default Footer

import React from 'react'
import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitter,
	faInstagram,
	faGithub
} from '@fortawesome/free-brands-svg-icons'
import { Container } from 'react-bootstrap'

const Header = () => {
	return (
		<div>
			<Navbar fixed="top" style={{background: 'white'}}>
				<Container>
					<Navbar.Brand href="/#intro">Tugas Metpen</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text className="findme" style={{ margin: '0 5px' }}>
							temukan saya di:
						</Navbar.Text>
						<Navbar.Text style={{ margin: '0 5px' }}>
							<a
								href="https://github.com/bariqmbani"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</Navbar.Text>
						<Navbar.Text style={{ margin: '0 5px' }}>
							<a
								href="https://instagram.com/barimban"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</Navbar.Text>
						<Navbar.Text style={{ margin: '0 5px' }}>
							<a
								href="https://twitter.com/barimban"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default Header

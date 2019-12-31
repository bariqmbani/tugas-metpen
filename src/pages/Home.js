import React from 'react'
import { Container } from 'react-bootstrap'
import ReactFullpage from '@fullpage/react-fullpage'

import Intro from './Intro'
import List from './List'

const Home = () => {
	return (
		<>
			<ReactFullpage
				//fullpage options
				// licenseKey={null}
				anchors={['intro', 'list']}
				scrollingSpeed={1000}
				render={({ state, fullpageApi }) => {
					return (
						<ReactFullpage.Wrapper>
							<div className="section" style={{ background: '#dcdde1' }}>
								<Container>
									<Intro api={fullpageApi} />
								</Container>
							</div>
							{/* < className="section" style={{ background: '#dcdde1' }}> */}
							<div className="section" style={{ background: '#f5f6fa' }}>
								<Container>
									<List />
								</Container>
							</div>
						</ReactFullpage.Wrapper>
					)
				}}
			/>
		</>
	)
}

export default Home

import React from 'react'
import { Container } from 'react-bootstrap'
import ReactFullpage from '@fullpage/react-fullpage'

import ListItem from '../components/ListItem'

import './List.css'

const List = () => {
	return (
		<Container className="list-page">
			<div className="wrapper">
				{/* <h1>Daftar Tugas</h1> */}
				<ReactFullpage
					anchors={['intro', 'list']}
					scrollingSpeed={1000} /* Options here */
					slidesNavigation={true}
					//Accessibility
					keyboardScrolling={true}
					animateAnchor={true}
					recordHistory={true}
					render={({ state, fullpageApi }) => {
						return (
							<ReactFullpage.Wrapper>
								<div className="slide">
									<ListItem
										number={'3'}
										date={'15 September 2019'}
										desc={'Upload-lah minimal Judul dan Pendahuluan'}
										path={'/tugas-tiga'}
									/>
								</div>
								<div className="slide">
									<ListItem
										number={'4'}
										date={'23 September 2019'}
										desc={
											'Upload-lah makalah lengkap Anda sesuai dengan persyaratan Gemastik'
										}
										path={'/tugas-empat'}
									/>
								</div>
								<div className="slide">
									<ListItem
										number={'6'}
										date={'27 Oktober 2019'}
										desc={'Mengeksplorasi istilah-istilah dalam penelitian'}
										path={'/tugas-enam'}
									/>
								</div>
							</ReactFullpage.Wrapper>
						)
					}}
				/>
			</div>
		</Container>
	)
}

export default List

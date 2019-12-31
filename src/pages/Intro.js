import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Animated } from 'react-animated-css'

import './Intro.css'
// import bariq from '../images/64.jpg'

const Intro = ({ api }) => {
	const [anim, setAnim] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setAnim(!anim)
		}, 1500)
	}, [anim])
	return (
		<div className="intro-page">
			<div>
				{/* <img className="photo" src={bariq} alt="Bariq Mbani" /> */}
				<h1>Bariq Mbani</h1>
				<h3>140810160064</h3>
				<hr />
				<p align="justify" className="opening">
					Terima kasih kepada Pak Dr. <b>Setiawan Hadi</b>, M.Sc.CS. yang telah
					membimbing di mata kuliah Metodologi Penelitian, ilmu yang bapak
					berikan akan sangat bermanfaat. Website ini dibuat untuk mengumpulan
					tugas-tugas saya yang tidak terkumpulkan. Terima kasih juga telah
					memberi kesempatan untuk mengumpulkan tugas susulan.
				</p>
			</div>
			<div style={{ textAlign: 'center', marginTop: '0px' }}>
				{/* <button
					className="btn btn-primary btn-lg"
				>
					Lihat Daftar Tugas
        </button> */}
				<Animated
					animationIn="zoomIn"
					animationOut="zoomOut"
					animationInDuration={1500}
					animationOutDuration={1500}
					isVisible={anim}
				>
					<p className="dot">.</p>
				</Animated>
				<Animated
					animationIn="zoomIn"
					animationOut="zoomOut"
					animationInDuration={1500}
					animationOutDuration={1500}
					animationInDelay={300}
					animationOutDelay={300}
					isVisible={anim}
				>
					<p className="dot">.</p>
				</Animated>
				<Animated
					animationIn="zoomIn"
					animationOut="zoomOut"
					animationInDuration={1500}
					animationOutDuration={1500}
					animationInDelay={600}
					animationOutDelay={600}
					isVisible={anim}
				>
					<p className="dot">.</p>
				</Animated>
				<p className="to-list" onClick={() => api.moveSectionDown()}>
					Lihat Daftar Tugas
				</p>
				<Animated
					animationIn="slideInUp"
					animationOut="slideOutDown"
					animationInDuration={1500}
					animationOutDuration={1500}
					isVisible={anim}
				>
					<p className="arrow-down" onClick={() => api.moveSectionDown()}>
						<FontAwesomeIcon icon={faChevronDown} />
					</p>
				</Animated>
			</div>
		</div>
	)
}

export default Intro

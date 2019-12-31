import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListItem = ({ number, date, desc, path }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center'
			}}
		>
			<Card style={{ width: '80%' }}>
				<Card.Body>
					<Card.Title>Tugas {number}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
					<Card.Text>{desc}</Card.Text>
					<Link to={path}>Detail...</Link>
				</Card.Body>
			</Card>
		</div>
	)
}

export default ListItem

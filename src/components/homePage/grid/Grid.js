import React, { Component } from 'react'

import './Grid.css'
import Card from '../card/Card'

class Grid extends Component {

	// Grid is made up of GridRows
	// Each GridRow consists of Card components

	// GridRow requires and array of cards it is going to make and the index of the row
	GridRow(cards, id){

		// Check that the cards row/array has been passed
		if(cards == null){
			return null
		}

		// Map each item in the cards array to a Card component with the item's values
		return (
			<div className="row" key={id}>
				{cards.map((item) =>
					<div className={this.props.colClass} key={item.id}>
						<Card image={item.main_image}
							title={item.name}
							article={item.article}
							id ={item._id}
						/>
					</div>
				)}
			</div>

		)

	}

	render() {

		// Check that the items array has been passed to the Grid component
		if(this.props.items == null){
			return null
		}

		const allRows = [] // Array which will contain the rows

		const len = this.props.items.length // Length of the items array passed to the component

		// Number of rows = Number of items / Desired number of items in each row
		const totalRows = Math.ceil(len / this.props.rowLength)

		let countRows = 0

		// While there are rows to create
		while(countRows < totalRows){

			const newRow = [] // Represents the current row being created

			// Add each item to the row, up to the desired length of each row
			for (let i = 0; i < this.props.rowLength; i++){

				newRow.push(this.props.items[i + countRows * this.props.rowLength])
			}
			countRows++

			// Once row completed, create GridRow for the array
			allRows.push(this.GridRow(newRow, countRows))
		}

		// Render just allRows which will be all of the rows populated as GridRow components
		return (
			<div>
				{allRows}
			</div>
		)
	}
}
export default Grid

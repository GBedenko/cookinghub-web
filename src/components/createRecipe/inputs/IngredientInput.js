// Import React
import React from 'react'

// One component representing an ingredient input field
const IngredientInput = ({index, onChange, id, value}) => {

	function onChangeInput(e) {
		e.preventDefault()
		onChange(e, index)
	}

	return (

	// JSX for just the input field as it's dynamically created from CreateRecipe
		<div>
			<label htmlFor={id}>{`Ingredient ${index + 1}: `}</label>
			<input
				type="text"
				name={id}
				className="form-control"
				value={value}
				onChange={onChangeInput}
			/>
		</div>
	)
}

// Export component so it can be imported
export default IngredientInput

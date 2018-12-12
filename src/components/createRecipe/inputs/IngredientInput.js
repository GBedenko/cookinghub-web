import React, { Component } from 'react'

const IngredientInput = ({index, onChange, id, value}) => {
    function onChangeInput(e) {
        e.preventDefault()
        onChange(e, index)
    }
    return (
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
export default IngredientInput
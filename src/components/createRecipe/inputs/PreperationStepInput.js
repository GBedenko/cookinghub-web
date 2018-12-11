import React from 'react'

const StepInput = ({index, onChange, id, value}) => {
    function onChangeInput(e) {
        e.preventDefault()
        onChange(e, index)
    }
    return (
        <div>
            <label htmlFor={id}>{`Step ${index + 1}: `}</label>
            <input
                type="text"
                name={id}
                className="step"
                value={value}
                onChange={onChangeInput}
            />
        </div>
    )
}
export default StepInput
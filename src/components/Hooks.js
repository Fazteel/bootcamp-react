import React, { Component, useState } from 'react'

export default function ColorCheck() {
    const [ color, setColor ] = useState('red');
    const [ car, setCar ] = useState({
        brand: 'Ford',
        model: 'Mustang',
        color: 'red',
        year: 1964
    });
    const updateColor = () => {
        setCar(previousState => {
            return {
                ...previousState,
                color: 'blue'
            }
        })
    }
    return (
        <div>
            <h1>My favorite car is {car.brand} {car.model}! It is a {car.color} car from {car.year}</h1>
            <button className='bg-blue-600 text-white rounded-lg py-2 px-4' type="button" onClick={updateColor}>Change Color</button>
        </div>
    )
}

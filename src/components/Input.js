import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert("Nama sudah di submit: " + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='flex flex-col items-start'>
                <label htmlFor="name" className='mb-2 font-semibold'>Name</label>
                <input className='block w-full' id="name" type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="submit" className='bg-blue-900 text-white mt-2 px-4 py-2 rounded-lg'>Submit</button>
            </form>
        )
    }
}

export default Input;
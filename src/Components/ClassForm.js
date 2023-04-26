import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    name: "",
                    email: "",
                    password: ""
                },
            ]
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        this.setState({
            persons: [...this.state.persons, newPerson],
            name: "",
            email: "",
            password: "",
        });
        console.log(this.state.persons);
    };
    render() {
        return (
            <div className='signupForm'>
                <h1>Sign Up</h1>
                <form
                    onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form>
                {this.state.persons.map((item, index) => {
                    return (
                        <div key={index}>
                            {/* <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Password: {item.password}</p> */}
                        </div>
                    )
                })}
            </div>
        )
    }
}

//export default ClassForm


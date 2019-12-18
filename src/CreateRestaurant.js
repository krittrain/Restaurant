import React, { Component } from 'react';


class CreateRestaurant extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            owner: null,
            rating: null,
        }
    }
    create() {

        console.warn(this.state)
        fetch('http://localhost:3000/restaurants/', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
           }).then((res)=>{
            res.json().then((data)=>{
                console.warn("api result",data)
                this.setState({restaurantList:data})
            })
    })
}
    render() {
        return (
            <div>
                <h1>New Restaurant</h1>
                <input type="text" placeholder="Restorent Name" onChange={(event) => { this.setState({ name: event.target.value }) }} /><br /><br />
                <input type="text" placeholder="owner" onChange={(event) => { this.setState({ owner: event.target.value }) }} /><br /><br />
                <input type="text" placeholder="rating" onChange={(event) => { this.setState({ rating: event.target.value }) }} /><br /><br />
                <button onClick={() => { this.create() }}>Create Restaurant</button>
            </div>
        )

    }
}

export default CreateRestaurant;

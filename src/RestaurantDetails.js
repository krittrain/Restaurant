import React, { Component } from 'react';

class RestaurantDetails extends Component {

    constructor() {

        super()
        this.state = {

            RestaurantDetails: null
        };


    }

    componentDidMount() {
        fetch('http://localhost:3000/restaurants/'+this.props.match.params.id)
            .then((res) => {
                res.json().then((data) => {
                    console.warn("api resi",data)
                    this.setState({ RestaurantDetails: data })
                })
            })
    }
    render() {
        console.warn("state",this.state.RestaurantDetails)
        return (
            
            <div>
                <p>{
                    this.state.RestaurantDetails?
                    <div>
                        <p>{this.state.RestaurantDetails.id}</p>
                        <p>{this.state.RestaurantDetails.name}</p>
                        <p>{this.state.RestaurantDetails.owner}</p>
                        <p>{this.state.RestaurantDetails.rating}</p>
                    </div>

                    :<p>Data is loading...</p>
                    }</p>
            </div>
        );
    }
}

export default RestaurantDetails;
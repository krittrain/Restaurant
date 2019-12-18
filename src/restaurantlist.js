import React from "react";
import {
 
    Link
  } from "react-router-dom";
export default class RestaurantList extends React.Component {
 constructor()
 {
     super()
    this.state = {
        restaurantList: [], // list is empty in the beginning
        error: false
     };
 }

  
   componentDidMount(){
    fetch('http://localhost:3000/restaurants')
    .then((res)=>{
        res.json().then((data)=>{
            console.warn("api result",data)
            this.setState({restaurantList:data})
        })
    })
  }

 

  render() {
      console.warn("state",this.state);
      
  const { restaurantList, error } = this.state
      return (
          <div>
            {
                this.state.restaurantList ?
                <div>
                    <ul>
                    {
                        this.state.restaurantList.map((item)=>
                        
                        <li>
                        <Link to={"/details/"+item.id}>{item.name}</Link>
                        </li>
                        
                            )
                    }
                    </ul>
                </div>
                :<h1>Loading...</h1>
            }
          </div>
      )
}}
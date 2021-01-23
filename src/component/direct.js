import React, { Component } from 'react';
import axios from "axios";
import "./direct.css"

const nurl="https://api.nasa.gov/planetary/apod"
const api ="aqgU7JnMhglwK3iLdUU9PKqcDCnTXXNLaU20CxDW";

class Direct extends Component {
    constructor(){
        super()
        this.state={
            date:"today",
            val:""
        }
    }
    renderData=(data)=>{
        if(data){
        return(
            <div>
                <h1 style={{textAlign:"center"}} >DATE-{data.date}</h1>
                <div className="withImg">
                <img src={data.hdurl}/>
                <div className="desc">
                    <h2>{data.title}</h2>
                    <p>{data.explanation}</p>
                </div>
                </div>
                <h1 className="nasa" >NASA</h1 >
            </div>
        )
        }
        else{
            return(
                <div>
                    <span className="enterDate">ENTER DATE</span>
                </div>

            )
            }
    }
    changeHandler=(e)=>{
        console.log("times")
        axios.get(`${nurl}?date=${e.target.value}&api_key=${api}`)
        .then((res)=>this.setState({val:res.data}))
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <nav className="navbar">
                        <h1  className="navbar-brand mb-0 h1">NASA EVENTS ACCORDING TO DATES</h1 >
                        <input onChange={this.changeHandler} type="date"/>
                    </nav>
                    <div>
                        {this.renderData(this.state.val)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
    
}

export default Direct;

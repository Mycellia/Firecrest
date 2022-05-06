import React from 'react';
import {Link} from 'react-router-dom';

export default class Book extends React.Component{
    //Constructor
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    //Function to fetch data from API
    fetchData(){
        fetch('http://127.0.0.1:8000/flights/api')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
        });
    }

    //When the page is rendered, this function will call
    componentDidMount(){
        this.fetchData();
    }

    render(){
        const empData=this.state.data;
        const rows=empData.map((emp)=>
            <tr key={emp.id}>
                <td>{emp.departing_airport}</td>
                <td>{emp.arriving_airport}</td>
                <td>{emp.departing_gate}</td>
                <td>{emp.arriving_gate}</td>
                <td>{emp.airline}</td>
            </tr>
        );
        return (
            <table>
                <thead>
                    <tr>
                        <th>Departing Airport</th>
                        <th>Arriving Airport</th>
                        <th>Departing Gate</th>
                        <th>Arriving Gate</th>
                        <th>Airline</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
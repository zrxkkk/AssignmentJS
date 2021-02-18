import React, { Component } from 'react'
import './PersonList.css';
import axios from 'axios'
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>

const Person = props => (
    <tr>
      <td>{props.persons.name}</td>
      <td>{props.persons.email}</td>
      <td>{props.persons.phone}</td>
      <td>{props.persons.website}</td>
      <td>{props.persons.address}</td>
      <td>{props.persons.company}</td>
    </tr>
  )

class PersonList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            persons: []
        }
    }


  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

  }

  render() {
    return (
        <div>
            {/* <ul>
                { this.state.persons.map(person => <li>{person.username}</li>)} 
            </ul> */}
        
                { this.state.persons.map(person => (
                    <div class="container">
                        <div class="ec-card">
                            <div class="row" >
                                <div  class="col-auto">
                                    <img class="picture" src= {`https://avatars.dicebear.com/v2/avataaars/${person.username}.svg?options[mood][]=happy`} ></img>
                                </div>
                                <div class="col">
                                    <h2>{person.name}</h2>
                                    <p><strong>Phone: </strong>{person.phone}</p>
                                    <p><strong>Company: </strong>{person.company.name}</p>
                                    <p><strong>Website: </strong>{person.website}</p>
                                    <p><strong>Address: </strong>{person.address.street},{person.address.suite},{person.address.city},{person.address.zipcode}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                
                ))} 
            
        </div>
    )
  }
}

export default PersonList
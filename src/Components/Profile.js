import React, { Component } from 'react'

class Profile extends Component {

    state = {
        profile: ['Tammy' , 'Andrew'],
        onlineprofile: [],
        person: []
    }
 
    loadOneLevel = () => {
        const fetchUrlTypeCode = 'https://jsonplaceholder.typicode.com/todos';
        fetch(fetchUrlTypeCode)
        .then(res => res.json())
        .then ((data) =>  this.setState({onlineprofile: data}))
    }
     
    loadMultiLevel = () => {
        fetch('https://randomuser.me/api/?results=500')
        .then(response =>  response.json())
        .then(resData => 
       this.setState({ person: resData.results })
    )
    }

    componentWillMount() {
        this.loadOneLevel();
        this.loadMultiLevel();
    }
    render() {
        
        const displayTemplate =
            this.state.profile.map((res, index) => <p key={index}> {res}</p>)
        
        const displayTemplate_online_oneLevel =
                 this.state.onlineprofile.map((res, index) => 
                     <p key={index}> {res.title}</p>
                 );
        const displayTemplate_online =
                 this.state.person.map((res,index) => 
                     <p key={index}> {res.name.first}</p>
                 );

    return (
      <div>
            {displayTemplate}
            {displayTemplate_online_oneLevel} 
            {displayTemplate_online} 
            
      </div>
    )
  }
}

export default Profile;
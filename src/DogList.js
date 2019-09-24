import React, { Component } from 'react';

class DogList extends Component {
  render() {
    return (
      <div>
        {this.props.dogData.map(dog => (
          <div>
            <img src={dog.src} />
            <p>{dog.name}</p>
            <p>{dog.age}</p>
            <p>{dog.facts}</p>
          </div>
        ))
        }
      </div>
    );
  }
}

export default DogList;
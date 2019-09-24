import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class DogDetails extends Component {
  render () {
    if(!this.props.dogData) {
      return <Redirect to="/dogs"/>;
    }

    return (
      <div>
        <div>
            <img src={this.props.dogData.src} />
            <p>{this.props.dogData.name}</p>
            <p>{this.props.dogData.age}</p>
            <p>{this.props.dogData.facts}</p>
          </div>
      </div>
    );
  }
}

export default DogDetails;
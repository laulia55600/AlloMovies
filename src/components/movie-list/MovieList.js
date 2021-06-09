import React, { Component } from 'react';

export default class MovieList extends Component {

  render() {
    return (
    <div className='w-75 d-flex flex-row flex-wrap align-content-start'>
      
      <div className= "w-25 p-2">
        <div className="border">Film</div>
      </div>
      <div className= "w-25 p-2">
        <div className="border">Film</div>
      </div>
      <div className= "w-25 p-2">
        <div className="border">Film</div>
      </div>
      <div className= "w-25 p-2">
        <div className="border">Film</div>
      </div>
      <div className= "w-25 p-2">
        <div className="border">Film</div>
      </div>

    </div>

    );
  }

}
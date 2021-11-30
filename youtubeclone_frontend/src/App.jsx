import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        videoId: '',
        video: '',
        videos: [],
        comments: []
     }
  }

  componentDidMount() {

  }



  render() { 
    return ( 
      <div>
        
      </div>
     );
  }
}
 
export default App;

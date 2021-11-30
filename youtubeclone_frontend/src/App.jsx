import React, { Component } from 'react';
import axios from 'axios';
import REACT_APP_KEY from './key' 



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        apiKey: REACT_APP_KEY, 
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

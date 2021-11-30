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
    this.getVideo()

  }

  async getVideo(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=WuBUTa6cS5w&key=${this.state.apiKey}&part=snippet,contentDetails,statistics,status`)
    this.setState({
      videoId: response.data.items[0].id,
      video: response.data.items[0]
    })
  }

  getSearch = async(event) => {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${this.state.apiKey}&q=${search}`)
    this.setState({
      videos: response.data.items,
      videoId: response.data.items[0].id.videoId,
      video: response.data.items[0]
    })
    this.getComments()
  }

  



  render() { 
    return ( 
      <div>

      </div>
     );
  }
}
 
export default App;

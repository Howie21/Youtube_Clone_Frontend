import React, { Component } from 'react';
import axios from 'axios';
import REACT_APP_KEY from './key' 

import SearchBar from "./components/SearchBar/SearchBar";
import Sidebar from "./components/SideBar/SideBar";
import Comments from "./components/Comments/Comments";



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

  async getComments() {
    let response = await axios.get('http://127.0.0.1:8000/comment/')
    this.filterComments(response.data)
  }

  filterComments(arr){
    let filteredComments = []
    arr.forEach(comment => {
      if(comment.videoId === this.state.videoId) {
        filteredComments.push(comment)
      }
    })
    this.setState({
      comments: filteredComments
    })
  }

  addComment = () => {
    this.getComments()
  }

  selectVideo = (videoId, video) => {
    this.setState({
      videoId: videoId,
      video: video
    })
    this.getComments()
  }



  render() { 
    let title = 'YoutubeClone'
    let description = 'YoutubeClone'
    if(this.state.video !== ''){
      title = unescape(this.state.video.snippet.title)
      description = unescape(this.state.video.snippet.description)
    }

    return ( 
      <div>
        <div className="header">
          <img src="../public/youtube_icon.png" />
          <SearchBar startSearch={this.getSearch} />
        </div>
        <div className="row">
          <div className="col-8">
            <iframe id="existing-iframe-example" width="100%" height="650px" src={`https://www.youtube.com/embed/${this.state.videoId}`} ></iframe>
            <h3>{title}</h3>
            <h5>{description}</h5>
            {<Comments videoId={this.state.videoId} comments={this.state.comments} addComment={this.addComment} />}
          </div>
          <div className="col-3 d-flex justify-content-left sidebar">
            <Sidebar videos={this.state.videos} selectVideo={this.selectVideo} />
          </div>
        </div>
      </div>
     );
  }
}
 
export default App;

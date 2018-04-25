import React, {Component} from 'react';
import axios from 'axios';


class Song extends Component {
  constructor() {
    super();
      songList: []
  }

  // query in use here 
  componentDidMount() {
    axios.get(`/songs?=${this.state.songList[0].id}`)
    .then(response => {
      this.setState({ songList: response.data });
      console.log(this.state.songList)
    })
  }

  render() {
  
    var songs = this.state.songList.map((curr, index) => {
      return (
        <div key={index}> 
          <h1> {curr.song} </h1>


        </div>
      )
    })

    return(
      <div> Songs 
      <div> {songs} </div>
      </div>
    )
  }
}


export default Song;
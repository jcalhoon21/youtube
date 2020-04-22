import React from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import youtube from '../api/youtube';

class App extends React.Component {
  state = {
    videos: []
  }
  
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        // part: 'snippet',
        // maxResults: 5,
        // key: KEY
      }
    });

    this.setState({ videos: response.data.items })
    
    // console.log(term);
    // console.log(response.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

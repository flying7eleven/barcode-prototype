import React, { Component } from "react";
import Camera from "react-html5-camera-photo";

class App extends Component {
  componentWillMount() {
    this.setState({
      dataUri: ""
    });
  }

  onTakePhoto(dataUri) {
    this.setState({
      dataUri
    });
  }

  render() {
    return (
      <div className="App">
        <Camera
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
        />
        <div>{this.state.dataUri}</div>
      </div>
    );
  }
}

export default App;

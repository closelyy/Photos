import React from 'react';
import ReactDOM from 'react-dom';
import PhotoCarousel from './photoCarousel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <PhotoCarousel />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

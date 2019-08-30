import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PhotoCarousel from './photoCarousel';

const obtainBusinessId = () => {
  // use window.location to obtain endpoint
  const { pathname } = window.location;
  return pathname.slice(12, pathname.length);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    const businessId = obtainBusinessId();
    console.log(businessId);
    axios.get('/businesses/28/photos')
      .then((response) => {
        this.setState({ photos: response.data });
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // always executed
      });
  }

  render() {
    const { photos } = this.state;
    console.log('ARRRRRAY:', photos);
    return (
      <div>
        <h1>Hello World</h1>
        <PhotoCarousel photos={photos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

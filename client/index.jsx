import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PhotoCarousel from './components/PhotoCarousel';

const obtainBusinessId = () => {
  const { pathname } = window.location;
  console.log(window.location);
  return pathname.slice(12, pathname.length);
};

const obtainOrigin = () => {
  const { origin } = window.location;
  return origin;
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
    const origin = obtainOrigin();
    axios.get(`${origin}/api/businesses/${businessId}/photos`)
      .then((response) => {
        this.setState({ photos: response.data });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        <PhotoCarousel photos={photos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

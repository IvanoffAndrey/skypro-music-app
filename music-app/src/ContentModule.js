import React from "react";
import Playlist from "./Playlist";

class ContentModule extends React.Component {
  state = {
    music: null,
    isLoading: false,
  };
  componentDidMount() {
    fetch("https://painassasin.online/catalog/track/all/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ isLoading: false, music: data });
      });
  }

  render() {
    const { music, isLoading } = this.state; // все необходимое взяли из state

    return (
      <React.Fragment>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(music) && <Playlist data={music} />}
      </React.Fragment>
    );
  }
}

export default ContentModule;

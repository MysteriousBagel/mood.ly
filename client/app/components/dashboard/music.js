import React from 'react';
import controller from '../../services/controllers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Headset from 'material-ui/svg-icons/hardware/headset';

class Music extends React.Component {
  constructor(props) {
    super(props);

    this.handleLikeButton = this.handleLikeButton.bind(this);
  }

  handleLikeButton() {
    const username = this.props.user;
    const music = {
      videoId: this.props.videoId,
      mood: this.props.mood,
    };

    controller.likeMusic(music, username, (data) => {
      console.log('MUSIC, ', data);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Card
          style={{
            height: 350,
            width: 300,
            margin: '0 auto',
            border: '4px solid #424242',
            borderRadius: '25px',
            boxShadow: 'none',
          }}
        >
          <CardHeader
            style={{
              height: 75,
            }}
          >
            <IconButton
              disableTouchRipple={Boolean(true)}
              style={{
                float: 'left',
              }}
            ><Headset /></IconButton>
            <IconButton
              style={{
                float: 'right',
              }}
              onClick={this.handleLikeButton}
            >
              <Favorite
                color={'#4f94cd'}
                hoverColor={'#bfefff'}
              />
            </IconButton>
          </CardHeader>
          <CardMedia>
            <iframe src={`https://youtube.com/embed/${this.props.videoId}`} height="200px" width="250px" />
          </CardMedia>
        </Card>
      </MuiThemeProvider>
    );
  }
}

Music.propTypes = {
  videoId: React.PropTypes.string,
  mood: React.PropTypes.string,
  user: React.PropTypes.object,
};

export default Music;

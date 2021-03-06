import React, { Component } from 'react';
import { DPlayer, RPlayer } from './Players';
// import DownloadButton from './download';

import youtubelogo from '../assets/youtubeLogo.svg';
import deezerlogo from '../assets/deezerlogo.svg';
import {
  mediaPropTypes,
  mediaDefaultProps,
  PlayerPropTypes,
  PlayerdefaultProps,
  defaultConfig,
} from '../props';
import {
  DLButtonYou,
  DLButtonDeez,
} from '../styling/Media.style';
import {
  RegexpYou,
  RegexpDeez,
} from '../utils/tools';

const LogoComponent = ({ mediaType }) => (
  <div id={mediaType === 'Youtube' ? 'mediabgDivYou' : 'mediabgDivDeez'}>
    <img
      id={mediaType === 'Youtube' ? 'mediaDivImgYou' : 'mediaDivImgDeez'}
      src={mediaType === 'Youtube' ? youtubelogo : deezerlogo}
      alt=""
    />
  </div>
);

const withEither = (NullComponent, YouPlayer, DeezPlayer) => ({ ...props }) => {
  const { mediaID, mediaType } = props;
  const config = defaultConfig;
  switch (true) {
    case (RegexpDeez(mediaID)) && mediaType === 'Deezer': // true if Deezer ID
      return <DeezPlayer config={config.deez} {...props} />;
    case (RegexpYou(mediaID) && mediaType === 'Youtube'): // true if Youtube ID
      return <YouPlayer {...props} />;
    default: // Resort to null element on start.
      return <NullComponent {...props} />;
    // default:
    //   console.log('somehow it still fall to default case, what the fuck?!');
  }
};

const DeezerOrYoutubeOrNull = withEither(LogoComponent, RPlayer, DPlayer);

class Media extends Component {
  static propTypes = mediaPropTypes;

  static defaultProps = mediaDefaultProps;

  constructor() {
    super();
    this.handleClickDownload = this.handleClickDownload.bind(this);
    this.state = {
      activate: false,
    };
  }

  shouldComponentUpdate(nextprops) {
    const {
      mediaObj: {
        MediaType,
        MediaData: {
          ID,
        },
      },
    } = nextprops;
    if (MediaType === 'Youtube' && RegexpYou(ID)) {
      return true;
    }
    if (MediaType === 'Deezer' && RegexpDeez(ID)) {
      return true;
    }
    return false;
  }

  handleClickDownload = () => () => {
    const {
      onDownload,
      mediaObj: {
        MediaData: {
          ID,
          songObject,
        },
      },
    } = this.props;
    const downloadObject = {
      state: 'progress',
      Id: ID,
      songObj: songObject,
    };
    if (songObject !== undefined) {
      onDownload(downloadObject);
    }
  };

  render() {
    const {
      mediaObj: {
        MediaType,
        MediaData: {
          ID,
        },
      },
      downloadObject: {
        state,
      },
    } = this.props;
    const deezActivate = RegexpDeez(ID) && state === 'idle';
    const youActivate = RegexpYou(ID) && state === 'idle';
    return (
      <div className="MediaVidDiv">
        <DeezerOrYoutubeOrNull
          mediaID={ID}
          mediaType={MediaType}
        />
        <div className="DownloadMediaDiv">
          {
            MediaType === 'Youtube'
              ? (
                <DLButtonYou
                  type="button"
                  className="DownloadButton"
                  active={youActivate}
                  onClick={this.handleClickDownload(RegexpYou(ID))}
                >
                  Download
                </DLButtonYou>
              ) : (
                <div>
                  <DLButtonDeez
                    type="button"
                    className="DownloadButton"
                    active={deezActivate}
                    onClick={this.handleClickDownload(deezActivate)}
                  >
                    Download
                  </DLButtonDeez>
                </div>
              )
          }
        </div>
      </div>
    );
  }
}

RPlayer.propTypes = PlayerPropTypes;
RPlayer.defaultProps = PlayerdefaultProps;
DPlayer.propTypes = PlayerPropTypes;
DPlayer.defaultProps = PlayerdefaultProps;

export default Media;

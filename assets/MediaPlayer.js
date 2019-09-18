function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this.interacted = false;

  this._initPlugins();
}
// eslint-disable-next-line no-underscore-dangle
MediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,

    get muted() {
      return this.media.mute;
    },
    set muted(value) {
      this.media.mute = value;
    },
  };

  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};

MediaPlayer.prototype.interact = function () {
  this.interacted = true;
};
MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};
MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};
MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
    if (!this.interacted) {
      this.unmute();
    }
  } else {
    this.pause();
  }
  this.interact();
};
MediaPlayer.prototype.toggleMute = function () {
  if (this.media.muted) {
    this.unmute();
  } else {
    this.mute();
  }
  this.interact();
};

export default MediaPlayer;

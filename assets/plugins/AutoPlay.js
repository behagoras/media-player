function AutoPlay() {
  this.interacted = false;
}
AutoPlay.prototype.run = function name(player) {
  player.mute();
  player.play();
};
export default AutoPlay;

function AutoPlay() {
}
AutoPlay.prototype.run = function name(player) {
  debugger;
  if(!player.muted){
    player.muted = true;
  }
  // player = muted();
  player.play();
};
export default AutoPlay;

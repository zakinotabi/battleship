export default function finishBtnEvent(finishBtn, player) {
  const playerContainer1 = document.querySelector('.player1-container');
  const playerContainer2 = document.querySelector('.player2-container');
  const emojiP1 = document.querySelector('.emoji-p1');
  const emojiP2 = document.querySelector('.emoji-p2');

  finishBtn.addEventListener('click', () => {
    if (player.id === 1) {
      emojiP2.style.display = 'none';
      playerContainer2.style.filter = 'blur(0px)';
      playerContainer1.style.filter = 'blur(25px)'; //and hide ships that got placed
    } else {
      emojiP1.style.display = 'none';
      playerContainer2.style.filter = 'blur(25px)';
      playerContainer1.style.filter = 'blur(0px)';
    }
    finishBtn.style.display = 'none';
  });
}

import createElement from '../UI/createUtilsUI';

export default function startBtnEvent() {
  const startBtn1 = document.querySelector('.start-btn1');
  const startBtn2 = document.querySelector('.start-btn2');
  const shipContainerP1 = document.getElementById('ships-container1');
  const shipContainerP2 = document.getElementById('ships-container2');
  const playerContainer1 = document.querySelector('.player1-container');
  const playerContainer2 = document.querySelector('.player2-container');
  const finishBtn1 = document.querySelector('.finish-btn1');
  const finishBtn2 = document.querySelector('.finish-btn2');
  const emojiP1 = document.querySelector('.emoji-p1');
  const emojiP2 = document.querySelector('.emoji-p2');

  startBtn1.addEventListener('click', () => {
    shipContainerP1.style.filter = 'blur(0px)';
    playerContainer2.style.filter = 'blur(25px)';
    // shipContainerP2.style.filter = 'blur(0px)';
    startBtn1.style.display = 'none';
    finishBtn1.style.display = 'block';
    // startBtn2.style.display = 'none';

    emojiP1.style.display = 'none';
    emojiP2.style.display = 'block';
  });
  startBtn2.addEventListener('click', () => {
    shipContainerP2.style.filter = 'blur(0px)';
    playerContainer1.style.filter = 'blur(25px)';
    // shipContainerP2.style.filter = 'blur(0px)';
    startBtn2.style.display = 'none';
    finishBtn2.style.display = 'block';
    // startBtn1.style.display = 'none';

    emojiP2.style.display = 'none';
    emojiP1.style.display = 'block';
  });
}

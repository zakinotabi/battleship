import createElement from './utilsUI';

export default function startPlacing() {
  const containerP1 = document.querySelector('.player1-container');
  const containerP2 = document.querySelector('.player2-container');

  const startBtn1 = createElement('button', 'start startBtn1', 'Start', null, {
    click: () => {
      containerP1.style.filter = 'blur(0px)';
      startBtn1.style.display = 'none';
    },
  });
  const startBtn2 = createElement('button', 'start startBtn1', 'Start', null, {
    click: () => {
      containerP2.style.filter = 'blur(0px)';
      startBtn2.style.display = 'none';
    },
  });
  containerP1.after(startBtn1);
  containerP2.after(startBtn2);
}

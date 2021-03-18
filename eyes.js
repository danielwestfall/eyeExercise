const balls = document.getElementsByClassName('ball');

document.ontouchmove = (event) => {
  const x = (event.touches.clientX * 100) / window.innerWidth + '%';
  const y = (event.touches.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++){
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  };

};

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++){
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  };

};

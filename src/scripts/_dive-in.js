addEventListener('DOMContentLoaded', () => {
  const diveIn = document.querySelector('dive-in');
  const stackContainer = diveIn && diveIn.querySelector('stack-container');

  if (stackContainer) {
    const stackItems = [...stackContainer.querySelectorAll('stack-item')].reverse();

    for (let i = 0; i < stackItems.length; i++) {
      stackItems[i].style.setProperty('--index', i);
    }

    document.addEventListener('mousemove', (e) => {
      let vw = window.innerWidth;
      let vh = window.innerHeight;

      let vc = {
        x: vw / 2,
        y: vh / 2,
      };

      let x = e.clientX;
      let y = e.clientY;

      let transformOffset = {
        x: `${-(x <= vc.x ? -(vc.x - x) : x - vc.x)}px`,
        y: `${-(y <= vc.y ? -(vc.y - y) : y - vc.y)}px`,
      };

      stackContainer.style.setProperty('--mouse-x', transformOffset.x);
      stackContainer.style.setProperty('--mouse-y', transformOffset.y);
    });
  }
});

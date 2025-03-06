// Your code here.
document.addEventListener('DOMContentLoaded', (event) => {
  const container = document.querySelector('.container');
  const cubes = document.querySelectorAll('.cube');
  let selectedCube = null;
  let offsetX = 0;
  let offsetY = 0;

  cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
      selectedCube = e.target;
      offsetX = e.clientX - selectedCube.getBoundingClientRect().left;
      offsetY = e.clientY - selectedCube.getBoundingClientRect().top;
      selectedCube.style.zIndex = 1000; // make sure the cube is on top
      selectedCube.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
      if (selectedCube) {
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        // Ensure the cube stays within the container
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x + selectedCube.offsetWidth > container.offsetWidth) {
          x = container.offsetWidth - selectedCube.offsetWidth;
        }
        if (y + selectedCube.offsetHeight > container.offsetHeight) {
          y = container.offsetHeight - selectedCube.offsetHeight;
        }

        selectedCube.style.left = `${x}px`;
        selectedCube.style.top = `${y}px`;
      }
    });

    window.addEventListener('mouseup', () => {
      if (selectedCube) {
        selectedCube.style.zIndex = 1; // reset z-index
        selectedCube.style.cursor = 'grab';
        selectedCube = null;
      }
    });
  });
});

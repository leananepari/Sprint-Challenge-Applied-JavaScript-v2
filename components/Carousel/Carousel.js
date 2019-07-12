/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
Carousel();

function Carousel() {
  buildCarousel();

  let index = 1; //initial index of an image
  let loopIsOn = false;
  let leftButton = document.querySelector('.left-button');
  let rightButton = document.querySelector('.right-button');
  
  //Add event listeners to buttons
  leftButton.addEventListener('click', () => handleLeftClick(event));
  rightButton.addEventListener('click', () => handleRightClick(event));

  handleLeftClick = (e) => {
    e.preventDefault();
    if (loopIsOn === false) {
      loop();
      loopIsOn = true;
    }
  }

  handleRightClick = (e) => {
    e.preventDefault();
    if (loopIsOn === false) {
      loop();
      loopIsOn = true;
    }
  }

  loop = () => {

    infinite = () => {
      setTimeout(function() {
        if (index < 4) {
          document.querySelector(`img[data-img="${index}"]`).classList.remove('selected');
          index++;
          document.querySelector(`img[data-img="${index}"]`).classList.add('selected');
          infinite();
        } else {
          document.querySelector(`img[data-img="${index}"]`).classList.remove('selected');
          index = 1;
          document.querySelector(`img[data-img="${index}"]`).classList.add('selected');
          infinite();
        }

      }, 2000)
    }
    infinite();
  }
}


function buildCarousel() {
  //Create carousel container div
  let carousel = document.createElement('div');
  carousel.className = 'carousel';

  //Create all of its elements
  let leftBtn = document.createElement('div');
  leftBtn.className ='left-button';
  leftBtn.textContent = '<';

  let img1 = document.createElement('img');
  img1.src = "../../assets/carousel/mountains.jpeg";
  img1.className = 'selected';
  img1.dataset.img = '1';

  let img2 = document.createElement('img');
  img2.src = "../../assets/carousel/computer.jpeg";
  img2.dataset.img = '2';

  let img3 = document.createElement('img');
  img3.src = "../../assets/carousel/trees.jpeg";
  img3.dataset.img = '3';

  let img4 = document.createElement('img');
  img4.src = "../../assets/carousel/turntable.jpeg";
  img4.dataset.img = '4';

  let rightBtn = document.createElement('div');
  rightBtn.className = 'right-button';
  rightBtn.textContent = '>';

  //Append all the element to carousel div
  carousel.appendChild(leftBtn);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightBtn);

  return document.querySelector('.carousel-container').appendChild(carousel);
}
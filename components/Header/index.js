// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  //Create header container div
  let header = document.createElement('div');
  header.className = 'header';

  //Create its elements
  let date = document.createElement('span');
  date.className = 'date';
  date.textContent = 'March 28, 2019';

  let title = document.createElement('h1');
  title.className = 'Lambda Times';

  let temp = document.createElement('span');
  temp.className = 'temp';
  temp.textContent = '98°';

  //Append elements to container
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temp);

  return document.querySelector('.header-container').appendChild(header);
}

Header();
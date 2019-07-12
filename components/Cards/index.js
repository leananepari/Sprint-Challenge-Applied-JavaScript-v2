// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    let articles = response.data.articles;
    for (let topic in articles) {
      articles[topic].forEach(topic => {
        Card(topic);
      })
    }
  })
  .catch(error => {
    console.log(error)
  })


function Card(article) {
  //Create Card container div
  let card = document.createElement('div');
  card.className = 'card';

  //Create all of its elements
  let headline = document.createElement('div');
  headline.className = 'headline';
  headline.textContent = article.headline;

  let author = document.createElement('div');
  author.className = 'author';
    //Create author divs elements
    let imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

      let img = document.createElement('img');
      img.src = article.authorPhoto;

      //Append img to its container
      imgContainer.appendChild(img);

    let byName = document.createElement('span');
    byName.textContent = `By ${article.authorName}`;

    //Append elements to Author div
    author.appendChild(imgContainer);
    author.appendChild(byName);
  
  //Append elements to Card div
  card.appendChild(headline);
  card.appendChild(author);

  return document.querySelector('.cards-container').appendChild(card);
}
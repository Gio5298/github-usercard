/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/Gio5298')
// .then((response) => {
//   console.log(response);
// })
// .catch((error) => {
//   console.log(error);
// })

//My own card vvv
axios.get('https://api.github.com/users/Gio5298')
.then(response => {
  	console.log(response.data)
    cardMaker(response.data)
  })
    .catch(error => {
    console.log(error)
  });

  //Others Cards vvv
  axios.get('https://api.github.com/users/leachcoding')
.then(response => {
  	console.log(response.data)
    cardMaker(response.data)
  })
    .catch(error => {
    console.log(error)
  });

  axios.get('https://api.github.com/users/MarFan')
.then(response => {
  	console.log(response.data)
    cardMaker(response.data)
  })
    .catch(error => {
    console.log(error)
  });

  axios.get('https://api.github.com/users/bseverino')
.then(response => {
  	console.log(response.data)
    cardMaker(response.data)
  })
    .catch(error => {
    console.log(error)
  });

  axios.get('https://api.github.com/users/crutledgedev')
.then(response => {
  	console.log(response.data)
    cardMaker(response.data)
  })
    .catch(error => {
    console.log(error)
  });

  axios.get('https://api.github.com/users/itshui3')
  .then(response => {
      console.log(response.data)
      cardMaker(response.data)
    })
      .catch(error => {
      console.log(error)
    });
  
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

function cardMaker(profileInfo){

  //created elements vvv
    const newCard = document.createElement('div'),
      cardPic = document.createElement('img'),
      cardContent = document.createElement('div'),
      cardName = document.createElement('h3'),
      cardUserName = document.createElement('p'),
      cardLoc = document.createElement('p'),
      cardLink = document.createElement('p'),
      cardFollowers = document.createElement('p'),
      cardFollowing = document.createElement('p'),
      cardBio = document.createElement('p');

  //created structure vvv
    newCard.appendChild(cardPic);
    newCard.appendChild(cardContent);
    cardContent.appendChild(cardName);
    cardContent.appendChild(cardUserName);
    cardContent.appendChild(cardLoc);
    cardContent.appendChild(cardLink);
    cardContent.appendChild(cardFollowers);
    cardContent.appendChild(cardFollowing);
    cardContent.appendChild(cardBio);

  //set content vvv
    cardPic.setAttribute ('src', profileInfo.avatar_url)
    cardName.textContent = profileInfo.name
    cardUserName.textContent = profileInfo.login
    cardLoc.textContent = `Location: ${profileInfo.location}`
    cardPic.setAttribute('alt', `${profileInfo.name}'s photo`)
    cardLink.setAttribute('href', profileInfo.html_url)
    cardLink.textContent = `Profile: ${profileInfo.html_url}`
    cardFollowers.textContent = `Followers: ${profileInfo.followers}`
    cardFollowing.textContent = `Following: ${profileInfo.following}`
    cardBio.textContent =  `Bio: ${profileInfo.bio}`

  //applied classes vvv
    newCard.classList.add('card');
    cardContent.classList.add('card-info');
    cardName.classList.add('name');
    cardUserName.classList.add('username');

  //newCard vvv
    const cards = document.querySelector('.cards')
    cards.appendChild(newCard)
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['https://github.com/leachcoding','https://github.com/itshui3','https://github.com/JacobWashburn','https://github.com/reeceap124','https://github.com/bseverino','https://github.com/crutledgedev','https://github.com/MarFan'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

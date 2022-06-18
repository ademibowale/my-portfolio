const menuBtn = document.querySelector('.openNav');
const closeBtn = document.querySelector('.menu-list');
const portfolioLink = document.querySelector('.portfolio-link');
const aboutLink = document.querySelector('.about-link');
const contactLink = document.querySelector('.contact-link');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('myLinks').style.width = '100%';
  document.getElementById('myLinks').style.display = 'block';
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('myLinks').style.width = '0%';
});

portfolioLink.addEventListener('click', () => {
  document.getElementById('myLinks').style.width = '0%';
});
aboutLink.addEventListener('click', () => {
  document.getElementById('myLinks').style.width = '0%';
});
contactLink.addEventListener('click', () => {
  document.getElementById('myLinks').style.width = '0%';
});


const cardContainer = document.querySelector('.project')
const data = [{id: '1',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['Java', 'bootstrap', 'ruby'],
               image: 'https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?w=2000'},
               {id: '2',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby'],
               image: 'images/Snapshoot_Portfolio.png'},
               {id: '3',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby'],
               image: 'images/Snapshoot_Portfolio.png'},
               {id: '4',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby'],
               image: 'images/Snapshoot_Portfolio.png'},
               {id: '5',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby'],
               image: 'images/Snapshoot_Portfolio.png'},
               {id: '6',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby'],
               image: 'images/Snapshoot_Portfolio.png'},
               {id: '7',
               title: 'Multi-Post Stories',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
               project_list: ['css', 'html', 'bootstrap', 'ruby'],
               image: 'images/Img_Placeholder22.png'},
               ]

data.forEach((item, index) => {
  if (index < 6) {
  cardContainer.innerHTML += `<li class="project-card bank">
  <div class="text-container ">
      <h3 class="project-title">${item.title}</h3>
      <p class="project-text">${item.text}</p>
      <ul class="list-container">
          <li class="project-list">${item.project_list[0]}</li>
          <li class="project-list">${item.project_list[1]}</li>
          <li class="project-list">${item.project_list[2]}</li>
      </ul>
  </div>
  <button id=${item.id} onclick='handlePopup(this.id)' class="button card-button" type="button">See Project</button>
</li>`
  }
});

const popup = document.querySelector('.display-popup')

  const handlePopup = (btnId) => {
    console.log('button is working')
    popup.style.display = 'flex'
   data.forEach(item => {
    if (item.id == btnId) {
      popup.innerHTML=`<div class="display-popup-container">
   <div>
   <nav class='popup-nav'>
   <h2 class="post-title">${item.title}</h2>
   <a href="/" class="popup-close-btn">&times</a>
   </nav>
       <ul class="list">
       </ul>
   </div>
   <div class='img-container-fullscreen'>
   <div class='popup-img-container'>
   <img class='popup-img' src="${item.image}" alt="my logo"/>
   </div>
   <div class='popup-content-fullscreen'>
   <p class="post-text">${item.text}</p>
   <div class='popup-btn-container-fullscreen'>
   <button type="button" class="project-button">See Live</button>
   <button type="button" class="project-button">See Source</button>
   </div>
   </div>
   </div>  
</div>`
const tech_list = popup.querySelector('.list')
tech_list.innerHTML = ''
console.log(tech_list)
item.project_list.forEach(tech=>{
  tech_list.innerHTML += `<li>${tech}</li>`
 })
    }
   })
      
    }

    // const popClose = document.querySelector('.popup-close-btn')
    // popClose.addEventListener('click', () => {
    //   popup.style.display = 'none'
    // })




    const extra = document.querySelector('.extra-class')
    extra.addEventListener('click',(e) => {
      handlePopup(e.target.id);
    })
    const extra_fullscreen = document.querySelector('.extra-class-fullscreen')
    extra_fullscreen.addEventListener('click',(e) => {
      handlePopup(e.target.id);
    })

    const email = document.getElementById('my-form');
const form = document.getElementById('my-form');
const displayMsg = document.getElementById('form-message-error');
displayMsg.innerHTML = 'Your email address should be in lowercase';
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = 'visible';
    displayMsg.classList.add('error-msg');
    setTimeout(() => {
      displayMsg.style.visibility = 'hidden';
    }, 3000);
  } else {
    displayMsg.style.visibility = 'hidden';
  }
});
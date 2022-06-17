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
               project_list: ['Java', 'bootstrap', 'ruby']},
               {id: '2',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby']},
               {id: '3',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby']},
               {id: '6',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby']},
               {id: '5',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby']},
               {id: '6',
               title: 'Profesional Art Printing Data',
               text: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
               project_list: ['html', 'bootstrap', 'ruby'],
               image: 'images/Snapshoot_Portfolio.png'}]

data.forEach(item => {
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
});

const popup = document.querySelector('.display-popup')

  const handlePopup = (btnId) => {
    console.log('button is working')
    popup.style.display = 'flex'
   data.forEach(item => {
    if (item.id == btnId) {
      popup.innerHTML=`<div class="display-popup-container">
   <div>
   <nav>
   <h2 class="post-title">${item.title}</h2>
   <a href="/" class="popup-close-btn">&times</a>
   </nav>
       <ul class="list">
       <li>${item.project_list[0]}</li>
       <li>${item.project_list[1]}</li>
       <li>${item.project_list[2]}</li>
   </ul>
   </div>
   <div>
   <img src="${item.image}" alt="my logo"/>
   </div>
   <p class="post-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
   <button type="button" class="project-button">See Live</button>
   <button type="button" class="project-button">See Source</button>
   </div>  
</div> 
</div>`
    }
   })
      
    }

    const popClose = document.querySelector('.popup-close-btn')
    popClose.addEventListener('click', () => {
      popup.style.display = 'none'
    })
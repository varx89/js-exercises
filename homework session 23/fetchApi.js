/*
Folosind Random Data API, preia o lista de 10 utilizatori și afișează pe ecran pe toți. Design-ul este la alegerea ta.

Include cel puțin următoarele informații:
Nume intreg
Email
Username
Avatar
Country
City
Employment Title


*/
const robotSection = document.querySelector('section');

const url = 'https://random-data-api.com/api/v2/users?size=10';

const fetchAPI = async (link) => {
  const response = await fetch(link);
  const body = await response.json();

  let output = '';
  body.forEach((item) => {
    output += `<div class="robot">
        <div class="avatar">
          <img src="${item.avatar}" />
        </div>
        <div class="electric"></div>
        <div class="description">
          <p>
            <i
              class="fa-solid fa-address-card full-name opacity-50 margin-right-05 margin-bottom-1"
            ></i>
            ${item.first_name} ${item.last_name}
          </p>
          <p>
            <i class="fa-solid fa-envelope email opacity-50 margin-right-1"></i>
            ${item.email}
          </p>
          <p>
            <i class="fa-solid fa-user user opacity-50 margin-right-1"></i>
            ${item.username}
          </p>
          <p>
            <i
              class="fa-solid fa-earth-europe country opacity-50 margin-right-1"
            ></i>
            ${item.address.country}
          </p>
          <p>
            <i class="fa-solid fa-city city opacity-50 margin-right-1"></i> ${item.address.city}
          </p>
          <p>
            <i class="fa-solid fa-user-tag job opacity-50 margin-right-1"></i>
            ${item.employment.title}
          </p>
        </div>
        <div class="action">
          <a href="#" class="chat">
            <i class="fa-regular fa-comment-dots"></i> Chat
          </a>
          <a href="#" class="friend"
            ><i class="fa-solid fa-heart"></i> Add Friend</a
          >
        </div>
      </div>`;
  });
  robotSection.innerHTML = output;
};
fetchAPI(url);

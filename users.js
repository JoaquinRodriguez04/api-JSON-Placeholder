const urlUsers = 'https://jsonplaceholder.typicode.com/users'; 
const urlPhotos = 'https://jsonplaceholder.typicode.com/photos'; 
const todos = 'https://jsonplaceholder.typicode.com/todos'; 
const usersContainer = document.querySelector(".users-container");
const photosContainer = document.querySelector(".photos-container");

fetch(urlUsers)
    .then(response => response.json())
    .then((data) => {
        data.forEach(user => {
            const div = document.createElement("div");
            div.classList.add("user");

            div.innerHTML = 
            `
            <p class="color-title">nombre:<span class="color-p">${user.name}</span> </p>
            <p class="color-title">apellido:<span class="color-p">${user.username}</span> </p>
            <p class="color-title">email:<span class="color-p">${user.email}</span> </p>
            <p class="color-title">telefono:<span class="color-p">${user.phone}</span> </p>
    
            `;

            usersContainer.append(div);
        });
    });

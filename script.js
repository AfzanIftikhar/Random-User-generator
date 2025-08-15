fetch('https://randomuser.me//api?results=52')
.then((rawData) => rawData.json() )
.then((data) => {

    console.log(data.results); 
// Create card container
data.results.forEach(el => {

    
const card = document.createElement("div");
card.classList.add("card");

// Create image
const img = document.createElement("img");
img.src = el.picture.large; // You can set an image URL here
img.alt = "";

// Create info container
const info = document.createElement("div");
info.classList.add("info");

// Create name heading
const name = document.createElement("h2");
name.textContent = el.name.first + " " + el.name.last; // Concatenate first and last name

// Create email paragraph
const email = document.createElement("p");
email.textContent = `Gender: ${el.gender}`; // Use the email from the API response

// Create age paragraph
const age = document.createElement("p");
age.textContent = `Age : ${el.dob.age}`; // Use the age from the API response

// Append all to info container
info.appendChild(name);
info.appendChild(email);
info.appendChild(age);

// Append img and info to card
card.appendChild(img);
card.appendChild(info);

// Finally append card to body (or any container)

let main = document.querySelector('.main');

main.appendChild(card);



});


})







.catch((err) => console.log(err))
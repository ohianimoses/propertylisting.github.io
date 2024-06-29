// properties data

const properties = [
    {
        name: "8 Bedroom Duplex",
        description: "Secured, CCTV Camera, Security House, Fenced, Serene environment",
        price: "8500000",
        Image: './pics/h29.jpg',
        location: "Lagos",
        phone: "08012345678"


    },

    {
        name: "8 Bedroom Duplex",
        description: "Secured, CCTV Camera, Fenced, Serene environment",
        price: "500000",
        Image: './pics/h2.jpg',
        location: "Abuja",
        phone: "08012345678"


    }





];

document.addEventListener('DOMContentLoaded', () => 
{
// Properties container element

const propertiesContainer = document.querySelector('.properties-container');

// search input and button

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', () => 
{
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProperties = properties.filter((property) =>
    {
        return property.name.toLowerCase().includes(searchTerm) ||
        property.description.toLowerCase().includes(searchTerm) ||
        property.location.toLowerCase().includes(searchTerm);
        
});

displayProperties(filteredProperties);
});

// function to display properties
function
displayProperties(properties) {
    propertiesContainer.innerHTML = "";
    properties.forEeach((property) => {

        const propertyCard = document.createElement('div');

        propertyCard.classList.add('card', 'mb-4');
        document.createElement('img');
        cardImage.src = property.image;

        cardImage.classList.add('card-img-top');
        const cardBody = document.createElement('div');
        
        cardBody.classList.add('card-body');
        const cardTitle = 
        document.createElement('h5');

        cardTitle.classList.add('card-title');
        cardTitle.textContent = property.name;
        const cardText = document.createElement('p');

        cardText.classList.add('card-text');
        cardText.textContent = 
        property.description;
        const cardPrice = 
        document.createElement('p');

        cardPrice.classList.add('card-text');
        cardPrice.textContent = 
        `Price: ₦${property.price}`;
        const cardLocation = 
        document.createElement('p');

        cardLocation.classList.add('card-text');
        cardLocation.textContent = 
        `Location: ${property.location}`;
        const cardPhone = 
        document.createElement('p');

        cardPhone.classList.add('card-text');
        cardPhone.textContent = 
        `Phone: ${property.phone}`;

        cardBody.appendChild(cardTitle);

        cardBody.appendChild(cardText);

        cardBody.appendChild(cardPrice);

        cardBody.appendChild(cardLocation);

        cardBody.appendChild(cardPhone);

        propertyCard.appendChild(cardImage);

        propertyCard.appendChild(cardBody);

        propertiesContainer.appendChild(propertyCard);
    });

    }
});

// consultancy

const form = document.getElementById('consultancy-form');
const bookConsultationBtn = document.getElementById('book-consultancy');
const paymentoption = document.getElementById('payment-option');
const cardContainer = document.getElementById('card-container');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const paymentMethod = paymentOption.value;
    if (paymentMethod === 'credit-card') {
        const cardNumber = document.getElementById('card-number').value;
        const expirationDate = document.getElementById('expiration-date').value;
        const securityCode = document.getElementById('security-code').value;
        //process credit card payment code
        console.log('processing credit card payment...');
    } else if (paymentMethod === 'bank-transfer') {

        //process bank transfer payment 
        console.log('Processing bank transfer payment...');


    }
    
} 
);
bookConsultationBtn.addEventListener('click', (e) =>
{
    e.preventDefault();
    //validate form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const question = document.getElementById('question').value;
    const paymentoption = document.getElementById('payment').value;

    //process payment and book consultancy session

    



})
//card code


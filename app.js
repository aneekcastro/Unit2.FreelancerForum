// Freelancer names and occupations
const names = ['Alice', 'Bob', 'Carol', 'Steve', 'Leo', 'Jude'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Ventriloquist', 'Astrologer', 'Accountant'];

// Initial freelancers array
let freelancers = [
  { name: 'Alice', occupation: 'Writer', price: 30 },
  { name: 'Bob', occupation: 'Teacher', price: 50 }
];

// Function for calculating average starting price
function calculateAveragePrice() {
  const total = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
  return (total / freelancers.length).toFixed(2);  // Round to 2 decimal places
}

// Function to render freelancers on the page
function renderFreelancers() {
  const freelancerList = document.getElementById('freelancer-list');
  freelancerList.innerHTML = ''; 
  
  freelancers.forEach(freelancer => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;
    freelancerList.appendChild(tr);
  });

  // Updates the average price shown on the page
  document.getElementById('avg-price').textContent = `$${calculateAveragePrice()}`;
}

// Function to generate a new random freelancer 
function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * (100 - 20 + 1)) + 20;  // Random price between $20 and $100

  // Add the new freelancer to the array
  freelancers.push({ name: randomName, occupation: randomOccupation, price: randomPrice });
  
  // Re-render the list of freelancers
  renderFreelancers();
}

// Initialize the page with the initial freelancers
renderFreelancers();

// Add a new freelancer every 3 seconds
setInterval(generateRandomFreelancer, 3000);

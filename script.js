const apiUrl = 'https://workercloudflare.cdent-989.workers.dev/items'; // Replace with your actual Replit URL

let itemsData = []; // To store the fetched data

// Fetch items from the backend and display them
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    itemsData = data;
    displayItems(data);
  })
  .catch(error => {
    console.error('Error fetching items:', error);
  });

// Function to format number with commas
function formatNumberWithCommas(number) {
  return number.toLocaleString(); // Formats number with commas
}

// Function to display the items
function displayItems(items) {
  const itemsList = document.getElementById("items-list");
  itemsList.innerHTML = ''; 

  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-card', item.rarity.toLowerCase());
    itemDiv.dataset.id = item.id; // Store item ID

    itemDiv.innerHTML = `
      <img src="${item.image_url}" alt="${item.name}" width="100" height="100" />
      <h3>${item.name}</h3>
      <p class="item-rarity">${item.rarity}</p>
      <p class="item-price">$${item.estimated_value.toLocaleString()}</p>
    `;

    itemsList.appendChild(itemDiv);
  });
}



// Function to filter items based on search input
function filterItems() {
  const searchValue = document.getElementById('search-bar').value.toLowerCase();
  const filteredItems = itemsData.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );
  displayItems(filteredItems);
}

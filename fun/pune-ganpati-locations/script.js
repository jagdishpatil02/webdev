const stateData = {
  Maharashtra: {
    Pune: [
      {
        name: "Dagdusheth Halwai Ganpati",
        address: "Budhwar Peth, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Dagdusheth+Halwai+Ganpati+Pune",
      },
      {
        name: "Kasba Ganpati",
        address: "Kasba Peth, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Kasba+Ganpati+Pune",
      },
      {
        name: "Tambdi Jogeshwari Ganpati",
        address: "Budhwar Peth, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Tambdi+Jogeshwari+Ganpati+Pune",
      },
      {
        name: "Tulsi Baug Ganpati",
        address: "Tulsi Baug, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Tulsi+Baug+Ganpati+Pune",
      },
      {
        name: "Kesariwada Ganpati",
        address: "Narayan Peth, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Kesariwada+Ganpati+Pune",
      },
      {
        name: "Guruji Talim Mandal",
        address: "Laxmi Road, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Guruji+Talim+Mandal+Pune",
      },
      {
        name: "Shrimant Bhausaheb Rangari Ganpati",
        address: "Budhwar Peth, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Shrimant+Bhausaheb+Rangari+Ganpati+Pune",
      },
      {
        name: "Akhil Mandai Mandal",
        address: "Nana Peth, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Akhil+Mandai+Mandal+Pune",
      },
      {
        name: "Vishrambaug Wada Ganpati",
        address: "Vishrambaug Wada, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Vishrambaug+Wada+Ganpati+Pune",
      },
      {
        name: "Chaturshringi Ganpati",
        address: "Senapati Bapat Road, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Chaturshringi+Ganpati+Pune",
      },
      {
        name: "Sarasbaug Ganpati",
        address: "Sarasbaug, Pune",
        mapLink:
          "https://www.google.com/maps/search/?api=1&query=Sarasbaug+Ganpati+Pune",
      },
    ],
  },
};

const pandalList = document.getElementById("pandalList");

function createPandalCard(pandal) {
  return `
        <div class="bg-white rounded-lg shadow-md p-6 border-2 border-orange-300 hover:border-orange-500 transition duration-300">
            <h2 class="text-xl font-semibold mb-2 text-orange-600">${pandal.name}</h2>
            <p class="text-gray-600 mb-4">${pandal.address}</p>
            <a href="${pandal.mapLink}" target="_blank" class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 inline-flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                View on Map
            </a>
        </div>
    `;
}

function renderPandals() {
  const pandals = stateData.Maharashtra.Pune;
  pandalList.innerHTML = pandals.map(createPandalCard).join("");
}

// Call this function when the page loads
renderPandals();

/**
 * Gontobbo | App Logic
 * Handles rendering, filtering, search, and trip planning.
 */

// State Management
let filteredDestinations = [...destinations];
let savedTripIds = JSON.parse(localStorage.getItem('gontobbo_trips')) || [];

// DOM Elements
const grid = document.getElementById('destinations-grid');
const searchInput = document.getElementById('search-input');
const categoryButtons = document.querySelectorAll('.category-btn');
const statsCount = document.getElementById('stats-count');
const tripCountBadge = document.getElementById('trip-count');

/**
 * Initialize the App
 */
function init() {
    renderDestinations(destinations);
    setupEventListeners();
    updateTripBadge();
}

/**
 * Render Destination Cards
 * @param {Array} data - Array of destination objects
 */
function renderDestinations(data) {
    grid.innerHTML = '';
    
    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-20 text-center">
                <div class="text-6xl mb-4">🗺️</div>
                <h3 class="text-xl font-bold text-gray-700">No destinations found</h3>
                <p class="text-gray-500">Try adjusting your search or filters.</p>
                <button onclick="resetFilters()" class="mt-4 text-emerald-600 font-semibold underline">Reset all filters</button>
            </div>
        `;
        return;
    }

    data.forEach(place => {
        const isSaved = savedTripIds.includes(place.id);
        const card = document.createElement('div');
        card.className = "group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full";
        
        card.innerHTML = `
            <div class="relative overflow-hidden h-52">
                <img src="${place.image}" alt="${place.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute top-3 right-3">
                    <button onclick="toggleSaveTrip(${place.id})" class="p-2 rounded-full backdrop-blur-md transition-colors ${isSaved ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-700 hover:text-red-500'} shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="${isSaved ? 'currentColor' : 'none'}" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
                <div class="absolute bottom-3 left-3 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
                    ${place.category}
                </div>
            </div>
            <div class="p-5 flex-grow flex flex-col">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="font-bold text-lg text-gray-800 leading-tight">${place.name}</h3>
                    <div class="flex items-center text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="ml-1 text-sm font-semibold text-gray-700">${place.rating}</span>
                    </div>
                </div>
                <p class="text-gray-500 text-xs mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    ${place.district}, Bangladesh
                </p>
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">${place.description}</p>
                <div class="flex flex-wrap gap-1 mb-4">
                    ${place.highlights.map(h => `<span class="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full">${h}</span>`).join('')}
                </div>
                <div class="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <div>
                        <span class="text-xs text-gray-400 block uppercase tracking-wider font-semibold">Est. Cost</span>
                        <span class="text-emerald-700 font-bold text-lg">৳${place.price.toLocaleString()}</span>
                    </div>
                    <button class="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-sm">
                        View Details
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Update count in UI
    if (statsCount) statsCount.textContent = data.length;
}

/**
 * Filter Destinations by Search and Category
 */
function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;

    filteredDestinations = destinations.filter(item => {
        const matchesSearch = 
            item.name.toLowerCase().includes(searchTerm) || 
            item.district.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm);
        
        const matchesCategory = 
            activeCategory === 'All' || item.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    renderDestinations(filteredDestinations);
}

/**
 * Setup Event Listeners for UI interaction
 */
function setupEventListeners() {
    // Search Listener
    searchInput.addEventListener('input', handleFilter);

    // Category Tabs Listener
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active', 'bg-emerald-600', 'text-white'));
            categoryButtons.forEach(b => b.classList.add('bg-white', 'text-gray-600'));
            
            btn.classList.add('active', 'bg-emerald-600', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-600');
            
            handleFilter();
        });
    });
}

/**
 * Toggle Save to Trip (Wishlist)
 * @param {number} id - Destination ID
 */
function toggleSaveTrip(id) {
    if (savedTripIds.includes(id)) {
        savedTripIds = savedTripIds.filter(tid => tid !== id);
    } else {
        savedTripIds.push(id);
    }
    
    localStorage.setItem('gontobbo_trips', JSON.stringify(savedTripIds));
    updateTripBadge();
    handleFilter(); // Re-render to show updated heart icons
}

/**
 * Update UI Badge for Saved Trips
 */
function updateTripBadge() {
    if (tripCountBadge) {
        tripCountBadge.textContent = savedTripIds.length;
        tripCountBadge.style.display = savedTripIds.length > 0 ? 'flex' : 'none';
    }
}

/**
 * Reset all filters to default
 */
function resetFilters() {
    searchInput.value = '';
    categoryButtons[0].click(); // Triggers "All" category
}

// Start the application
document.addEventListener('DOMContentLoaded', init);

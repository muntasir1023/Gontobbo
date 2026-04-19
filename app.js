/**
 * GONTOBBO - Main Application Logic
 * Handles filtering, UI interactions, and booking simulations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- State Management ---
    let activeCategory = 'All';
    let searchQuery = '';
    let maxPrice = 20000;
    let wishlist = JSON.parse(localStorage.getItem('gontobbo_wishlist')) || [];

    // --- DOM Elements ---
    const grid = document.getElementById('destinations-grid');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const bookingModal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.close-btn');
    const bookingForm = document.getElementById('booking-form');
    const contactForm = document.getElementById('contact-form');

    // --- Core Functions ---

    /**
     * Renders destination cards based on current filters
     */
    function renderDestinations() {
        // Show loading state briefly
        grid.innerHTML = `
            <div class="col-span-full py-20 text-center">
                <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-emerald-500 border-t-transparent"></div>
                <p class="mt-4 text-slate-500">Searching for destinations...</p>
            </div>
        `;

        setTimeout(() => {
            const filtered = destinations.filter(dest => {
                const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
                const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                     dest.district.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesPrice = dest.price <= maxPrice;
                return matchesCategory && matchesSearch && matchesPrice;
            });

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full py-20 text-center">
                        <div class="text-6xl mb-4">📍</div>
                        <h3 class="text-xl font-bold text-slate-800">No destinations found</h3>
                        <p class="text-slate-500">Try adjusting your filters or search terms.</p>
                        <button onclick="resetFilters()" class="mt-4 text-emerald-600 font-medium hover:underline">Reset all filters</button>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filtered.map(dest => `
                <div class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
                    <div class="relative overflow-hidden h-64">
                        <img 
                            src="${dest.img}" 
                            alt="${dest.name}" 
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onerror="this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800'"
                        >
                        <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wider">
                            ${dest.category}
                        </div>
                        <button onclick="toggleWishlist(${dest.id})" class="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-rose-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ${wishlist.includes(dest.id) ? 'fill-rose-500 text-rose-500' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                    
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold text-slate-800">${dest.name}</h3>
                            <div class="flex items-center text-amber-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                <span class="ml-1 text-sm font-bold text-slate-600">${dest.rating}</span>
                            </div>
                        </div>
                        
                        <div class="flex items-center text-slate-500 text-sm mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            ${dest.district}, Bangladesh
                        </div>
                        
                        <p class="text-slate-600 text-sm line-clamp-2 mb-6">
                            ${dest.desc}
                        </p>
                        
                        <div class="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                            <div>
                                <span class="text-xs text-slate-400 block uppercase font-bold tracking-tighter">Starts from</span>
                                <span class="text-2xl font-black text-emerald-600">৳${dest.price.toLocaleString()}</span>
                            </div>
                            <button onclick="openBookingModal(${dest.id})" class="bg-slate-900 text-white px-5 py-2.5 rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }, 400);
    }

    /**
     * Filters by category
     */
    function handleCategoryClick(e) {
        const btn = e.currentTarget;
        categoryButtons.forEach(b => b.classList.remove('active', 'bg-emerald-600', 'text-white'));
        categoryButtons.forEach(b => b.classList.add('bg-white', 'text-slate-600'));
        
        btn.classList.add('active', 'bg-emerald-600', 'text-white');
        btn.classList.remove('bg-white', 'text-slate-600');
        
        activeCategory = btn.dataset.category;
        renderDestinations();
    }

    /**
     * Resets all search and filter states
     */
    window.resetFilters = () => {
        activeCategory = 'All';
        searchQuery = '';
        maxPrice = 20000;
        
        searchInput.value = '';
        priceRange.value = 20000;
        priceValue.textContent = '20,000';
        
        categoryButtons.forEach(btn => {
            if(btn.dataset.category === 'All') btn.click();
        });
        
        renderDestinations();
    };

    /**
     * Wishlist Management
     */
    window.toggleWishlist = (id) => {
        const index = wishlist.indexOf(id);
        if (index > -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist.push(id);
        }
        localStorage.setItem('gontobbo_wishlist', JSON.stringify(wishlist));
        renderDestinations();
    };

    /**
     * Booking Modal Logic
     */
    window.openBookingModal = (id) => {
        const dest = destinations.find(d => d.id === id);
        document.getElementById('modal-dest-name').textContent = dest.name;
        document.getElementById('modal-dest-id').value = id;
        bookingModal.classList.remove('hidden');
        bookingModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        bookingModal.classList.add('hidden');
        bookingModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    };

    // --- Event Listeners ---

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderDestinations();
    });

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', handleCategoryClick);
    });

    priceRange.addEventListener('input', (e) => {
        maxPrice = parseInt(e.target.value);
        priceValue.textContent = maxPrice.toLocaleString();
        renderDestinations();
    });

    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) closeModal();
    });

    // Form Submissions
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.disabled = true;
        btn.innerHTML = 'Processing...';
        
        setTimeout(() => {
            alert(`Booking successful for ${document.getElementById('modal-dest-name').textContent}! We will contact you at ${e.target.email.value} soon.`);
            btn.disabled = false;
            btn.innerHTML = originalText;
            closeModal();
            bookingForm.reset();
        }, 1500);
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.disabled = true;
        btn.innerHTML = 'Sending...';

        setTimeout(() => {
            alert("Thank you for your message! Our team will get back to you within 24 hours.");
            btn.disabled = false;
            btn.innerHTML = 'Send Message';
            contactForm.reset();
        }, 1500);
    });

    // --- Initialization ---
    renderDestinations();

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
});

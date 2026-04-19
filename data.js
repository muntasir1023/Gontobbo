/**
 * GONTOBBO - Complete Destination Dataset
 * Total: 55 Handpicked Locations in Bangladesh
 */

const destinations = [
    // --- CHITTAGONG DIVISION (HILLS & COASTAL) ---
    {
        id: 1,
        name: "Sajek Valley",
        district: "Rangamati",
        category: "Hills",
        rating: 4.9,
        price: 5500,
        img: "https://images.unsplash.com/photo-1623491845345-42f1b8a514d3?auto=format&fit=crop&w=800",
        desc: "Known as the 'Roof of Rangamati', this hilltop resort is famous for its floating clouds and breathtaking sunrises."
    },
    {
        id: 2,
        name: "Cox's Bazar",
        district: "Cox's Bazar",
        category: "Coastal",
        rating: 4.8,
        price: 3500,
        img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800",
        desc: "The world's longest natural sea beach stretching 120km, offering stunning sunsets and vibrant local seafood."
    },
    {
        id: 3,
        name: "Saint Martin's Island",
        district: "Cox's Bazar",
        category: "Coastal",
        rating: 4.9,
        price: 7000,
        img: "https://images.unsplash.com/photo-1544735032-6a71dd648d07?auto=format&fit=crop&w=800",
        desc: "The only coral island in Bangladesh, a tropical paradise with crystal-clear blue water and coconut groves."
    },
    {
        id: 4,
        name: "Nilgiri",
        district: "Bandarban",
        category: "Hills",
        rating: 4.8,
        price: 4500,
        img: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=800",
        desc: "Located 2200 feet above sea level, offering a spectacular view of the surrounding hills and the Sangu River."
    },
    {
        id: 5,
        name: "Patenga Beach",
        district: "Chittagong",
        category: "Coastal",
        rating: 4.3,
        price: 1500,
        img: "https://images.unsplash.com/photo-1622550181775-520f9247690f?auto=format&fit=crop&w=800",
        desc: "A popular beach near the port city known for its stone-blocked shoreline and sunset street food."
    },
    {
        id: 6,
        name: "Kaptai Lake",
        district: "Rangamati",
        category: "Nature",
        rating: 4.7,
        price: 3000,
        img: "https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&w=800",
        desc: "South Asia's largest man-made lake, surrounded by verdant hills and accessible by scenic boat rides."
    },
    {
        id: 7,
        name: "Keokradong Peak",
        district: "Bandarban",
        category: "Adventure",
        rating: 4.8,
        price: 6000,
        img: "https://images.unsplash.com/photo-1623062310115-684c304886b6?auto=format&fit=crop&w=800",
        desc: "Once thought to be the highest peak in the country, a favorite for trekkers looking for a challenge."
    },
    {
        id: 8,
        name: "Chandranath Hill",
        district: "Chittagong",
        category: "Hills",
        rating: 4.6,
        price: 1200,
        img: "https://images.unsplash.com/photo-1621245781441-26792671e621?auto=format&fit=crop&w=800",
        desc: "A famous pilgrimage site for Hindus with a historic temple atop the Sitakunda hill range."
    },
    {
        id: 9,
        name: "Nafa-khum Waterfall",
        district: "Bandarban",
        category: "Adventure",
        rating: 4.9,
        price: 8500,
        img: "https://images.unsplash.com/photo-1598230439775-812061030e42?auto=format&fit=crop&w=800",
        desc: "The 'Niagara of Bangladesh', this remote waterfall requires a thrilling boat ride and trek to reach."
    },
    {
        id: 10,
        name: "Inani Beach",
        district: "Cox's Bazar",
        category: "Coastal",
        rating: 4.7,
        price: 2500,
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800",
        desc: "Famous for its unique rock formations and quiet, serene environment away from the main crowd."
    },

    // --- SYLHET DIVISION (TEA GARDENS & NATURE) ---
    {
        id: 11,
        name: "Ratargul Swamp Forest",
        district: "Sylhet",
        category: "Nature",
        rating: 4.6,
        price: 2000,
        img: "https://images.unsplash.com/photo-1620650993098-b80980c6579c?auto=format&fit=crop&w=800",
        desc: "The only freshwater swamp forest in Bangladesh, often compared to the Amazon rainforest."
    },
    {
        id: 12,
        name: "Bisnakandi",
        district: "Sylhet",
        category: "Nature",
        rating: 4.7,
        price: 2800,
        img: "https://images.unsplash.com/photo-1590001158193-79ef89fc285c?auto=format&fit=crop&w=800",
        desc: "A cluster of rocks coming from the hills of Meghalaya forming a natural pool of crystal clear water."
    },
    {
        id: 13,
        name: "Jaflong",
        district: "Sylhet",
        category: "Nature",
        rating: 4.5,
        price: 2200,
        img: "https://images.unsplash.com/photo-1610471924041-3b707e46536b?auto=format&fit=crop&w=800",
        desc: "Famous for its stone collections and tea gardens situated right at the foot of the hills."
    },
    {
        id: 14,
        name: "Tanguar Haor",
        district: "Sunamganj",
        category: "Nature",
        rating: 4.8,
        price: 9000,
        img: "https://images.unsplash.com/photo-1595188339002-c8407338e3e4?auto=format&fit=crop&w=800",
        desc: "A unique wetland ecosystem that serves as a sanctuary for migratory birds during winter."
    },
    {
        id: 15,
        name: "Lawachara National Park",
        district: "Maulvibazar",
        category: "Nature",
        rating: 4.4,
        price: 1800,
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800",
        desc: "A lush semi-evergreen forest rich in biodiversity, including the rare Hoolock Gibbon."
    },
    {
        id: 16,
        name: "Madhabkunda Waterfall",
        district: "Maulvibazar",
        category: "Nature",
        rating: 4.3,
        price: 1500,
        img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800",
        desc: "One of the highest waterfalls in Bangladesh, surrounded by dense forests and tea estates."
    },
    {
        id: 17,
        name: "Lalakhal",
        district: "Sylhet",
        category: "Nature",
        rating: 4.6,
        price: 3200,
        img: "https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&w=800",
        desc: "A river known for its emerald green water that changes color depending on light and depth."
    },
    {
        id: 18,
        name: "Sreemangal Tea Gardens",
        district: "Maulvibazar",
        category: "Nature",
        rating: 4.8,
        price: 4000,
        img: "https://images.unsplash.com/photo-1567151244199-6f91d84814e4?auto=format&fit=crop&w=800",
        desc: "The tea capital of Bangladesh, featuring endless rolling hills of manicured tea bushes."
    },

    // --- DHAKA DIVISION (HERITAGE & CULTURE) ---
    {
        id: 19,
        name: "Ahsan Manzil",
        district: "Dhaka",
        category: "Heritage",
        rating: 4.4,
        price: 500,
        img: "https://images.unsplash.com/photo-1624314138470-5a2f24623f10?auto=format&fit=crop&w=800",
        desc: "The historic Pink Palace, once the seat of the Nawabs, now a magnificent museum by the Buriganga."
    },
    {
        id: 20,
        name: "Lalbagh Fort",
        district: "Dhaka",
        category: "Heritage",
        rating: 4.5,
        price: 400,
        img: "https://images.unsplash.com/photo-1574523992226-f76e7370367d?auto=format&fit=crop&w=800",
        desc: "A 17th-century Mughal fort complex with a tomb, mosque, and Diwan-i-Aam."
    },
    {
        id: 21,
        name: "Sonargaon",
        district: "Narayanganj",
        category: "Heritage",
        rating: 4.6,
        price: 800,
        img: "https://images.unsplash.com/photo-1624022879685-3b9a14782069?auto=format&fit=crop&w=800",
        desc: "The ancient capital of Bengal, featuring Panam City and the Folk Art & Craft Museum."
    },
    {
        id: 22,
        name: "National Martyrs' Memorial",
        district: "Savar",
        category: "Heritage",
        rating: 4.8,
        price: 300,
        img: "https://images.unsplash.com/photo-1624128527339-e9354096053f?auto=format&fit=crop&w=800",
        desc: "An architectural masterpiece dedicated to those who sacrificed their lives in the 1971 war."
    },
    {
        id: 23,
        name: "Tara Masjid (Star Mosque)",
        district: "Dhaka",
        category: "Heritage",
        rating: 4.3,
        price: 200,
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800",
        desc: "A stunning mosque decorated with blue stars and Japanese chinitikri mosaic art."
    },
    {
        id: 24,
        name: "Baldha Garden",
        district: "Dhaka",
        category: "Nature",
        rating: 4.0,
        price: 150,
        img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800",
        desc: "One of the oldest botanical gardens in the region, housing a rare collection of plants."
    },

    // --- KHULNA & BARISAL (MANGROVES & RIVERS) ---
    {
        id: 25,
        name: "Sundarbans East Zone",
        district: "Bagerhat",
        category: "Nature",
        rating: 4.9,
        price: 12000,
        img: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800",
        desc: "Deep mangrove exploration where the land meets the sea, ideal for tiger spotting."
    },
    {
        id: 26,
        name: "Sixty Dome Mosque",
        district: "Bagerhat",
        category: "Heritage",
        rating: 4.8,
        price: 1200,
        img: "https://images.unsplash.com/photo-1591873211322-959c1186f9f6?auto=format&fit=crop&w=800",
        desc: "A UNESCO World Heritage site and a masterpiece of 15th-century Tughlaq style architecture."
    },
    {
        id: 27,
        name: "Kuakata Beach",
        district: "Patuakhali",
        category: "Coastal",
        rating: 4.7,
        price: 5000,
        img: "https://images.unsplash.com/photo-1584113374825-97e3a985d18d?auto=format&fit=crop&w=800",
        desc: "The 'Daughter of the Ocean', uniquely offering views of both sunrise and sunset from the same spot."
    },
    {
        id: 28,
        name: "Floating Guava Market",
        district: "Jhalokati",
        category: "Nature",
        rating: 4.5,
        price: 3500,
        img: "https://images.unsplash.com/photo-1621245781441-26792671e621?auto=format&fit=crop&w=800",
        desc: "A centuries-old tradition where farmers sell fresh guavas from their boats in the canals."
    },
    {
        id: 29,
        name: "Durgasagar Dighi",
        district: "Barisal",
        category: "Nature",
        rating: 4.2,
        price: 800,
        img: "https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&w=800",
        desc: "The largest lake in southern Bangladesh, providing a peaceful resting place for winter birds."
    },
    {
        id: 30,
        name: "Karamjal Wildlife Centre",
        district: "Bagerhat",
        category: "Nature",
        rating: 4.4,
        price: 2500,
        img: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800",
        desc: "A gateway to the Sundarbans with a deer breeding center and crocodile farm."
    },

    // --- RAJSHAHI & RANGPUR (ANCIENT HISTORY) ---
    {
        id: 31,
        name: "Somapura Mahavihara",
        district: "Naogaon",
        category: "Heritage",
        rating: 4.9,
        price: 3500,
        img: "https://images.unsplash.com/photo-1598230439775-812061030e42?auto=format&fit=crop&w=800",
        desc: "A world-renowned 8th-century Buddhist monastery, one of the most important archaeological sites in the world."
    },
    {
        id: 32,
        name: "Mahasthangarh",
        district: "Bogra",
        category: "Heritage",
        rating: 4.7,
        price: 1500,
        img: "https://images.unsplash.com/photo-1624022879685-3b9a14782069?auto=format&fit=crop&w=800",
        desc: "The oldest urban archaeological site in Bangladesh, dating back to at least the 3rd century BCE."
    },
    {
        id: 33,
        name: "Puthia Temple Complex",
        district: "Rajshahi",
        category: "Heritage",
        rating: 4.6,
        price: 2200,
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800",
        desc: "A cluster of historic Hindu temples with intricate terracotta designs in a peaceful village."
    },
    {
        id: 34,
        name: "Kantajew Temple",
        district: "Dinajpur",
        category: "Heritage",
        rating: 4.8,
        price: 2800,
        img: "https://images.unsplash.com/photo-1574523992226-f76e7370367d?auto=format&fit=crop&w=800",
        desc: "An 18th-century brick temple renowned for its superb terracotta ornamentation depicting epics."
    },
    {
        id: 35,
        name: "Varendra Research Museum",
        district: "Rajshahi",
        category: "Heritage",
        rating: 4.5,
        price: 500,
        img: "https://images.unsplash.com/photo-1624314138470-5a2f24623f10?auto=format&fit=crop&w=800",
        desc: "The first museum in Bangladesh, housing a rich collection of sculptures from the Pala period."
    },
    {
        id: 36,
        name: "Natore Rajbari",
        district: "Natore",
        category: "Heritage",
        rating: 4.4,
        price: 1200,
        img: "https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&w=800",
        desc: "A prominent palace complex that was the residence of the Rajshahi Raj family."
    },

    // --- ADVENTURE & HIDDEN GEMS ---
    {
        id: 37,
        name: "Amiakhum Waterfall",
        district: "Bandarban",
        category: "Adventure",
        rating: 4.9,
        price: 11000,
        img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800",
        desc: "Often cited as the most beautiful waterfall in the country, deep inside the Remakri forests."
    },
    {
        id: 38,
        name: "Susang Durgapur",
        district: "Netrokona",
        category: "Adventure",
        rating: 4.5,
        price: 4500,
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800",
        desc: "Famous for the blue-water Birishiri lake and the scenic ceramic hills near the Someshwari River."
    },
    {
        id: 39,
        name: "Manpura Island",
        district: "Bhola",
        category: "Nature",
        rating: 4.4,
        price: 5500,
        img: "https://images.unsplash.com/photo-1584113374825-97e3a985d18d?auto=format&fit=crop&w=800",
        desc: "A remote island in the middle of the Meghna river estuary, known for its pristine natural beauty."
    },
    {
        id: 40,
        name: "Chimbuk Hill",
        district: "Bandarban",
        category: "Hills",
        rating: 4.5,
        price: 1500,
        img: "https://images.unsplash.com/photo-1623491845345-42f1b8a514d3?auto=format&fit=crop&w=800",
        desc: "Known as the third highest peak in Bangladesh, offering panoramic views of the cloud-covered landscape."
    },
    {
        id: 41,
        name: "Hiron Point",
        district: "Sundarbans",
        category: "Nature",
        rating: 4.7,
        price: 15000,
        img: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800",
        desc: "A world heritage site in the Sundarbans, offering a great chance to see tigers, deer, and monkeys."
    },
    {
        id: 42,
        name: "Mainimati Ruins",
        district: "Comilla",
        category: "Heritage",
        rating: 4.6,
        price: 1000,
        img: "https://images.unsplash.com/photo-1598230439775-812061030e42?auto=format&fit=crop&w=800",
        desc: "An isolated ridge containing more than 50 ancient Buddhist sites dating from 8th to 12th century."
    },
    {
        id: 43,
        name: "Foy's Lake",
        district: "Chittagong",
        category: "Adventure",
        rating: 4.1,
        price: 2500,
        img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800",
        desc: "An artificial lake built in 1924, now a popular theme park and picnic spot surrounded by hills."
    },
    {
        id: 44,
        name: "Hum Hum Waterfall",
        district: "Maulvibazar",
        category: "Adventure",
        rating: 4.5,
        price: 3200,
        img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800",
        desc: "A hidden waterfall deep in the Rajkandi forest, only reachable through a challenging jungle trek."
    },
    {
        id: 45,
        name: "Boga Lake",
        district: "Bandarban",
        category: "Nature",
        rating: 4.8,
        price: 5000,
        img: "https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&w=800",
        desc: "A natural alpine lake located 1200 feet above sea level, wrapped in tribal legends and myths."
    },
    {
        id: 46,
        name: "Ramsagar Dighi",
        district: "Dinajpur",
        category: "Nature",
        rating: 4.3,
        price: 1500,
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800",
        desc: "The largest man-made pond in Bangladesh, excavated in the 18th century to fight a severe famine."
    },
    {
        id: 47,
        name: "Tajhat Palace",
        district: "Rangpur",
        category: "Heritage",
        rating: 4.6,
        price: 1800,
        img: "https://images.unsplash.com/photo-1624314138470-5a2f24623f10?auto=format&fit=crop&w=800",
        desc: "A grand palace built by Maharaja Kumar Gopal Lal Roy, now serving as a regional museum."
    },
    {
        id: 48,
        name: "Dublar Char",
        district: "Sundarbans",
        category: "Nature",
        rating: 4.5,
        price: 13000,
        img: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=800",
        desc: "A small island in the Bay of Bengal known for its fishing industry and deer herds."
    },
    {
        id: 49,
        name: "Jatarpur Mosque",
        district: "Sylhet",
        category: "Heritage",
        rating: 4.2,
        price: 500,
        img: "https://images.unsplash.com/photo-1591873211322-959c1186f9f6?auto=format&fit=crop&w=800",
        desc: "A beautiful example of local Islamic architecture nestled in the Sylhet tea garden valleys."
    },
    {
        id: 50,
        name: "Sitakunda Ecopark",
        district: "Chittagong",
        category: "Nature",
        rating: 4.4,
        price: 2000,
        img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800",
        desc: "Contains botanical gardens, a deer park, and the famous Sahasradhara and Suptadhara waterfalls."
    },
    {
        id: 51,
        name: "Sat Gambuj Mosque",
        district: "Dhaka",
        category: "Heritage",
        rating: 4.3,
        price: 300,
        img: "https://images.unsplash.com/photo-1574523992226-f76e7370367d?auto=format&fit=crop&w=800",
        desc: "A Seven Domed Mosque situated in Mohammadpur, exhibiting the classic provincial Mughal style."
    },
    {
        id: 52,
        name: "Monpura Coast",
        district: "Bhola",
        category: "Coastal",
        rating: 4.4,
        price: 6000,
        img: "https://images.unsplash.com/photo-1584113374825-97e3a985d18d?auto=format&fit=crop&w=800",
        desc: "Untouched coastal views where the river meets the sea, ideal for camping and solitude."
    },
    {
        id: 53,
        name: "Baklai Waterfall",
        district: "Bandarban",
        category: "Adventure",
        rating: 4.8,
        price: 12000,
        img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800",
        desc: "Considered the highest waterfall in Bangladesh, located in a very remote part of Bandarban."
    },
    {
        id: 54,
        name: "Dhanmondi Lake",
        district: "Dhaka",
        category: "Nature",
        rating: 4.2,
        price: 200,
        img: "https://images.unsplash.com/photo-1596402184320-417d7178b2cd?auto=format&fit=crop&w=800",
        desc: "A peaceful urban retreat in the capital, popular for walking and traditional street foods."
    },
    {
        id: 55,
        name: "Bijoypur Hills",
        district: "Netrokona",
        category: "Hills",
        rating: 4.4,
        price: 3800,
        img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800",
        desc: "White ceramic hills and a turquoise lake located near the Garo tribal area by the Indian border."
    }
];

// Exporting the data so it can be accessed by app.js
// If using plain <script> tags, this will be in the global scope.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = destinations;
}

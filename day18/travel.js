console.log("===== Project 4: Travel Booking System =====\n");

const flight = { flightNumber: "AI202", price: 5000 };
const hotel = { hotelName: "Taj Hotel", price: 3000 };

// Destructure
const { flightNumber } = flight;
console.log("Flight No:", flightNumber);

// Spread → Merge booking
const booking = { ...flight, ...hotel };

// Rest → Add travelers
function addTravelers(...names) {
  return names;
}
const travelers = addTravelers("Kalyani", "Varshini");

// Template Literals → Receipt
console.log(`
===== Booking Confirmation =====
Flight: ${booking.flightNumber}
Hotel: ${booking.hotelName ?? "Not Booked"}
Travelers: ${travelers.join(", ")}
Total Price: ₹${(booking.price ?? 0) + (hotel.price ?? 0)}
`);

// Optional Chaining
console.log("Hotel Name (safe):", booking.hotelName ?? "N/A");

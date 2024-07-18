export async function bookingIdGenerator() {
    const fecthBookings = await fetch("http://localhost:3000/bookings");
    const bookings = await fecthBookings.json();
  
    function newBookingIdGenerator() {
      if (!bookings.length) {
        return 1;
      }
  
      return bookings[bookings.length - 1].id + 1;
    }
  
    return newBookingIdGenerator;
  }
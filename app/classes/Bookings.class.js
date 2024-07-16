async function bookingIdGenerator() {
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

export class Booking {
  constructor(travelId, userId, bookingdate) {
    const newBookingId = bookingIdGenerator();
    this.id = newBookingId();
    this.travelId = travelId;
    this.userId = userId;
    this.bookingdate = bookingdate;
  }
}
export class BookingManager {
  static async addBooking(userId, travelId) {
    const currentDate = new Date().toISOString().split("T")[0];

    const addBooking = fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id: newBookingId(),
        travelId: travelId,
        userId: userId,
        bookingdate: currentDate,
      }),
    });

    if (!addBooking.ok) {
      alert("Error al registrar la reserva");
      return;
    }

    alert("Usuario registrado exitosamente");

    navigateTo("/home");
  }
}

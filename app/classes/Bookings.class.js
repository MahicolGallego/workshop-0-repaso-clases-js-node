export class Booking {
  constructor(id, travelId, userId, bookingdate) {
    this.id = id;
    this.travelId = travelId;
    this.userId = userId;
    this.bookingdate = bookingdate;
  }
}
export class BookingManager {
  static async addBooking(id, userId, travelId) {
    const currentDate = new Date().toISOString().split("T")[0];

    const addBooking = fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id: id,
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

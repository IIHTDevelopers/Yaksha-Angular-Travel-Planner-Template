import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Booking } from '../../models/booking.model';
import { Hotel } from '../../models/hotel.model';
import { Place } from '../../models/place.model';
import { Itinerary } from 'src/app/models/itenary.model';

@Component({
  selector: 'app-travel-planner',
  templateUrl: './travelplanner.component.html',
  styleUrls: ['./travelplanner.component.css']
})
export class TravelPlannerComponent {
  itineraries: Itinerary[] = [];
  selectedPlaceId: number | null = null;

  places: Place[] = [
    {
      id: 1,
      name: 'Mountain Valley',
      numberOfDays: 3,
      terrain: 'Mountain',
      transport: 'Bus',
      rating: 4.5
    },
  ];

  hotels: Hotel[] = [
    {
      id: 1,
      placeId: 1,
      name: 'Valley View Resort',
      starRating: 4,
      numberOfRooms: 10,
      rentPerNight: 1500
    },
  ];

  bookings: Booking[] = [
    {
      hotelId: 1,
      bookingDate: new Date('2024-03-15'),
      numberOfRoomsBooked: 2
    },
  ];

  bookHotel(form: NgForm) {
    // write your logic here
  }

  getPlaces() {
    // write your logic here
  }

  getHotelsForPlace(placeId: number) {
    // write your logic here
  }

  calculateAvailableRooms(hotelId: number, date: Date) {
    // write your logic here
  }

  selectPlace(placeId: number) {
    // write your logic here
  }

  createItinerary(form: NgForm) {
    // write your logic here
  }

  getSelectedPlaceName(): string | undefined {
    // write your logic here
    return "";
  }
}
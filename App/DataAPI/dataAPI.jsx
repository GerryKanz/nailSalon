import { request, gql } from 'graphql-request'
import { useUser } from '@clerk/clerk-expo'


const API_URL = process.env.API_URL

const createBooking = async (bookingData) => {

  console.log('this is booking data: ', bookingData)
  const createBookingQuery = gql`
    mutation CreateBooking {
        createBooking(
          data: {date: "`+ bookingData.selectedDate + `",
                 time: "`+ bookingData.selectedTime + `",
                 userBookings: Booked, 
                 userEmail: "`+ bookingData.email + `", 
                 userId: "`+ bookingData.userId + `",
                 duration:  `+ bookingData.duration + `,
                 service: "`+ bookingData.service + `",
                 bookingId: "`+ bookingData.bookingId + `"}
        ) {
          id
        }
        publishManyBookings(to: PUBLISHED) {
            count
          }
      }
    `
  const result = await request(API_URL, createBookingQuery)
}

const getBookingsByDate = async (date) => {
  console.log("The date before query", typeof (date))
  const query = gql`
    query GetBookingsByDate {
        bookings(where: {date: "`+ date + `"}) {
            time
            duration
          }
      }
    `
  const result = await request(API_URL, query)
  console.log(result)
  return result
}

const getUserBookings = async (userId) => {
  const query = gql`
  query getUserBooking{
    bookings(where: {userId: "`+ userId + `"}) {
      bookingId
      date
      duration
      service
      time
    }
  }
  `
  const result = await request(API_URL, query)
  return result
}

export default {
  createBooking,
  getBookingsByDate,
  getUserBookings
}
import { request, gql } from 'graphql-request'
import { useUser } from '@clerk/clerk-expo'


const API_URL = 'https://api-ap-northeast-1.hygraph.com/v2/cls7wg35p14e201w3b5ot3q7w/master'

const createBooking = async (bookingData) => {

  const createBookingQuery = gql`
    mutation CreateBooking {
        createBooking(
          data: {date: "`+ bookingData.selectedDate + `",
                 time: "`+ bookingData.selectedTime + `",
                 userBookings: Booked, 
                 userId: "`+ bookingData.userId + `",
                 duration:  `+ bookingData.duration + `,
                 service: "`+ bookingData.service + `",
                 bookingId: "`+ bookingData.bookingId + `"}
        ) {
          id
        }
        publishManyBookings(where: {bookingId: "`+ bookingData.bookingId + `"}) {
    count
  }
      }
    `
  const result = await request(API_URL, createBookingQuery)
}

const getBookingsByDate = async (date) => {
  const query = gql`
    query GetBookingsByDate {
        bookings(where: {date: "`+ date + `"}) {
            time
            duration
          }
      }
    `
  const result = await request(API_URL, query)
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

const updateCanceletion = async (bookingId) => {
  const updateBookingQuery = gql`
  mutation updateBooking {
    unpublishManyBookings(where: {bookingId: "`+ bookingId + `"}) {
      count
    }
    updateManyBookings(
      data: {userBookings: Canceled}
      where: {bookingId: "`+ bookingId + `"}
    ) {
      count
    }
  }
  `
  const result = await request(API_URL, updateBookingQuery)
}

export default {
  createBooking,
  getBookingsByDate,
  getUserBookings,
  updateCanceletion
}
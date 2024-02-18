import { request, gql } from 'graphql-request'

const API_URL = 'https://api-ap-northeast-1.hygraph.com/v2/cls7wg35p14e201w3b5ot3q7w/master'

const createBooking = async (bookingData) => {

  console.log('this is booking data: ', bookingData)
  const createBookingQuery = gql`
    mutation CreateBooking {
        createBooking(
          data: {date: "`+ bookingData.selectedDate + `",
                 time: "`+ bookingData.selectedTime + `",
                 userBookings: Booked, 
                 userEmail: "`+ bookingData.email + `", 
                 userName: "`+ bookingData.name + `",
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

export default {
  createBooking,
  getBookingsByDate
}
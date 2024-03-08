export default DisplayDate = (selectedDate) => {

    // Create a Date object using the input date
    const date = new Date(selectedDate)

    // Get the day of the month
    const day = ("0" + date.getDate()).slice(-2)

    // Month names
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Month name from the array using month index from the Date object
    const monthName = months[date.getMonth()]

    //Display format
    return (`${day} ${monthName}`)


}
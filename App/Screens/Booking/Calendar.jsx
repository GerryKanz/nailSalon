import { View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import CalendarPicker from "react-native-calendar-picker";

export default function calendar() {
    const [date, setDate] = useState()
    return (
        <View style={styles.Calender}>
            <CalendarPicker
                onDateChange={setDate}
                minDate={Date.now()}
                todayBackgroundColor='orange'
                todayTextStyle={{ color: '#fff' }}
                selectedDayColor='orange'
            />
        </View>
    )
}
const styles = StyleSheet.create({
    Calender: {
        marginTop: 20,
    }
})
import React, {  } from 'react';
import { StyleSheet } from 'react-native';
import {Calendar } from 'react-native-calendars'

const CalendarComponent = () => {
  return (
    <Calendar
      style={styles.calendar}
      monthFormat={'MMM yyyy'}
      enableSwipeMonths={true}
      onDayPress={day => {
        console.log('selected day', day);
      }}
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      theme={{
        monthTextColor:colors.cobaltBlue
      }}
    />
  )
}

export default CalendarComponent;

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 350
  }
})

const colors = {
  pink: '#FF449F',
  yellow: '#FFD32D',
  mint: '#C1F8CF',
  turquoise: '#4FD3C4',
  midnightBlue: '#3E4985',
  cobaltBlue: '#488FB1',
}

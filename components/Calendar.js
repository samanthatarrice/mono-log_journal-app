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
        monthTextColor: 'blue'
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


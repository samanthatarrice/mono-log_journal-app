import React, { useState } from 'react';
import { Text } from 'react-native';
import {Calendar, CalendarList, Agenda } from 'react-native-calendars'

const CalendarComponent = () => {
  return (
    <Calendar
      onDayPress={day => {
        console.log('selected day', day);
      }}
      monthFormat={'MMM yyyy'}
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      disableAllTouchEventsForDisabledDays={true}
    />
  )
}

export default CalendarComponent;
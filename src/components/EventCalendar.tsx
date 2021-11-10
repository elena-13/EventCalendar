import { Calendar } from 'antd';
import { Moment } from 'moment';
import React, { FC, PropsWithChildren } from 'react';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props: PropsWithChildren<EventCalendarProps>) => {

  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(e => e.date === formatedDate);
    return (
      <div>
        {currentDayEvents.map((event: IEvent, index: number) =>
          <div key={index}>{event.description}</div>
        )}
      </div>
    );
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
    />
  );
};

export default EventCalendar;

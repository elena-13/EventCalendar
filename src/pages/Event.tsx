import { Button, Layout, Row, Modal } from 'antd';
import React, { FC, useState, useEffect } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event: FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { guests, events } = useTypedSelector(state => state.event)
  const { user } = useTypedSelector(state => state.auth)

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, [])

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
  }

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button onClick={setModalVisible.bind(null, true)}>Add Event</Button>
      </Row>
      <Modal
        title="Add Event"
        visible={isModalVisible}
        footer={null}
        onCancel={setModalVisible.bind(null, false)}
      >
        <EventForm
          guests={guests}
          submit={addNewEvent}
        />
      </Modal>
    </Layout>
  );
};

export default Event;

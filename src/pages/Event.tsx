import { Button, Layout, Row, Modal } from 'antd';
import React, { FC, useState, useEffect } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Event: FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { fetchGuests } = useActions();
  const { guests } = useTypedSelector(state => state.event)

  useEffect(() => {
    fetchGuests()
  }, [])

  return (
    <Layout>
      <EventCalendar events={[]} />
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
        />
      </Modal>
    </Layout>
  );
};

export default Event;

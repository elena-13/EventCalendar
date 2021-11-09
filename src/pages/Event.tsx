import { Button, Layout, Row, Modal } from 'antd';
import React, { FC, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';

const Event: FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

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
        <EventForm />
      </Modal>
    </Layout>
  );
};

export default Event;

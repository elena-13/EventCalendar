import React, { FC, useState } from 'react';
import { Form, Input, Button, DatePicker, Row, Select } from "antd";
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';

interface EventFormProps {
  guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as IEvent);

  const selectDate = (date: Moment | null) => {
    console.log(date);
  }

  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          onChange={({ target: { value } }) => setEvent({...event, description: value})}
          value={event.description}
        />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required()]}
      >
        <DatePicker
          onChange={(date) => selectDate(date)}
        />
      </Form.Item>
      <Form.Item
        label="Select guest"
        name="guest"
        rules={[rules.required()]}
      >
      <Select
        showSearch
        placeholder="Select a person"
        onChange={(guest: string) => setEvent({...event, guest})}
      >
        {props.guests.map(guest =>
          <Select.Option key={guest.username} value={guest.username}>
            {guest.username}
          </Select.Option>
        )}
      </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;

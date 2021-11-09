import React, { FC } from 'react';
import { Form, Input, Button, DatePicker, Row, Select } from "antd";
import { rules } from '../utils/rules';

const EventForm = () => {
  return (
    <Form>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input

        />
      </Form.Item>
      <Form.Item
        label="Event date"
        name="date"
        rules={[rules.required()]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item>
      <Select
        showSearch
        // style={{ width: 200 }}
        placeholder="Select a person"
        // optionFilterProp="children"
        // onChange={onChange}
        // onFocus={onFocus}
        // onBlur={onBlur}
        // onSearch={onSearch}
        // filterOption={(input, option) =>
        //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
      >
        <Select.Option value="jack">Jack</Select.Option>
        <Select.Option value="lucy">Lucy</Select.Option>
        <Select.Option value="tom">Tom</Select.Option>
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

import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";

interface EventFormProps {
    guests: IUser[]

}

const EventForm :FC<EventFormProps> = (props) => {

    return (
            <Form>
                <Form.Item
                    label="describe your event "
                    name="description"
                    rules={[rules.required()]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="event date "
                    name="date"
                    rules={[rules.required()]}
                >
                    <DatePicker />
                <Form.Item  label="guest"
                            name="guest"
                >
                    <Select >
                        {props.guests.map(guest =>
                            <Select.Option value = {guest.username}> {guest.username} </Select.Option>
                        )}
                    </Select>
                </Form.Item>
                </Form.Item>
                <Row justify="end">
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >
                            Create
                        </Button>
                    </Form.Item>
                </Row>

            </Form>
    );
};

export default EventForm;
import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";

interface EvenCalendarProps {
    events: IEvent[];
}
const EventCalendar: FC<EvenCalendarProps> = () => {
    return (
        <Calendar/>
    );
};

export default EventCalendar;
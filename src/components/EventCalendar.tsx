import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";

interface EvenCalendarProps {
    events: IEvent[];
}
const EventCalendar: FC<EvenCalendarProps> = (props) => {

    function dateCellRender(value: Moment) {

        const formatedDate = formatDate(value.toDate());

        const currentEventsDay = props.events.filter(event => event.date === formatedDate)
        console.log(currentEventsDay, + '  ', formatedDate)
        return (
            <div>
                {currentEventsDay.map((ev, index) =>
                    <div key = {index}>{ev.description}</div>)}
            </div>
        );
    }

    return (
        <Calendar dateCellRender = {dateCellRender}/>
    );
};

export default EventCalendar;
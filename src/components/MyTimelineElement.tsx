import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type MyTimelineElementProps = {
  title: string;
  location: string;
  languages: string;
  date: string;
};

const MyTimelineElement: React.FC<MyTimelineElementProps> = ({
  title,
  location,
  languages,
  date,
}) => {
  return (
    <VerticalTimelineElement
      className="transition-transform duration-300 ease-in-out delay-150 hover:scale-105"
      contentStyle={{
        background: 'rgb(55, 65, 81)',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgb(55, 65, 81)' }}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{location}</h4>
      <p>{languages}</p>
      <p className="text-red-300">{date}</p>
    </VerticalTimelineElement>
  );
};

export default MyTimelineElement;

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import timelineElements from "./TimelineData"
import 'react-vertical-timeline-component/style.min.css';
import MyTimelineElement from './MyTimelineElement';

const TimelineContent = () => {
  return (
    <div className="flex items-center justify-center pt-10">
      <VerticalTimeline layout="2-columns">
        {timelineElements.map((element) => (
          <MyTimelineElement
            title={element.title}
            location={element.location}
            languages={element.languages}
            date={element.date}
          >
          </MyTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimelineContent;

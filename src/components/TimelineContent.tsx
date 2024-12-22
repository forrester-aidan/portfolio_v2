import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimelineContent = () => {
  return (
    <div className="flex items-center justify-center pt-10">
      <VerticalTimeline layout="2-columns">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(33, 150, 243)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cornell Tech - Roosevelt Island, NYC
          </h4>
          <p>Arduino, C programming, Teaching HTML/CSS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Society for Asian Scientists and Engineers
          </h4>
          <p>TypeScript, React, Tailwind CSS, Node.js, Git</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Officer Training Course
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineering Club
          </h4>
          <p>HTML/CSS, JavaScript, Node.js/Express.js, MongoDB, React</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Open Source Project - Swamp Scheduler
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Open Source Club
          </h4>
          <p>TypeScript, React, Tailwind CSS, Node.js, Git</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: 'rgb(33, 150, 243)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Science - University of Florida
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Python, C++, ARM, R</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Vocational Certificate in Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            High School Diploma
          </h4>
          <p>HTML/CSS, JavaScript, Java, SQL</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimelineContent;

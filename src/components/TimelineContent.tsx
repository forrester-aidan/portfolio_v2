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
            background: 'rgb(55, 65, 81)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(55, 65, 81)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>HTML/CSS, JavaScript, React</p>
          <p className="text-red-300">January 2025 - Present</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: 'rgb(55, 65, 81)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(55, 65, 81)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Research Assistant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cornell Tech - Roosevelt Island, NYC
          </h4>
          <p>Arduino, C programming, Teaching HTML/CSS</p>
          <p className="text-red-300">May 2024 - August 2024</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(55, 65, 81)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(55, 65, 81)' }}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Society for Asian Scientists and Engineers
          </h4>
          <p>TypeScript, React, Tailwind CSS, Node.js, Git</p>
          <p className="text-red-300">January 2024 - December 2024</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(55, 65, 81)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(55, 65, 81)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Officer Training Course
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Engineering Club
          </h4>
          <p>HTML/CSS, JavaScript, Node.js/Express.js, MongoDB, React</p>
          <p className="text-red-300">January 2023 - May 2023</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(55, 65, 81)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(55, 65, 81)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Open Source Project - Swamp Scheduler
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Open Source Club
          </h4>
          <p>TypeScript, React, Tailwind CSS, Node.js, Git</p>
          <p className="text-red-300">September 2022 - November 2022</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: 'rgb(55, 65, 81)',
            color: '#fff',
          }}
          contentArrowStyle={{ borderRight: '7px solid rgb(55, 65, 81)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Science - University of Florida
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>Python, C++, ARM, R</p>
          <p className="text-red-300">August 2022 - Present</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(55, 65, 81)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(55, 65, 81)' }}
        >
          <h3 className="vertical-timeline-element-title">
            Vocational Certificate in Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            High School Diploma
          </h4>
          <p>HTML/CSS, JavaScript, Java, SQL</p>
          <p className="text-red-300">September 2018 - June 2022</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimelineContent;

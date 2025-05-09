import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import MyTimelineElement from './MyTimelineElement';

const TimelineContent = () => {
  return (
    <div className="flex items-center justify-center pt-10">
      <VerticalTimeline layout="2-columns">
        <MyTimelineElement
          title="Full Stack Developer Intern"
          location="Remote"
          languages="Flutter/Dart, Firebase"
          date="January 2025 - April 2025"
        ></MyTimelineElement>

        <MyTimelineElement
          title="Research Assistant"
          location="Cornell Tech - Roosevelt Island, NYC"
          languages="Arduino, C, Teaching HTML/CSS"
          date="May 2024 - August 2024"
        ></MyTimelineElement>

        <MyTimelineElement
          title="Web Developer"
          location="Society for Asian Scientists and Engineers"
          languages="TypeScript, React, Tailwind CSS, Node.js, Git"
          date="January 2024 - December 2024"
        ></MyTimelineElement>

        <MyTimelineElement
          title="Officer Training Course"
          location="Software Engineering Club"
          languages="Arduino, C, Teaching HTML/CSS"
          date="January 2023 - May 2023"
        ></MyTimelineElement>

        <MyTimelineElement
          title="Open Source Project - Swamp Scheduler"
          location="Open Source Club"
          languages="TypeScript, React, Tailwind CSS, Node.js, Git"
          date="September 2022 - November 2022"
        ></MyTimelineElement>

        <MyTimelineElement
          title="Computer Science - University of Florida"
          location="Bachelor's Degree"
          languages="Python, C++, Java, ARM, R"
          date="August 2022 - Expected May 2026"
        ></MyTimelineElement>

        <MyTimelineElement
          title="I.T. Vocational Certificate - Academy for Information Technology"
          location="High School Diploma"
          languages="HTML/CSS, JavaScript, Java, SQL"
          date="September 2018 - June 2022"
        ></MyTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimelineContent;

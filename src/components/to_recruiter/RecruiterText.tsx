import { Typography } from '@mui/material';
import React from 'react';
import { isWhiteSpaceLike } from 'typescript';

const RecruiterText = () => {
  return (
    <div className="flex justify-center items-center pt-10 pb-10">
      <div className="pl-20"></div> {/* spacer element*/}
      <div className="border-2 border-white rounded-lg transition duration-150 hover:bg-slate-700">
        <Typography
          variant="body1"
          sx={{
            marginLeft: 10,
            marginRight: 10,
            textAlign: 'center',
            padding: 3,
            fontFamily: 'Titillium Web',
            fontWeight: 200,
          }}
        >
          Please accept this portfolio as an expression of my interest in an new
          grad position at your company. This portfolio serves as a means for
          you to further explore the projects I have created in greater detail,
          as well as view some of my other achievements not present on my
          resume. Here's a snapshot of what I have to offer:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginLeft: 10,
            marginRight: 10,
            textAlign: 'center',
            padding: 3,
            fontFamily: 'Titillium Web',
            fontWeight: 200,
          }}
        >
          <strong className="text-red-300">
            Currently, I am a fourth-year Computer Science student seeking a
            Software Engineering/Product Management New Grad role for the Summer
            of 2026.
          </strong>{' '}
          Throughout the course of my career, I have perfected my understanding
          of coding languages and used this knowledge to build projects of my
          own, as well as participate in group settings to complete large-scale
          projects together. On top of that, I've been accepted under multiple
          internships and research programs to further my understanding of my
          career in the real world, gaining invaluable experiences that have
          built a foundation for me in software engineering and product
          management. Programming is one of the activities I can confidently say
          that I would be willing to do for 12 hours straight and not get bored.
          I am a capable and consistent problem-solver, always working on a job
          or task until it is perfectly finished. Not only that, my people
          skills are unmatched, as I've worked with clients, executives,
          engineers, data scientists, and even stakeholders to create a product
          to help those in the healthcare world. I have proven to be an
          effective and collaborative team member among the group projects I
          have completed, constantly striving to make improvements to the work I
          get my hands on. Please use this portfolio as a means to get to know
          me better, and I hope you can see me working at your company in the
          summer!
          <Typography
            variant="body1"
            sx={{
              marginLeft: 10,
              marginRight: 10,
              textAlign: 'center',
              padding: 3,
              fontFamily: 'Titillium Web',
              fontWeight: 200,
            }}
          >
            Sincerely,
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginLeft: 10,
              marginRight: 10,
              textAlign: 'center',
              fontFamily: 'Titillium Web',
              fontWeight: 200,
            }}
          ></Typography>
          <strong className="font-semibold">Aidan Forrester</strong>
        </Typography>
      </div>
      <div className="pr-20"></div> {/* spacer element*/}
    </div>
  );
};

export default RecruiterText;

// components/Timeline.js
import React from 'react';
import PayPalLogo from '../../assets/imgs/paypal-logo.png';
import BNYLogo from '../../assets/imgs/bny-logo.png';

const Timeline = () => {
  const experiences = [
    {
      company: 'PayPal India Pvt. Ltd.',
      period: 'Jan 2021 to Present',
      description:
        'Experienced UI stack developer at PayPal with 5 years in frontend development. Proficient in React, Java, and NodeJS. Working as Visualization specialist for Privacy Team.',
      icon: PayPalLogo,
    },
    {
      company: 'BNY Mellon',
      period: 'July 2019 to Dec 2020',
      description:
        'Worked as UI developer for Escrow Agreement Management application using Angular. Top 3 in coding contests conducted by the organisation.',
      icon: BNYLogo,
    },
  ];

  return (
    <div className="max-w-lg mx-auto p-6  text-white rounded-lg shadow-md">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img
              src={exp.icon.src}
              alt={`${exp.company} logo`}
              className="w-12 h-12 rounded-full bg-white p-2"
            />
            <div>
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="mt-2 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

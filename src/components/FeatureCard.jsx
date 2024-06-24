import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="mb-4">
        <img src={icon} alt={`${title} icon`} className="mx-auto h-16 w-16" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;

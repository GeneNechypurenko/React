import React from 'react';

interface ErrorMessagesProps {
  errors: string[];
}

const ErrorMessages: React.FC<ErrorMessagesProps> = ({ errors }) => {
  return (
    <div className="text-red-500 text-sm mb-4">
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorMessages;

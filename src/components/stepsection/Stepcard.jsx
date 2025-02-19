const StepCard = ({ step }) => {
    return (
      <div className="flex flex-col items-center text-center px-4">
        <h2 className="text-customBlue text-3xl font-bold">{step.id}</h2>
        <h3 className="font-semibold text-lg mt-2">{step.title}</h3>
        <p className="text-gray-800 mt-2">{step.description}</p>
      </div>
    );
  };
  
  export default StepCard;
  
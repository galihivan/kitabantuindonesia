import stepsData from "../data/stepsData";
import StepCard from "./StepCard";

const StepsSection = () => {
  return (
    <section className="flex justify-center">
      <div className="bg-gray-50 shadow-lg rounded-lg p-20 w-11/12 md:w-3/4 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          4 simple steps to your success.
        </h2>
        <p className="text-gray-600 mt-2 p-4">
          Find a freelancer you like with the skills you need. Here’s how to get started:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {stepsData.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
        <button className="bg-customBlue hover:bg-red-600 transition text-white font-semibold px-6 py-2 rounded-md mt-6">
          Start a project
        </button>
      </div>
    </section>
  );
};

export default StepsSection;

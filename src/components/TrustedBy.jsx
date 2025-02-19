const TrustedBy = () => {
  return (
    <section className="text-center py-6">
      <p className="text-gray-500">Trusted by:</p>
      <div className="flex flex-wrap justify-center gap-6 mt-2">
        <span className="text-lg font-bold w-1/2 sm:w-1/3 md:w-auto">Meta</span>
        <span className="text-lg font-bold w-1/2 sm:w-1/3 md:w-auto">Google</span>
        <span className="text-lg font-bold w-1/2 sm:w-1/3 md:w-auto">Netflix</span>
        <span className="text-lg font-bold w-1/2 sm:w-1/3 md:w-auto">P&G</span>
        <span className="text-lg font-bold w-1/2 sm:w-1/3 md:w-auto">PayPal</span>
        <span className="text-lg font-bold w-1/2 sm:w-1/3 md:w-auto">Payoneer</span>
      </div>
    </section>
  );
};

export default TrustedBy;

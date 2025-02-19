const HeroSection = () => {
  return (
    <section className="w-full bg-customBlue text-white text-center py-20 relative mt-4">
      <h2 className="text-4xl font-bold">Scale your professional workforce with <i>freelancers</i></h2>
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search for any service..."
          className="px-4 py-2 w-1/2 rounded-lg border-2 border-white text-black"
        />
        <button className="bg-white px-4 py-2 rounded-lg border-2 border-customBlue text-customBlue ml-2">🔍</button>
      </div>
    </section>
  );
};

export default HeroSection;

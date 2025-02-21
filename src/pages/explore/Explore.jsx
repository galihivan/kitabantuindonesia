import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css"; // Import file CSS AOS

const Explore = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Inisialisasi AOS
  }, []);

  useEffect(() => {
    axios
      .get("/jobs/jobs.json") // Path relatif dari public/
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Explore Jobs
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading data...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <div
                key={job.id}
                data-aos="fade-up"
                data-aos-delay={index * 100} // Tambahkan delay untuk efek berurutan
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {job.company_name}
                </h2>
                <p className="text-gray-700 text-sm mt-2">
                  <strong>Position:</strong> {job.position}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Salary:</strong> {job.salary}
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No jobs available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Explore;

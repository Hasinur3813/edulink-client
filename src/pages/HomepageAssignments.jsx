import { useState } from "react";

import AssignmentCard from "../component/assignmentCard";

const HomepageAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  return (
    <section className="bg-backGround py-16 text-center">
      <div className="container mx-auto px-3">
        {" "}
        <h2 className="text-3xl font-bold text-[#1d62b4] mb-6">
          Latest Assignments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </div>
        <div className="mt-8">
          <button className="bg-[#4A90E2] hover:bg-[#1d62b4] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomepageAssignments;

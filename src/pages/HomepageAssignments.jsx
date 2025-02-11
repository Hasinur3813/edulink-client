import { useEffect, useState } from "react";

import AssignmentCard from "../component/assignmentCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../instance/AxiosSecure";
import { Link } from "react-router-dom";

const HomepageAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const axios = useAxiosSecure();

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get("/assignment/homepage-assignments");
        setAssignments(res.data);
        console.log(res.data);
      } catch {
        Swal.fire({
          title: "Error",
          text: "Try refreshing the page",
          icon: "error",
        });
      }
    };
    fetchAssignments();
  }, [axios]);

  return (
    <section className="bg-backGround dark:bg-darkBg py-16 text-center">
      <div className="container mx-auto px-3">
        {" "}
        <h2 className="text-3xl font-bold text-primaryColor mb-10">
          Latest Assignments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} />
          ))}
        </div>
        <div className="mt-8">
          <Link to={"/assignments"}>
            <button className="bg-primaryColor hover:bg-primaryAccent text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageAssignments;

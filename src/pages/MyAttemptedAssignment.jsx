/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "../instance/AxiosSecure";
import { Fade } from "react-awesome-reveal";
import Loader2 from "../component/Loader2";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyAttemptedAssignment = () => {
  const { currentUser } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxiosSecure();

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get(
          `/assignment/my-attempted-assignment/${currentUser?.email}`
        );
        setAssignments(res.data);
        setLoading(false);
      } catch {
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: "Please Log In First",
          icon: "error",
        });
      }
    };

    fetchAssignments();
  }, [currentUser]);

  if (loading) {
    return <Loader2 />;
  }
  return (
    <Fade>
      <div className=" pt-20 min-h-screen p-6 text-darkBg">
        <h1 className="text-3xl font-bold mb-4">My Submitted Assignments</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white dark:bg-gray-900 shadow-lg rounded-lg">
            <thead className="bg-primaryAccent text-white">
              <tr>
                <th className="p-4">Assignment Title</th>
                <th className="p-4">Status</th>
                <th className="p-4">Assignment Marks</th>
                <th className="p-4">Obtained Marks</th>
                <th className="p-4">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr
                  key={assignment._id}
                  className="hover:bg-primaryAccent/20 dark:text-white"
                >
                  <td className="p-4">{assignment.title}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        assignment.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </td>
                  <td className="p-4">{assignment.marks || "N/A"}</td>
                  <td className="p-4">
                    {assignment?.obtainedMarks || "Not Marked"}
                  </td>
                  <td className="p-4">
                    {assignment?.feedback || "No Feedback Yet"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {assignments.length === 0 && (
            <div className="text-center">
              {" "}
              <p className="text-center font-semibold text-red-500 mt-5 mb-2">
                No assignment submitted!
              </p>
              <Link
                to={"/assignments"}
                className="underline text-primaryColor font-semibold"
              >
                Submit an assignment
              </Link>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default MyAttemptedAssignment;

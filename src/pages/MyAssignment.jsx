/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "../instance/AxiosSecure";
import { Fade } from "react-awesome-reveal";
import Loader2 from "../component/Loader2";
import Swal from "sweetalert2";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyAssignment = () => {
  const { currentUser } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get(
          `/assignment/my-assignment/${currentUser?.email}`
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

  const handleDelete = async (assignment) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.post(`/assignment/delete/${assignment._id}`);

          if (res.data?.deletedCount) {
            Swal.fire({
              title: "Deleted",
              text: "Assignment has been deleted!",
              icon: "success",
            });

            const remainingAssignment = assignments.filter(
              (a) => a._id !== assignment._id
            );
            setAssignments(remainingAssignment);
          }
        } catch {
          Swal.fire({
            title: "Error",
            text: "Seems the file has already been deleted!",
            icon: "error",
          });
        }
      }
    });
  };

  const handleUpdate = (assignment) => {
    navigate(`/update-assignment/${assignment._id}`);
  };

  if (loading) {
    return <Loader2 />;
  }
  return (
    <Fade>
      <div className=" pt-20  p-6 text-darkBg">
        <h1 className="text-3xl font-bold mb-4">My Assignments</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white dark:bg-gray-900 shadow-lg rounded-lg">
            <thead className="bg-primaryAccent text-white">
              <tr>
                <th className="p-4">Assignment Title</th>
                <th className="p-4">Difficulty</th>
                <th className="p-4">Assignment Marks</th>
                <th className="p-4">Actions</th>
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
                      className={`capitalize px-3 py-1 rounded-full text-white ${
                        (assignment.difficulty === "easy" && "bg-green-500") ||
                        (assignment.difficulty === "medium" &&
                          "bg-yellow-500") ||
                        (assignment.difficulty === "hard" && "bg-red-500")
                      }`}
                    >
                      {assignment.difficulty}
                    </span>
                  </td>
                  <td className="p-4">{assignment.marks || "N/A"}</td>
                  <td className="p-4">
                    {/* Action Buttons */}

                    <div className="flex gap-2 justify-between">
                      <button
                        onClick={() => handleUpdate(assignment)}
                        className="btn text-white bg-primaryColor hover:bg-primaryAccent flex-1 flex items-center justify-center gap-2"
                      >
                        <FaEdit /> Update
                      </button>
                      <button
                        onClick={() => handleDelete(assignment)}
                        className="btn btn-outline btn-error flex-1 flex items-center justify-center gap-2"
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fade>
  );
};

export default MyAssignment;

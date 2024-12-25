import { useState, useEffect } from "react";

import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "../instance/AxiosSecure";

import AssignmentCard from "../component/assignmentCard";
import Swal from "sweetalert2";

const AssignmentsPage = () => {
  const { currentUser } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [filterValue, setFilterValue] = useState("All");

  const axios = useAxiosSecure();

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get("/assignment");
        setAssignments(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAssignments();
  }, [currentUser, axios]);

  const handleDelete = async (assignment) => {
    if (currentUser.email !== assignment.email) {
      return Swal.fire({
        title: "Error",
        text: "You did not create this assignment!",
        icon: "error",
      });
    }

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

          if (res.data.deletedCount) {
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

  const handleUpdate = (assignment) => {};

  const handleFilter = async (e) => {
    setFilterValue(e.target.value);
    try {
      const res = await axios.get(
        `/assignment/filter/?difficulty=${e.target.value}`
      );
      setAssignments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen py-10 p-3">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primaryColor">
            Assignments Overview
          </h1>
          <p className="mt-4 text-lg dark:text-white">
            View and manage all assignments. You can update, delete, or view
            detailed information on each assignment.
          </p>
        </div>

        <div className="my-16 shadow-sm py-2">
          <div className="flex justify-between items-center">
            <select
              className="select select-bordered w-full max-w-xs"
              value={filterValue}
              onChange={(e) => handleFilter(e)}
            >
              <option selected value="all">
                All
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              assignment={assignment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;

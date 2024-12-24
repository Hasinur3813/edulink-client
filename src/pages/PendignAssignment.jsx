import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "../instance/AxiosSecure";
import GiveMarksModal from "../component/GiveMarksModal";
import Swal from "sweetalert2";

const PendingAssignments = () => {
  const { currentUser } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const axios = useAxiosSecure();

  useEffect(() => {
    const getAssignments = async () => {
      try {
        const res = await axios.get("/assignment/pending-assignment");

        setAssignments(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAssignments();
  }, [currentUser, axios]);

  // Function to handle opening the modal
  const handleOpenModal = (assignment) => {
    setSelectedAssignment(assignment);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedAssignment(null);
  };

  // Function to handle submitting marks
  const handleSubmitMarks = async (id, assignment) => {
    console.log(id);
    try {
      const res = await axios.patch(
        `/assignment/update-pending-assignment/${id}`,
        assignment
      );
      Swal.fire({
        title: "Success",
        text: "Assignment has been marked as completed",
        icon: "success",
      });

      const remainingAssignment = assignments.filter(
        (assignment) => assignment._id !== id
      );
      setAssignments(remainingAssignment);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    handleCloseModal();
  };

  return (
    <div className=" min-h-screen px-3 mt-20 text-darkBg">
      <h1 className="text-3xl font-bold mb-4">Pending Assignments</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead className="bg-primaryAccent text-white">
            <tr>
              <th className="p-4">Assignment Title</th>
              <th className="p-4 hidden sm:table-cell">Marks</th>
              <th className="p-4">Examinee Name</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr
                key={assignment._id}
                className="hover:bg-primaryAccent/20 text-center"
              >
                <td className="p-4">{assignment.title}</td>
                <td className="p-4 hidden sm:table-cell">
                  {assignment.marks || "Not Marked"}
                </td>
                <td className="p-4">{assignment.userName}</td>
                <td className="p-4">
                  <button
                    disabled={currentUser.email === assignment.userEmail}
                    className={`${
                      currentUser.email === assignment.userEmail &&
                      "!bg-opacity-50 cursor-not-allowed"
                    } bg-primaryColor text-white px-4 py-2 rounded hover:bg-primaryAccent`}
                    onClick={() => handleOpenModal(assignment)}
                  >
                    Give Mark
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedAssignment && (
        <GiveMarksModal
          onSubmitMarks={handleSubmitMarks}
          selectedAssignment={selectedAssignment}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PendingAssignments;

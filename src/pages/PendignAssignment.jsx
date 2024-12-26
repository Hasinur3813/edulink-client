import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import useAxiosSecure from "../instance/AxiosSecure";
import GiveMarksModal from "../component/GiveMarksModal";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import Loader2 from "../component/Loader2";

const PendingAssignments = () => {
  const { currentUser } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [loading, setLoading] = useState(true);

  const axios = useAxiosSecure();

  useEffect(() => {
    const getAssignments = async () => {
      try {
        const res = await axios.get("/assignment/pending-assignment");
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
    try {
      await axios.patch(
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
    } catch {
      Swal.fire({
        title: "Error",
        text: "Something went wrong! Try again",
        icon: "error",
      });
    }

    handleCloseModal();
  };

  if (loading) {
    return <Loader2 />;
  }

  return (
    <Fade>
      <div className=" min-h-screen px-3 py-20 text-darkBg">
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
                    {assignment.obtainedMarks || "Not Marked"}
                  </td>
                  <td className="p-4">{assignment.userName}</td>
                  <td className="p-4">
                    <button
                      disabled={currentUser?.email === assignment.userEmail}
                      className={`${
                        currentUser?.email === assignment.userEmail &&
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
    </Fade>
  );
};

export default PendingAssignments;

import { useState, useEffect } from "react";

import { Modal } from "daisyui"; // Assuming you're using DaisyUI for the modal component
import { useAuth } from "../context/AuthProvider";

const AssignmentsPage = () => {
  const { currentUser } = useAuth();
  const [assignments, setAssignments] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

  // Fetch all assignments from the server (mocked here)
  useEffect(() => {
    const fetchAssignments = async () => {
      // Example fetch (Replace with actual API call)
      const data = [
        {
          id: 1,
          title: "Math Assignment",
          thumbnail: "https://via.placeholder.com/100",
          marks: 50,
          difficulty: "Easy",
          creatorEmail: "user@example.com",
        },
        {
          id: 2,
          title: "History Assignment",
          thumbnail: "https://via.placeholder.com/100",
          marks: 100,
          difficulty: "Medium",
          creatorEmail: "anotheruser@example.com",
        },
      ];
      setAssignments(data);
    };
    fetchAssignments();
  }, []);

  const handleDelete = (id) => {
    const assignment = assignments.find((a) => a.id === id);
    if (assignment.creatorEmail !== currentUser.email) {
      return;
    }

    // Confirm and delete assignment
    setDeleteModal(true);
    setAssignmentToDelete(assignment);
  };

  const confirmDelete = () => {
    // Delete the assignment (Here, it is mocked, replace with an actual API call)
    setAssignments(assignments.filter((a) => a.id !== assignmentToDelete.id));

    setDeleteModal(false);
  };

  const cancelDelete = () => {
    setDeleteModal(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#4A90E2]">
            Assignments Overview
          </h1>
          <p className="mt-4 text-lg text-[#1E1E2C]">
            View and manage all assignments. You can update, delete, or view
            detailed information on each assignment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="card bg-white rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={assignment.thumbnail}
                alt="assignment-thumbnail"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#1E1E2C]">
                  {assignment.title}
                </h2>
                <p className="text-lg text-[#1E1E2C] mt-2">
                  Marks: {assignment.marks}
                </p>
                <p className="text-lg text-[#1E1E2C]">
                  Difficulty: {assignment.difficulty}
                </p>

                <div className="flex justify-between mt-4">
                  <button className="btn bg-[#4A90E2] hover:bg-[#1d62b4] text-white">
                    View
                  </button>
                  <button className="btn bg-[#1d62b4] hover:bg-[#4A90E2] text-white">
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(assignment.id)}
                    className="btn bg-[#E04F5F] hover:bg-[#d03838] text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delete Confirmation Modal */}
        {deleteModal && (
          <Modal open={deleteModal}>
            <div className="modal-box">
              <h2 className="text-2xl font-semibold">Are you sure?</h2>
              <p className="mt-4">
                Do you really want to delete this assignment?
              </p>
              <div className="modal-action">
                <button onClick={cancelDelete} className="btn btn-ghost">
                  Cancel
                </button>
                <button onClick={confirmDelete} className="btn btn-error">
                  Confirm Delete
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default AssignmentsPage;

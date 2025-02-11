import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

const Modal = ({ setIsModalOpen, handleSubmit, assignment }) => {
  const [formData, setFormData] = useState({ googleLink: "", quickNote: "" });
  const { currentUser } = useAuth();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitAssignment = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      title: assignment.title,
      marks: assignment.marks,
      feedback: "",
      obtainedMarks: "",
      userName: currentUser.displayName,
      userEmail: currentUser.email,
      assignmentId: assignment._id,
      status: "Pending",
      date: new Date().toISOString(),
    };
    handleSubmit(data);
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-3">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-primaryColor mb-4">
          Submit Assignment
        </h2>
        <form className="space-y-4" onSubmit={handleSubmitAssignment}>
          <div>
            <label className="block text-gray-700 mb-2">Google Docs Link</label>
            <input
              type="url"
              name="googleLink"
              value={formData.googleLink}
              onChange={handleInputChange}
              placeholder="Enter your Google Docs link"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Quick Note</label>
            <textarea
              name="quickNote"
              value={formData.quickNote}
              onChange={handleInputChange}
              placeholder="Add a quick note about your assignment"
              className="textarea textarea-bordered w-full"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="btn btn-outline"
            >
              Cancel
            </button>
            <button type="submit" className="btn bg-primaryColor text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

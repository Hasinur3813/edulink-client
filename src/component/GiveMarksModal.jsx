import { useState } from "react";

const GiveMarksModal = ({
  selectedAssignment,
  handleCloseModal,
  onSubmitMarks,
}) => {
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmitMarks = (e) => {
    e.preventDefault();
    const { assignmentId, googleLink, title, marks, userEmail, userName } =
      selectedAssignment;

    onSubmitMarks(selectedAssignment._id, {
      assignmentId,
      googleLink,
      title,
      userEmail,
      userName,
      date: new Date().toISOString(),
      marks,
      obtainedMarks,
      feedback,
      status: "Completed",
    });
  };
  return (
    <div className="absolute inset-0 z-50  bg-darkBg/50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-md p-6">
        <h2 className="text-2xl font-bold mb-4">Evaluate Assignment</h2>

        <p className="mb-2">
          <strong>Quick Note:</strong> {selectedAssignment.quickNote}
        </p>
        <p className="mb-2">
          <strong>Google Docs:</strong>{" "}
          <a
            href={selectedAssignment.googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryColor underline"
          >
            Open Document
          </a>
        </p>
        <p className="mb-4">
          <strong>Assignment Marks:</strong> {selectedAssignment.marks}
        </p>
        <form onSubmit={handleSubmitMarks}>
          <div className="mb-4">
            <label className="block font-bold mb-2">Marks</label>
            <input
              value={obtainedMarks}
              onChange={(e) => setObtainedMarks(e.target.value)}
              type="number"
              name="marks"
              className="w-full border rounded p-2"
              placeholder="Enter your marks"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              name="feedback"
              className="w-full border rounded p-2"
              placeholder="Feedback"
              rows="3"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primaryColor text-white px-4 py-2 rounded hover:bg-primaryAccent"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveMarksModal;

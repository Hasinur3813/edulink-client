import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../instance/AxiosSecure";
import Modal from "../component/Modal";
import Swal from "sweetalert2";
import Loader2 from "../component/Loader2";
import { MdErrorOutline } from "react-icons/md";

const AssignmentDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const axios = useAxiosSecure();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getAssignment = async () => {
      try {
        const res = await axios.post(`/assignment/${id}`);
        setAssignment(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getAssignment();
  }, [id, axios]);

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post("/assignment/submit-assignment", data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success",
          text: "Submitted successfully",
          icon: "success",
        });
      }
    } catch (e) {
      console.log(e);
      Swal.fire({
        title: "Error",
        text: "An error has occured. Please try again.",
        icon: "error",
      });
    }
  };

  const getDifficultyColor = (level) => {
    switch (level.toLowerCase()) {
      case "easy":
        return "bg-green-200 text-green-800";
      case "medium":
        return "bg-yellow-200 text-yellow-800";
      case "hard":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  if (loading) {
    return <Loader2 />;
  }

  if (!assignment && !loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-700">
        <div className="flex flex-col items-center">
          <MdErrorOutline className="text-red-500 text-6xl mb-4" />
          <p className="text-red-500 text-xl font-semibold mb-2">
            Something went wrong. Please try again.
          </p>
          <p className="text-gray-500 text-sm">
            If the issue persists, contact support for assistance.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto min-h-screen p-6">
      {/* Introductory Content */}
      <header className="mt-12 mb-10 text-center">
        <h2 className="text-xl sm:text-3xl font-extrabold text-primaryColor mb-4">
          Assignment Details
        </h2>
        <p className="text-gray-700 text-base sm:text-lg dark:text-gray-400">
          Explore all the details about your selected assignment, including its
          requirements, difficulty level, and submission deadline. Complete the
          assignment to test your skills and knowledge!
        </p>
      </header>

      {/* Assignment Card */}
      <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Assignment Image */}
        <div className="relative">
          <img
            src={assignment.thumbnail}
            alt={assignment.title}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-gray-900/70 text-white px-4 py-1 rounded-lg">
            Marks: {assignment.marks}
          </div>
        </div>

        {/* Assignment Details */}
        <div className="px-6 py-12">
          {/* Title and Description */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primaryColor mb-4">
            {assignment.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6 dark:text-gray-400">
            {assignment.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6">
            <span className="bg-primaryColor/10 text-primaryColor font-medium px-4 py-2 rounded-lg shadow-sm">
              Due: {new Date(assignment.dueDate).toLocaleDateString("en-GB")}
            </span>
            <span
              className={`text-sm font-bold uppercase px-4 py-2 rounded-lg shadow-sm ${getDifficultyColor(
                assignment.difficulty
              )}`}
            >
              {assignment.difficulty}
            </span>
          </div>

          {/* Take Assignment Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-primaryColor text-white hover:bg-primaryAccent w-full flex items-center justify-center gap-2 py-3 text-lg font-semibold shadow-md hover:shadow-lg  transition duration-200"
          >
            <FaCheckCircle className="text-xl" />
            Take Assignment
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          handleSubmit={handleSubmit}
          assignment={assignment}
        />
      )}
    </div>
  );
};

export default AssignmentDetails;

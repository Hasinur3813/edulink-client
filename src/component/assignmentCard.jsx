import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AssignmentCard = ({ assignment }) => {
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

  return (
    <Fade duration={1000} delay={200}>
      <div
        className="card card-compact bg-base-100 dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-primaryColor"
        key={assignment._id}
      >
        <figure>
          <img
            src={assignment.thumbnail}
            alt={assignment.title}
            className="h-52 w-full text-white object-cover rounded-t-lg"
          />
        </figure>

        <div className="card-body p-4">
          <h2 className=" text-lg font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis max-w-full dark:text-white">
            {assignment.title}
          </h2>
          <p className="text-gray-600 mb-3  whitespace-nowrap overflow-hidden text-ellipsis max-w-full dark:text-gray-400">
            {assignment.description}
          </p>
          <div className="">
            {/* Marks and Due Date */}
            <div className="flex justify-between items-center">
              <span className="inline-block  bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-md mr-2">
                Marks: {assignment.marks}
              </span>
              <span
                className={`btn btn-xs capitalize ${getDifficultyColor(
                  assignment.difficulty
                )} px-3 py-1`}
              >
                {assignment.difficulty}
              </span>
            </div>

            {/* Difficulty Level */}
            <div className="mt-4">
              <span className="inline-block bg-gray-100 text-gray-800 font-medium px-3 py-1 rounded-md">
                Due: {new Date(assignment.dueDate).toLocaleDateString("en-GB")}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 mt-8">
            <Link
              to={`/view-assignment/${assignment._id}`}
              className="btn bg-primaryColor hover:bg-primaryAccent text-white w-full flex items-center justify-center gap-2"
            >
              <FaEye /> View Assignment
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AssignmentCard;

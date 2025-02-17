import { MdAssignment, MdSend, MdFeedback } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center px-3">
        <Fade>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primaryColor mb-12">
            Key Features of EduLink
          </h2>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-12">
          {/* Feature 1: Create & Manage Assignments */}
          <Fade>
            <div className="bg-white h-full outline-primaryColor outline-1 outline dark:bg-slate-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="mb-6">
                <MdAssignment className="text-5xl text-primaryColor mx-auto" />
              </div>
              <h3 className="dark:text-white text-xl font-semibold text-gray-800 mb-4">
                Create & Manage Assignments
              </h3>
              <p className="dark:text-gray-400 text-gray-600">
                Create and manage assignments for all users, including setting
                difficulty levels, marks, and due dates.
              </p>
            </div>
          </Fade>

          {/* Feature 2: Track Pending Assignments */}
          <Fade>
            <div className="outline-primaryColor h-full outline-1 outline dark:bg-slate-900 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="mb-6">
                <FiClock className="text-5xl text-primaryColor mx-auto" />
              </div>
              <h3 className="dark:text-white text-xl font-semibold text-gray-800 mb-4">
                Track Pending Assignments
              </h3>
              <p className="dark:text-gray-400 text-gray-600">
                Stay on top of pending assignments that need to be graded by
                others, ensuring timely feedback.
              </p>
            </div>
          </Fade>

          {/* Feature 3: Assignment Submission */}
          <Fade>
            <div className="outline-primaryColor h-full outline-1 outline dark:bg-slate-900 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="mb-6">
                <MdSend className="text-5xl text-primaryColor mx-auto" />
              </div>
              <h3 className="dark:text-white text-xl font-semibold text-gray-800 mb-4">
                Assignment Submission
              </h3>
              <p className="dark:text-gray-400 text-gray-600">
                Submit assignments easily with links to Google Docs and
                additional notes. Track the status of each submission.
              </p>
            </div>
          </Fade>

          {/* Feature 4: Assignment Grading & Feedback */}
          <Fade>
            <div className="outline-primaryColor h-full outline-1 outline dark:bg-slate-900 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="mb-6">
                <MdFeedback className="text-5xl text-primaryColor mx-auto" />
              </div>
              <h3 className="dark:text-white text-xl font-semibold text-gray-800 mb-4">
                Assignment Grading & Feedback
              </h3>
              <p className="dark:text-gray-400 text-gray-600">
                Grade assignments and provide constructive feedback to peers
                based on their submissions.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

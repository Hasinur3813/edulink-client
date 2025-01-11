import { Fade } from "react-awesome-reveal";
import { FaUsers, FaTasks, FaLightbulb } from "react-icons/fa";

const AboutEdulink = () => {
  return (
    <Fade duration="2000">
      <section className="bg-gray-50 dark:bg-darkBg py-16">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primaryColor dark:text-white mb-4">
              About EduLink
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              At EduLink, we believe in the power of collaboration. Our mission
              is to create a dynamic platform where students can connect, share
              knowledge, and grow together. Whether you&apos;re preparing for
              exams, working on group projects, or seeking new learning
              opportunities, EduLink is here to help you succeed.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center  bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-primaryColor hover:shadow-lg transition duration-300">
              <div className="text-primaryColor mb-4 text-4xl">
                <FaUsers />
              </div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
                Collaborate
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Join study groups, connect with peers, and collaborate on
                projects with ease.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-primaryColor transition duration-300">
              <div className="text-primaryColor mb-4 text-4xl">
                <FaTasks />
              </div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
                Organize
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Manage assignments, deadlines, and tasks efficiently within your
                group.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-primaryColor transition duration-300">
              <div className="text-primaryColor mb-4 text-4xl">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
                Learn
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Discover new knowledge through shared resources and
                collaborative study sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AboutEdulink;

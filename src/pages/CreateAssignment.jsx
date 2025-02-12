import { useState } from "react";
import useAxiosSecure from "../instance/AxiosSecure";
import { useAuth } from "../context/AuthProvider";
import Swal from "sweetalert2";

import { Fade } from "react-awesome-reveal";

const initialFormData = {
  thumbnail: "",
  title: "",
  description: "",
  marks: "",
  difficulty: "easy",
  dueDate: "",
};

const CreateAssignment = () => {
  const { currentUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    const data = {
      name: currentUser?.displayName,
      email: currentUser?.email,
      ...formData,
      dueDate: new Date(formData.dueDate).toISOString(),
    };

    try {
      setLoading(true);
      await axiosSecure.post("/assignment/create", data);
      Swal.fire({
        title: "Success",
        text: "Assignment Created!",
        icon: "success",
      });
      setLoading(false);
      setFormData(initialFormData);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: `${error.code}`,
        icon: "error",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Fade duration={1000} delay={200}>
      <div className="min-h-screen  dark:bg-darkBg flex justify-center items-center px-4 py-8">
        <div className="bg-white dark:bg-[#2E2E3A] shadow-md rounded-lg max-w-lg w-full p-6">
          <h1 className="text-2xl font-bold text-primaryColor dark:text-white mb-6 text-center">
            Create New Assignment
          </h1>
          <form onSubmit={handleCreateAssignment}>
            {/* thumbnail url*/}
            <div className="mb-4">
              <label
                htmlFor="thumbnail"
                className="block text-[#1d62b4] dark:text-white font-medium mb-2"
              >
                Thumbnail image URL
              </label>
              <input
                type="url"
                onChange={(e) => handleChange(e)}
                value={formData.thumbnail}
                id="thumbnail"
                name="thumbnail"
                placeholder="Enter Thumbnail URL"
                className="w-full px-4 py-2 border border-gray-300 dark:border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor dark:bg-[#2E2E3A] dark:text-white"
                required
              />
            </div>
            {/* Title */}
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-[#1d62b4] dark:text-[#EDEDED] font-medium mb-2"
              >
                Assignment Title
              </label>
              <input
                type="text"
                onChange={(e) => handleChange(e)}
                value={formData.title}
                id="title"
                name="title"
                placeholder="Enter assignment title"
                className="w-full px-4 py-2 border border-gray-300 dark:border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor dark:bg-[#2E2E3A] dark:text-white"
                required
              />
            </div>
            {/* Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-[#1d62b4] dark:text-[#EDEDED] font-medium mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={(e) => handleChange(e)}
                value={formData.description}
                rows="4"
                placeholder="Provide a brief description"
                className="w-full px-4 py-2 border border-gray-300 dark:border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor dark:bg-[#2E2E3A] dark:text-white"
                required
              ></textarea>
            </div>
            {/* Marks */}
            <div className="mb-4">
              <label
                htmlFor="marks"
                className="block text-[#1d62b4] dark:text-[#EDEDED] font-medium mb-2"
              >
                Marks
              </label>
              <input
                type="number"
                id="marks"
                onChange={(e) => handleChange(e)}
                value={formData.marks}
                name="marks"
                placeholder="Enter total marks"
                className="w-full px-4 py-2 border border-gray-300 dark:border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor dark:bg-[#2E2E3A] dark:text-white"
                required
              />
            </div>
            {/* Difficulty */}
            <div className="mb-4">
              <label
                htmlFor="difficulty"
                className="block text-[#1d62b4] dark:text-[#EDEDED] font-medium mb-2"
              >
                Difficulty
              </label>
              <select
                id="difficulty"
                name="difficulty"
                onChange={(e) => handleChange(e)}
                value={formData.difficulty}
                className="w-full px-4 py-2 border border-gray-300 dark:border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor dark:bg-[#2E2E3A] dark:text-white"
                required
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            {/* Due Date */}
            <div className="mb-4">
              <label
                htmlFor="dueDate"
                className="block text-[#1d62b4] dark:text-[#EDEDED] font-medium mb-2"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                onChange={(e) => handleChange(e)}
                value={formData.dueDate}
                name="dueDate"
                className="w-full px-4 py-2 border border-gray-300 dark:border-primaryColor rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor dark:bg-[#2E2E3A] dark:text-white"
                required
              />
            </div>
            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-full bg-[#4A90E2] hover:bg-[#1d62b4] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-4 focus:ring-[#1d62b4] dark:ring-offset-[#2E2E3A] transition text-lg font-semibold"
                disabled={loading}
              >
                {loading ? "Creating..." : " Create Assignment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default CreateAssignment;

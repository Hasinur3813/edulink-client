/* eslint-disable react/no-unescaped-entities */

const FAQSection = () => {
  return (
    <section className=" py-12">
      <div className="max-w-5xl mx-auto text-center px-3">
        <h2 className="text-3xl md:text-4xl font-bold text-primaryColor mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="collapse collapse-plus bg-white dark:bg-slate-900">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl text-primaryColor font-medium">
              How do I create an assignment?
            </div>
            <div className="collapse-content">
              <p className="dark:text-white">
                To create an assignment, simply log in to your account, navigate
                to the "Create Assignment" page, and fill in the necessary
                details such as title, description, marks, difficulty level, and
                due date.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-plus bg-white dark:bg-slate-900">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl text-primaryColor font-medium">
              Can I update or delete my assignment?
            </div>
            <div className="collapse-content">
              <p className="dark:text-white">
                Yes, you can update or delete any assignments you’ve created.
                Just navigate to the "Assignments" page, find the assignment you
                want to edit, and choose the "Update" or "Delete" button. Keep
                in mind that you can only delete assignments you created.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-plus bg-white dark:bg-slate-900">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl text-primaryColor font-medium">
              How do I submit an assignment?
            </div>
            <div className="collapse-content">
              <p className="dark:text-white">
                After you create or view an assignment, click on the "Take
                Assignment" button. This will open a submission form where you
                can provide a Google Docs link and a quick note text. Once
                submitted, your assignment will be marked as pending.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-plus bg-white dark:bg-slate-900">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl text-primaryColor font-medium">
              How can I evaluate assignments submitted by others?
            </div>
            <div className="collapse-content">
              <p className="dark:text-white">
                As a user with access to the "Pending Assignments" page, you can
                evaluate assignments submitted by others. Simply click on the
                "Give Mark" button next to a pending assignment, fill in the
                marks and feedback, and submit it.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="collapse collapse-plus bg-white dark:bg-slate-900">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl text-primaryColor font-medium">
              How do I filter assignments based on difficulty level?
            </div>
            <div className="collapse-content">
              <p className="dark:text-white">
                You can filter assignments based on their difficulty level
                (easy, medium, or hard) using the filter dropdown on the
                "Assignments" page. This will show only the assignments that
                match your selected difficulty level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

const Banner = () => {
  return (
    <section className="relative bg-darkBg text-white py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20 bg-banner"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-wide">
            Welcome to EduLink, Your Personalized Online Study Hub
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
            Join thousands of students and experience a smarter, more efficient
            way to learn and collaborate online.
          </p>

          <div className="mt-10">
            <a
              href="#get-started"
              className="inline-block px-8 py-4 text-lg font-semibold text-primaryAccent bg-white rounded-full shadow-xl hover:bg-primaryAccent hover:text-white transition duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

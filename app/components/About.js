export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          I am a passionate Full Stack Developer with a strong foundation in building scalable, accessible, and performant web applications. I enjoy translating complex problems into elegant, user-friendly solutions. My toolkit includes React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
            <h3 className="font-semibold text-lg">What I Do</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Frontend development, backend APIs, database design, and integration with third-party services. I write clean, maintainable code and follow best practices.</p>
          </div>
          <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
            <h3 className="font-semibold text-lg">What I’m Looking For</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Opportunities to build impactful products, collaborate with cross-functional teams, and contribute to open-source communities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">Hi, I am</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Anurag Mahanta
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-prose">
            Full Stack Developer specializing in building exceptional digital experiences using React, Next.js, Node.js, and modern web technologies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              View Projects
            </a>
            <a href="/ANURAG MAHANTA.pdf" download className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Circular portrait */}
        <div className="relative flex items-center justify-center md:justify-end">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[420px] md:w-[420px]">
            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-2xl" aria-hidden="true" />
            <div className="relative h-full w-full rounded-full overflow-hidden ring-1 ring-gray-200 dark:ring-gray-800 shadow-2xl bg-white/50 dark:bg-gray-900/50">
              <Image
                src="/Profile.png"
                alt="Portrait"
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 80vw"
                className="object-cover object-top md:object-[center_10%] lg:object-[center_8%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';

const projects = [
  {
    title: 'URL Shortener',
    description: 'Privacy-First URL Shortener with complete privacy protection. No tracking, no cookies, no database storage.',
    tech: ['Next.js', 'Tailwind CSS'],
    image: '/UrlShort.jpg',
    live: 'https://url-shortner-ten-beta.vercel.app/',
    code: 'https://github.com/ANURAGGGGGGGGGGGG/url_shortner',
  },
  {
    title: 'QR Code Scanner',
    description: 'Unlock Seamless QR Scanning with Our Next.js-Powered Solution! Real-time scanning using device camera.',
    tech: ['Next.js', 'Tailwind CSS'],
    image: '/Qr Code Scanner.jpg',
    live: 'https://qr-plum-zeta.vercel.app/',
    code: 'https://github.com/ANURAGGGGGGGGGGGG/Qr',
  },
  {
    title: 'Zesty Bite',
    description: 'A modern Food Delivery App with customer-facing menu, cart system, and admin panel for order management.',
    tech: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    image: '/ZestyBite.png',
    live: 'https://zesty-bite-iota.vercel.app/',
    code: 'https://github.com/ANURAGGGGGGGGGGGG/zesty-bite',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-44">
                <Image src={p.image} alt={p.title} fill className="object-contain p-6" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border border-blue-200/60 dark:border-blue-500/20">{t}</li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3">
                  <a href={p.live} target="_blank" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Live</a>
                  <a href={p.code} target="_blank" className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
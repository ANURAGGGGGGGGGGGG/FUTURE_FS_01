const skills = [
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React / Next.js', level: 90 },
  { name: 'Node.js / Express', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'HTML5 / CSS3', level: 95 },
  { name: 'Tailwind CSS', level: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
        <div className="mt-8 grid grid-cols-1 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm font-medium">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
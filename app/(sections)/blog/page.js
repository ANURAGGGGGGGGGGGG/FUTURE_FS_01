export const metadata = {
  title: 'Blog - Anurag Mahanta',
  description: 'Technical writings, notes, and tutorials.'
};

export default function BlogPage() {
  const posts = [];
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24">
      <h1 className="text-4xl font-bold">Blog</h1>
      {posts.length === 0 ? (
        <p className="mt-4 text-gray-600 dark:text-gray-300">Coming soon. Stay tuned!</p>
      ) : (
        <ul className="mt-8 space-y-6">{/* map posts here */}</ul>
      )}
    </div>
  );
}
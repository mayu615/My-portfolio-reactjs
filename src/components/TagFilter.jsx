function TagFilter({ current, onChange }) {
  const tags = ["All", "Frontend", "Backend", "Fullstack"];

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`px-4 py-2 rounded-full font-medium transition-colors duration-300
            ${
              current === tag
                ? "bg-emerald-400 text-white"
                : "bg-white/20 hover:bg-emerald-500 hover:text-white text-gray-100"
            }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;

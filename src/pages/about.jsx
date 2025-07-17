function About() {
  return (
    <section className="px-6 py-12 bg-gradient-to-br from-pink-200 via-purple-200 to-purple-300 text-gray-900 dark:from-purple-900 dark:via-purple-800 dark:to-pink-900 dark:text-gray-100">
      <div className="w-full px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-pink-700 dark:text-pink-300">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 transform hover:rotate-y-3d hover:scale-105 transition-all duration-700 bg-white/60 dark:bg-black/20 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">Personal Details</h3>
            <ul className="space-y-2 text-lg">
              <li><strong>Name:</strong> Mayuri Chatap</li>
              <li><strong>Father's Name:</strong> Narayan Chatap</li>
              <li><strong>Mother's Name:</strong> Mahananda Chatap</li>
              <li><strong>Languages:</strong> Hindi, English, Marathi</li>
              <li><strong>Hobbies:</strong> Watching Movies, Reading Books, Listening Music</li>
            </ul>
          </div>

          <div className="space-y-6 transform hover:-rotate-y-3d hover:scale-105 transition-all duration-700 bg-white/60 dark:bg-black/20 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300">Who Am I?</h3>
            <p className="text-lg leading-relaxed">
              Hi, I'm Mayuri, a Developer who blends creativity with technology. I love designing intuitive interfaces and ensuring every pixel serves a purpose. Outside work, I enjoy coffee, books, and exploring new design trends.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-16 text-center text-pink-700 dark:text-pink-300">What I Do!</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Frontend Development', content: 'HTML, CSS, JS, React, Angular' },
            { title: 'Web Development', content: 'Building intuitive and scalable UIs' },
            { title: 'App Development', content: 'Flutter, React Native, Swift' },
          ].map(({ title, content }, i) => (
            <div
              key={i}
              className="bg-white/70 dark:bg-black/30 shadow-xl p-6 rounded-xl transform hover:rotate-2 hover:scale-105 transition-all duration-700"
            >
              <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-300">{title}</h3>
              <p className="text-gray-800 dark:text-gray-200">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

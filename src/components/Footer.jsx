export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p>© 2026 Mon Portfolio</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/saint-mathieumakon/" target="_blank">LinkedIn</a>
          <a href="mailto:makonmathieu@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
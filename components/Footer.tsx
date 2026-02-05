export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-900 text-center">
      <p className="text-slate-600 text-sm font-mono">
        © {new Date().getFullYear()} Maxime Brucale. All rights reserved.
      </p>
    </footer>
  );
}
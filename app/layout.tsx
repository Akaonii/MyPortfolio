import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0b1120] text-slate-100 antialiased selection:bg-blue-500/30">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
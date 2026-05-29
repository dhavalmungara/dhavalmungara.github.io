import './globals.css';

export const metadata = {
  title: 'Mungara Dhaval | Cyber Security Manager Portfolio',
  description: 'Enterprise IT Cyber Security Infrastructure Operations & Hardening Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

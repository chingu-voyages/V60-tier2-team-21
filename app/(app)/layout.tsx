import Link from "next/link";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/applications">Applications</Link>
        </li>
        <li>
          <Link href="/new-entry">New Entry</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

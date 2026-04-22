export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>I am App layout</p>
      {children}
    </div>
  );
}

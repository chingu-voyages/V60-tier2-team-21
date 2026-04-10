export default function SectionHeader({ title, description }) {
  return (
    <header className="text-center">
      <h3 className="text-5xl font-medium leading-none tracking-tighter text-foreground sm:text-6xl text-balance py-6">
        {title}
      </h3>

      <p className="mx-auto max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-muted-foreground pb-12">
        {description}
      </p>
    </header>
  );
}

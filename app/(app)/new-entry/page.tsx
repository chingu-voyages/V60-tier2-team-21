import ApplicationForm from "@/components/ApplicationForm";

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center py-0 md:py-20 gap-5">
      <div className="text-center max-w-md m-auto space-y-4">
        <h1 className="text-2xl leading-7 md:text-4xl font-medium">
          New Application Entry
        </h1>
        <p className="text-base leading-5">
          Curate your next career move with precision. Add the details of your
          latest endeavor to your professional vault.
        </p>
      </div>

      <ApplicationForm />
    </main>
  );
}

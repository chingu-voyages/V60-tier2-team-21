import ApplicationFrom from "@/components/ApplicationForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <Card className="w-87.5">
          <CardHeader>
            <CardTitle>Workout Plan</CardTitle>
            <CardDescription>Start your routine today</CardDescription>
          </CardHeader>

          <CardContent>
            <p>Track your habits and stay consistent.</p>
          </CardContent>

          <CardFooter>
            <button className="text-sm text-blue-500" type="button">
              Get Started
            </button>
          </CardFooter>
        </Card>
        <ApplicationFrom />
      </main>
    </div>
  );
}

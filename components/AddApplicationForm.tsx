import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";

export default function AddApplicationForm() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2">
        <Input placeholder="Company name" />
        <Input placeholder="Role" />
        <Input placeholder="Date Applied" />
        <Input placeholder="Location" />
        <Input placeholder="Status" />
        <Input placeholder="Notes" />
      </CardContent>
    </Card>
  );
}

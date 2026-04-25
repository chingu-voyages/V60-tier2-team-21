"use client";

import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  type Application,
  ApplicationStatus,
} from "@/store/applications/types";
import useApplicationsStore from "@/store/applications/useApplicationsStore";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

interface Props {
  application?: Application;
  onSubmit?: (application: Application) => void;
}

const INITIAL_APPLICATION = {
  companyName: "",
  role: "",
  location: "",
  notes: "",
  date: "",
};

export default function ApplicationForm({ application, onSubmit }: Props) {
  const [applicationFormData, setApplicationFormData] = useState(
    application || {
      ...INITIAL_APPLICATION,
      id: uuid4(),
      status: ApplicationStatus.Applied,
    },
  );

  const { addApplication } = useApplicationsStore();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setApplicationFormData({
      ...applicationFormData,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    // handle onSubmit if it's passed, to handle cases like editing application
    if (onSubmit) return onSubmit(applicationFormData);

    addApplication(applicationFormData);
  }

  return (
    <Card className="w-full max-w-md">
      <CardContent>
        <form className="flex flex-col gap-3" onSubmit={handleFormSubmit}>
          <Label htmlFor="company-name">Company Name</Label>
          <Input
            name="companyName"
            id="company-name"
            type="text"
            placeholder="e.g ABC Corp."
            required
            onChange={handleChange}
            value={applicationFormData.companyName}
          />
          <Label htmlFor="role">Role</Label>
          <Input
            name="role"
            id="role"
            type="text"
            placeholder="e.g. Project Manager"
            required
            onChange={handleChange}
            value={applicationFormData.role}
          />
          <Label htmlFor="date">Date Applied</Label>
          <Input
            name="date"
            id="date"
            type="date"
            placeholder="Date Applied"
            required
            onChange={handleChange}
            value={applicationFormData.date}
          />
          <Label htmlFor="location">Location</Label>
          <Input
            name="location"
            id="location"
            type="text"
            placeholder="e.g. Remote (USA)"
            onChange={handleChange}
            value={applicationFormData.location}
          />
          <Label htmlFor="status">Status</Label>
          <Select
            defaultValue={applicationFormData.status}
            onValueChange={(value) => {
              setApplicationFormData({
                ...applicationFormData,
                status: value as ApplicationStatus,
              });
            }}
          >
            <SelectTrigger id="status" className="w-45">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.values(ApplicationStatus).map((status) => {
                  return (
                    <SelectItem value={status} key={status}>
                      {status}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            name="notes"
            id="notes"
            placeholder="My thoughts..."
            className="block"
            onChange={handleChange}
            value={applicationFormData.notes}
          />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}

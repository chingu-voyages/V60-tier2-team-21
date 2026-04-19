"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function ApplicationForm() {
  const [applicationFormData, setApplicationFormData] = useState({
    companyName: "",
    role: "",
    date: "",
    location: "",
    status: "Applied",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    setApplicationFormData({
      ...applicationFormData,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Form Submitted with", applicationFormData);
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
          />
          <Label htmlFor="role">Role</Label>
          <Input
            name="role"
            id="role"
            type="text"
            placeholder="e.g. Project Manager"
            required
            onChange={handleChange}
          />
          <Label htmlFor="date">Date Applied</Label>
          <Input
            name="date"
            id="date"
            type="date"
            placeholder="Date Applied"
            required
            onChange={handleChange}
          />
          <Label htmlFor="location">Location</Label>
          <Input
            name="location"
            id="location"
            type="text"
            placeholder="e.g. Remote (USA)"
            onChange={handleChange}
          />
          <Label htmlFor="status">Status</Label>
          <Select
            defaultValue={applicationFormData.status}
            onValueChange={(value) => {
              setApplicationFormData({ ...applicationFormData, status: value });
            }}
          >
            <SelectTrigger id="status" className="w-45">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Applied">Applied</SelectItem>
                <SelectItem value="Interview">Interview</SelectItem>
                <SelectItem value="Offer">Offer</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
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
          />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}

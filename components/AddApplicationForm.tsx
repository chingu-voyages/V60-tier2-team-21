"use client";

import { useState } from "react";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function AddApplicationForm() {
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
          <label htmlFor="company-name">Company Name</label>
          <Input
            name="companyName"
            id="company-name"
            type="text"
            placeholder="e.g ABC Corp."
            required
            onChange={handleChange}
          />
          <label htmlFor="role">Role</label>
          <Input
            name="role"
            id="role"
            type="text"
            placeholder="e.g. Project Manager"
            required
            onChange={handleChange}
          />
          <label htmlFor="date">Date Applied</label>
          <Input
            name="date"
            id="date"
            type="date"
            placeholder="Date Applied"
            required
            onChange={handleChange}
          />
          <label htmlFor="location">Location</label>
          <Input
            name="location"
            id="location"
            type="text"
            placeholder="e.g. Remote (USA)"
            onChange={handleChange}
          />
          <label htmlFor="status">Status</label>

          <select
            className="block"
            id="status"
            name="status"
            defaultValue={applicationFormData.status}
            required
            onChange={handleChange}
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
          <label htmlFor="notes">Notes</label>
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

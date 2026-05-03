"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { v4 as uuid4 } from "uuid";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
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

const formSchema = z.object({
  companyName: z.string().min(1, "Company name is required."),
  role: z.string().min(1, "Role is required"),
  date: z.string().min(1, "Date is required"),
  location: z.string().optional(),
  status: z.nativeEnum(ApplicationStatus),
  notes: z.string().optional(),
});

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
  const applicationForm = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: application || {
      ...INITIAL_APPLICATION,
      status: ApplicationStatus.Applied,
    },
  });

  const { addApplication } = useApplicationsStore();

  const [submitted, setSubmitted] = useState(false);

  function handleFormSubmit(data: z.infer<typeof formSchema>) {
    // handle onSubmit if it's passed, to handle cases like editing application
    if (onSubmit)
      return onSubmit({
        ...data,
        location: data.location ?? "",
        notes: data.notes ?? "",
        id: uuid4(),
      });

    // NOTE TO DEVS: added solo fix for the location and notes types above and below in order to not to touch store types.ts
    // to be decided to refactor if the location and notes be redifined in the store!!

    addApplication({
      ...data,
      location: data.location ?? "",
      notes: data.notes ?? "",
      id: uuid4(),
    });

    // reset the form
    applicationForm.reset();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 1500);
  }

  return (
    <Card className="w-full max-w-md md:max-w-lg">
      <CardContent>
        <form
          className="flex flex-col gap-3"
          onSubmit={applicationForm.handleSubmit(handleFormSubmit)}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="company-name">Company Name</FieldLabel>
              <Input
                {...applicationForm.register("companyName")}
                id="company-name"
                type="text"
                placeholder="e.g ABC Corp."
              />
              {applicationForm.formState.errors.companyName && (
                <FieldError
                  errors={[applicationForm.formState.errors.companyName]}
                />
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="role">Role</FieldLabel>
              <Input
                {...applicationForm.register("role")}
                id="role"
                type="text"
                placeholder="e.g. Project Manager"
              />
              {applicationForm.formState.errors.role && (
                <FieldError errors={[applicationForm.formState.errors.role]} />
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="date">Date Applied</FieldLabel>
              <Input
                {...applicationForm.register("date")}
                id="date"
                type="date"
                placeholder="Date Applied"
              />
              {applicationForm.formState.errors.date && (
                <FieldError errors={[applicationForm.formState.errors.date]} />
              )}
            </Field>
            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <Input
                {...applicationForm.register("location")}
                id="location"
                type="text"
                placeholder="e.g. Remote (USA)"
              />
            </Field>
            <Controller
              name="status"
              control={applicationForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="status">Status</FieldLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger id="status" className="w-45">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent position="popper">
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
                </Field>
              )}
            />
            <Field>
              <FieldLabel htmlFor="notes">Notes</FieldLabel>
              <Textarea
                {...applicationForm.register("notes")}
                id="notes"
                placeholder="My thoughts..."
                className="block"
              />
            </Field>
          </FieldGroup>
          {submitted && (
            <p className="text-center text-base">🎉 Submitted successfully</p>
          )}
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}

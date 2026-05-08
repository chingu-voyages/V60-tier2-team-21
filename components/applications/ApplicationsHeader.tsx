"use client";
import { Search, XIcon } from "lucide-react";
import { useState } from "react";
import ApplicationForm from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ApplicationHeader() {
  return (
    <header className="flex-col flex">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-xl font-medium leading-none tracking-tight pb-12">
          Applications
        </h1>
      </div>

      <div className="flex justify-between items-center border-b pb-4 flex-wrap gap-4">
        <div className="flex gap-4">
          {/* Placeholder for  ApplicationFilter */}
          <Button variant="outline">Sorty by</Button>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Create application</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Application</DialogTitle>
              <DialogDescription>
                The new application will be instantly reflected in your list.
                Click submit when you&apos;re done.
              </DialogDescription>
            </DialogHeader>

            <ApplicationForm />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}

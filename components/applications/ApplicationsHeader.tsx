"use client";
import ApplicationForm from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ApplicationHeader() {
  return (
    <header className="flex-col flex">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-xl font-medium leading-none tracking-tight pb-4">
          Applications
        </h1>
      </div>

      <div className="flex justify-end items-center border-b pb-4 flex-wrap gap-4">
        {/* <div className="flex gap-4">
          <Button variant="secondary">
            <Search />
            <span className="text-muted-foreground"> search applications </span>
          </Button>
          <Button variant="outline">Sorty by</Button>
        </div> */}

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

// <div className="flex justify-between items-start gap-y-2 sm:items-center border-b pb-4 sm:flex-row flex-col">

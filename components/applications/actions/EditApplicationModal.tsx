"use client";

import { XIcon } from "lucide-react";
import { useEffect } from "react";
import ApplicationForm from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import type { Application } from "@/store/applications/types";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

interface Props {
  application: Application | null;
  onClose: () => void;
}
const EditApplicationModal = ({ application, onClose }: Props) => {
  const { updateApplication } = useApplicationsStore();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!application) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-xl bg-white flex items-center justify-center relative px-4 py-14 rounded-lg">
        <Button
          className="absolute right-2 top-2 cursor-pointer"
          aria-label="Close"
          variant="ghost"
          onClick={onClose}
        >
          <XIcon />
        </Button>

        <div className="w-full max-w-xl flex items-center flex-col gap-4">
          <h1 className="font-medium text-2xl">Edit Application</h1>
          <ApplicationForm
            application={application}
            onSubmit={(application) => {
              updateApplication(application.id, application);
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditApplicationModal;

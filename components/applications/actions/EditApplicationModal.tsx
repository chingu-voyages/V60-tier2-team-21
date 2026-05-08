"use client";

import ApplicationForm from "@/components/ApplicationForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Application } from "@/store/applications/types";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

interface Props {
  application: Application | null;
  onClose: () => void;
}

const EditApplicationModal = ({ application, onClose }: Props) => {
  const { updateApplication } = useApplicationsStore();

  return (
    <Dialog
      open={application !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Application</DialogTitle>
        </DialogHeader>
        {application && (
          <ApplicationForm
            application={application}
            onSubmit={(updated) => {
              updateApplication(updated.id, updated);
              onClose();
            }}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditApplicationModal;

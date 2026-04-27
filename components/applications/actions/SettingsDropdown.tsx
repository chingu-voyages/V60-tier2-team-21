"use client";

import { CogIcon, Ellipsis, EllipsisVertical, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useApplicationsStore from "@/store/applications/useApplicationsStore";

interface Props {
  onEdit: () => void;
  applicationId: string;
}

const SettingsDropDown = ({ applicationId, onEdit }: Props) => {
  const { removeApplication } = useApplicationsStore();

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="md:flex justify-center md:pr-2">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          onClick={() => {}}
          aria-label="Edit application"
          className="cursor-pointer"
        >
          <span>
            <Ellipsis
              size={16}
              className="hidden md:block hover:text-foreground"
            />
            <EllipsisVertical size={18} className="md:hidden" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuItem className="cursor-pointer" onClick={onEdit}>
              <CogIcon size={16} /> <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer text-red-400"
              onClick={() => {
                setDialogOpen(true);
              }}
            >
              <Trash2 size={16} className="text-current" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={dialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              application from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDialogOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => removeApplication(applicationId)}>
              Yes, delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default SettingsDropDown;

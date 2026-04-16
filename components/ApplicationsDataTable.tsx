import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ApplicationsDataTable = () => {
  return (
    <div>
      <Table className="w-full bg-primary/30 rounded-lg">
        <TableHeader>
          <TableRow>
            <TableHead>Company & Role</TableHead>
            <TableHead>Application Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Next Step</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicationsDataTable;

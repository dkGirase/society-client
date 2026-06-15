import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusType = "ACTIVE" | "PENDING" | "BLOCKED" | "INACTIVE";

interface StatusBadgeProps {
  status: StatusType;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    ACTIVE: "bg-green-100 text-green-700 hover:bg-green-100",
    PENDING: "bg-amber-100 text-amber-700 hover:bg-amber-100",
    BLOCKED: "bg-red-100 text-red-700 hover:bg-red-100",
    INACTIVE: "bg-slate-100 text-slate-700 hover:bg-slate-100",
  };

  return (
    <Badge className={cn("px-3 py-1 text-xs font-bold", styles[status])}>
      {status}
    </Badge>
  );
}
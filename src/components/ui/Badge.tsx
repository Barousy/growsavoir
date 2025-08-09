
import { cn } from "@/lib/utils";

export function Badge({ children, variant = "secondary" }:{ children: React.ReactNode; variant?: "secondary"|"outline"|"default" }){
  const m = variant === "outline" ? "border border-gray-300 dark:border-gray-700"
    : variant === "default" ? "bg-blue-600 text-white"
    : "bg-gray-200 dark:bg-gray-800";
  return <span className={cn("inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg", m)}>{children}</span>;
}

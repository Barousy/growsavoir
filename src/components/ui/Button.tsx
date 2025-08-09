
import { cn } from "@/lib/utils";
import React from "react";

export function Button(
  { className = "", children, variant = "default", size = "md", ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default"|"outline"|"ghost"; size?: "sm"|"md"|"icon" }
){
  const v = variant === "outline" ? "border border-gray-300 dark:border-gray-700 bg-transparent text-current"
    : variant === "ghost" ? "bg-transparent text-current"
    : "bg-blue-600 text-white hover:bg-blue-700";
  const s = size === "icon" ? "p-2 rounded-2xl"
    : size === "sm" ? "px-3 py-1.5 rounded-xl"
    : "px-4 py-2 rounded-xl";
  return <button {...props} className={cn("transition", v, s, className)}>{children}</button>;
}

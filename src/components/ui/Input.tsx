
import { cn } from "@/lib/utils";
import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>){
  return <input {...props} className={cn("border rounded-xl px-3 py-2 bg-transparent", props.className)} />;
}

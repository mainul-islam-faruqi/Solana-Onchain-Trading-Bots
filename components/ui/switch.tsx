"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full",
      "border-2 border-accent/50 transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-accent focus-visible:ring-offset-2",
      "focus-visible:ring-offset-background",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-accent",
      "data-[state=unchecked]:bg-darkest/90",
      "hover:data-[state=unchecked]:bg-darkest",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full",
        "shadow-lg ring-0 transition-transform duration-200",
        "data-[state=checked]:translate-x-4",
        "data-[state=unchecked]:translate-x-0",
        "data-[state=checked]:bg-white",
        "data-[state=unchecked]:bg-light/80",
        "data-[state=unchecked]:hover:bg-light"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch }; 
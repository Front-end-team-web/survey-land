import React, { createContext, useContext, forwardRef } from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/shared/layout/ui/toggle";

// Contexte JS sans typage
const ToggleGroupContext = createContext({
  size: "default",
  variant: "default",
});

const ToggleGroup = forwardRef((props, ref) => {
  const {
    className,
    variant = "default",
    size = "default",
    children,
    ...rest
  } = props;

  return (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={cn("flex items-center justify-center gap-1", className)}
      {...rest}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
});
ToggleGroup.displayName = "ToggleGroup";

const ToggleGroupItem = forwardRef((props, ref) => {
  const context = useContext(ToggleGroupContext);
  const {
    className,
    children,
    variant = context.variant,
    size = context.size,
    ...rest
  } = props;

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({ variant, size }),
        className
      )}
      {...rest}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };

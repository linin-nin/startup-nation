import { cn } from "@/lib/utils/utils";
import React, { ReactNode } from "react";

const Container = ({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("bg-black container padding-body font-body", className)}>
      {children}
    </div>
  );
};

export default Container;

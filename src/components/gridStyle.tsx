import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/utils";

const gridStyles = cva(["grid grid-cols-1"], {
  variants: {
    cols: {
      2: ["md:grid-cols-2 lg:grid-cols-2"],
      3: ["md:grid-cols-2 lg:grid-cols-3"]
    }
  }
});

function Grid({
  children,
  cols = 2,
  className
}: {
  children: React.ReactNode;
  cols?: 2 | 3;
  className?: string;
}) {
  const classes = gridStyles({ cols });

  return <div className={cn(`${classes}`, className)}>{children}</div>;
}

export default Grid;

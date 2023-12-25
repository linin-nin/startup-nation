import { cn } from "@/lib/utils/utils";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

interface GridProps{
    children: React.ReactNode,
    className?: string
}

const GridLayout = ({children, className, ...props}: GridProps) => {
    return(
        <div className={cn('grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8', className)}>
            {children}
        </div>
    )
}

export default GridLayout

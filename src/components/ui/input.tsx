import { cn } from "@/lib/utils/utils";

const Input = ({
  className,
  text,
  placeholder
}: {
  className?: string;
  text: string;
  placeholder: string;
}) => {
  return (
    <input
      type={text}
      placeholder={placeholder}
      className={cn("input outline-none", className)}
    />
  );
};

export default Input;

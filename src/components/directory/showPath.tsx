"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuNavbar } from "@/lib/menu-navbar";
import { cn } from "@/lib/utils/utils";

const ShowPath = ({ className }: { className?: string }) => {
  const pathName = usePathname();
  function Name() {
    for (const element of MenuNavbar) {
      if (pathName == element.pathUrl) return element.menuName;
    }
  }
  return (
    <div
      className={cn(
        "lg:py-5 md:py-4 py-3 border-b-2 border-t-2 font-body padding-body",
        className
      )}
    >
      <div className="inline-block">
        <div className="flex justify-between gap-4">
          <Link href="/">
            <h2 className="sm:text-2xl text-[13px] hover:underline">Home</h2>
          </Link>
          <Image
            src={"/icons/greater-then.svg"}
            alt="greater-than-icon"
            width={22}
            height={22}
          />
          <h2 className="text-yellow-300 sm:text-2xl text-[13px]">
            <Name />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ShowPath;

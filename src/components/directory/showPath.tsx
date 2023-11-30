"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuNavbar } from "@/lib/menu-navbar";

const ShowPath = () => {
  const pathName = usePathname();
  function Name() {
    for (const element of MenuNavbar) {
      if (pathName == element.pathUrl) return element.menuName;
    }
  }
  return (
    <div className="container py-6 border-b-2 border-t-2 font-body padding-body">
      <div className="inline-block">
        <div className="flex justify-between gap-4">
          <Link href="/">
            <h2 className="text-2xl hover:underline">Home</h2>
          </Link>
          <Image
            src={"/icons/greater-then.svg"}
            alt="greater-than-icon"
            width={32}
            height={32}
          />
          <h2 className="text-yellow-300 text-2xl">
            <Name />
          </h2>
          <Image
            src={"/icons/greater-then.svg"}
            alt="greater-than-icon"
            width={32}
            height={32}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowPath;

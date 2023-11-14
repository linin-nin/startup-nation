"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuNavbar } from "@/lib/meu-navbar";

const ShowPath = () => {
  const pathName = usePathname();
  function Name() {
    for (let i = 0; i < MenuNavbar.length; i++) {
      if (pathName == MenuNavbar[i].pathUrl) return MenuNavbar[i].menuName;
    }
  }
  return (
    <div className="container py-6">
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

import Header from "@/components/header/Header";
import Hero from "@/components/directory/directory";

export default function DirectoryLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="px-24 font-body bg-black sticky top-0 z-[999]">
        <Header />
      </div>
      <Hero />
      {children}
    </>
  );
}

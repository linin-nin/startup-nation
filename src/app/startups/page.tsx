import React from "react";
import Header from "@/components/home/header/Header";
import Container from "@/components/container";
import Hero from "@/components/home/Hero";
import ShowPath from "@/components/directory/showPath";
import Footer from "@/components/footer/footer";
import { redirect } from "next/navigation";

const Page = () => {
  return redirect("/startups/all");
};

export default Page;

"use client"
import Image from "next/image";
import Header from "@/components/Header";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
    </>
  );
}

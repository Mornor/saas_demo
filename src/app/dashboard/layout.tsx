import React from "react";
import { Navbar } from "./_components/NavBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }){
  return (
    <div className="bg-accent/5 min-h-screen">
      <Navbar />
      <div className="container py-6">{children}</div>
    </div>
  )
}
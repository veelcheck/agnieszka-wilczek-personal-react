import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import BackButton from "./BackButton";
import Footer from "./Footer";

function Root() {
  return (
    <div className="min-h-svh max-w-5xl mx-auto flex flex-col">
    <Header />
    <BackButton />
    <main className="flex flex-grow"> 
      <Outlet />
    </main>
    <BackButton />
    <Footer />
    </div>
  )
}

export default Root;
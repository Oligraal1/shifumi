"use client";

import Rules from "./components/Rules";
import Game from "./components/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-auto mb-12 pb-6">
      <Header />
      <h2 className="my-6 mx-auto text-center">Welcome to Shifumi. Let's play together</h2>
      <main className="flex-grow flex flex-col md:flex-row p-4 md:p-8 w-4/5 mx-auto">
        <div className="w-full md:w-2/3 mb-4">
          <Game />
        </div>
        <div className="w-full md:w-1/3">
          <Rules />
        </div>
      </main>

      <Footer />
    </div>
  );
}

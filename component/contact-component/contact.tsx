"use client";

import { useState } from "react";

export default function ContactSection() {
  const [showNotif, setShowNotif] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    // Validasi manual
    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      setShowNotif(false);
      return;
    }

    setError("");
    setShowNotif(true);

    setTimeout(() => {
      setShowNotif(false);
    }, 3000);
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-8 py-20 sm:py-24 lg:py-32 relative">
      
      {/* SUCCESS NOTIFICATION */}
      {showNotif && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-foreground text-background px-6 py-3 rounded-md shadow-lg text-sm animate-fade-in">
          Message sent successfully!
        </div>
      )}

      {/* ERROR MESSAGE */}
      {error && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-md shadow-lg text-sm animate-fade-in">
          {error}
        </div>
      )}

      <div className="w-full max-w-2xl text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-foreground">
          Let’s Build Something Timeless.
        </h1>

        <form onSubmit={handleSubmit} className="mt-16 space-y-6 text-left">
          <div className="relative">
            <input
              name="name"
              required
              type="text"
              placeholder="Name"
              className="w-full border-0 border-b border-border bg-transparent p-4 rounded-none 
              text-base text-foreground placeholder:text-foreground/40 
              focus:ring-0 focus:border-foreground"
            />
          </div>

          <div className="relative">
            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full border-0 border-b border-border bg-transparent p-4 rounded-none 
              text-base text-foreground placeholder:text-foreground/40 
              focus:ring-0 focus:border-foreground"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="w-full border-0 border-b border-border bg-transparent p-4 rounded-none 
              resize-none text-base text-foreground placeholder:text-foreground/40 
              focus:ring-0 focus:border-foreground"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-foreground text-background text-sm font-bold 
            uppercase tracking-widest rounded-none cursor-pointer 
            hover:bg-foreground/90 transition-all"
          >
            <span className="truncate">Begin the Conversation</span>
          </button>
        </form>
      </div>
    </main>
  );
}

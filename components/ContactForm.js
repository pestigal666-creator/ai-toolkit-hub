"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

// This site has no backend, so the form opens the visitor's email app with a
// pre-filled message. To receive messages directly in a dashboard instead, swap
// handleSubmit for a call to a form service such as Formspree or Getform.

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [opened, setOpened] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email and message.");
      setOpened(false);
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      setOpened(false);
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Message from ${name.trim()} via ${SITE.name}`);
    const body = encodeURIComponent(`${message.trim()}\n\nFrom: ${name.trim()} (${email.trim()})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  const fieldClass =
    "mt-2 block min-h-[48px] w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-base text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="text-sm font-semibold text-slate-200">
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="text-sm font-semibold text-slate-200">
          Your email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="text-sm font-semibold text-slate-200">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={fieldClass}
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-red-300">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
      >
        Send message
      </button>

      <p aria-live="polite" className="text-sm text-slate-400">
        {opened
          ? `Your email app should open with the message ready to send. If it does not, write to ${SITE.email}.`
          : "Sending opens your email app with your message filled in."}
      </p>
    </form>
  );
}

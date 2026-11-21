"use client";

import { useState } from "react";
import { PROMPT_CATEGORIES, TONES, generatePrompt } from "@/lib/promptTemplates";

export default function PromptGenerator() {
  const [category, setCategory] = useState(PROMPT_CATEGORIES[0].id);
  const [tone, setTone] = useState(TONES[0].id);
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [copyState, setCopyState] = useState("");

  const current = PROMPT_CATEGORIES.find((item) => item.id === category) || PROMPT_CATEGORIES[0];

  function handleSubmit(event) {
    event.preventDefault();
    const cleaned = topic.trim();
    setCopyState("");
    if (!cleaned) {
      setError("Please enter a topic to generate a prompt.");
      setResult("");
      return;
    }
    setError("");
    setResult(generatePrompt({ category, tone, topic: cleaned }));
  }

  async function handleCopy() {
    if (!result) return;
    let copied = false;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(result);
        copied = true;
      }
    } catch (err) {
      copied = false;
    }

    if (!copied) {
      const field = document.getElementById("prompt-output");
      if (field) {
        field.focus();
        field.select();
        try {
          copied = document.execCommand("copy");
        } catch (err) {
          copied = false;
        }
      }
    }

    setCopyState(copied ? "copied" : "manual");
    setTimeout(() => setCopyState(""), 2500);
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-black/20 sm:p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <fieldset>
          <legend className="text-sm font-semibold text-slate-200">1. Choose a category</legend>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {PROMPT_CATEGORIES.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={category === item.id}
                onClick={() => setCategory(item.id)}
                className={`min-h-[44px] rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  category === item.id
                    ? "border-violet-500 bg-violet-600 text-white"
                    : "border-slate-700 bg-slate-950 text-slate-300 hover:border-slate-500 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="prompt-topic" className="text-sm font-semibold text-slate-200">
            2. Enter your topic
          </label>
          <input
            id="prompt-topic"
            type="text"
            value={topic}
            maxLength={200}
            onChange={(event) => setTopic(event.target.value)}
            placeholder={current.placeholder}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "prompt-topic-error" : undefined}
            className="mt-3 block min-h-[48px] w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-base text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          />
          {error ? (
            <p id="prompt-topic-error" role="alert" className="mt-2 text-sm text-red-300">
              {error}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="prompt-tone" className="text-sm font-semibold text-slate-200">
            3. Pick a tone
          </label>
          <select
            id="prompt-tone"
            value={tone}
            onChange={(event) => setTone(event.target.value)}
            className="mt-3 block min-h-[48px] w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-base text-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 sm:max-w-xs"
          >
            {TONES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-900 sm:w-auto"
        >
          Generate Prompt
        </button>
      </form>

      {result ? (
        <div className="mt-8 border-t border-slate-800 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-white">Your prompt</h3>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              {copyState === "copied" ? "Copied!" : "Copy"}
            </button>
          </div>
          <textarea
            id="prompt-output"
            readOnly
            value={result}
            rows={14}
            aria-label="Generated prompt"
            className="mt-3 block w-full rounded-lg border border-slate-700 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          />
          <p aria-live="polite" className="mt-2 min-h-[20px] text-sm text-emerald-300">
            {copyState === "copied" ? "Copied to your clipboard." : ""}
            {copyState === "manual" ? "Press Ctrl+C (or Cmd+C) to copy the selected text." : ""}
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Paste this into ChatGPT, Claude, Gemini, Midjourney or any other AI tool. Replace anything in [BRACKETS]
            with your own details.
          </p>
        </div>
      ) : null}
    </div>
  );
}

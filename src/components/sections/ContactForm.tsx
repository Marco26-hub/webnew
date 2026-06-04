"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { budgets, contactReasons } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "done";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-xs font-medium text-muted">
        {label}
        <AnimatePresence>
          {error && (
            <motion.span
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="font-mono text-[0.7rem] text-warn"
            >
              {error}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-faint focus:border-accent/60 focus:bg-surface";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [reason, setReason] = useState(contactReasons[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "invalid";
    if (message.trim().length < 10) e.message = "add detail";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Front-end demo only — wire this to your API / email provider.
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("done");
  };

  return (
    <div className="panel relative overflow-hidden rounded-3xl p-6 md:p-8">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[26rem] flex-col items-center justify-center text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 16 }}
              className="grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-7 w-7"
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </svg>
            </motion.div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight">
              Message received.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Thanks, {name.split(" ")[0] || "there"}. We read every note and
              reply within two working days.
            </p>
            <button
              onClick={() => {
                setStatus("idle");
                setName("");
                setEmail("");
                setCompany("");
                setMessage("");
              }}
              className="mt-7 text-sm text-accent transition-opacity hover:opacity-70"
            >
              Send another →
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  className={inputClass}
                  placeholder="Ada Lovelace"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  className={inputClass}
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
            </div>

            <Field label="Company">
              <input
                className={inputClass}
                placeholder="Where you work"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Field>

            <div>
              <span className="mb-2 block text-xs font-medium text-muted">
                Reason
              </span>
              <div className="flex flex-wrap gap-2">
                {contactReasons.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setReason(r)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200",
                      reason === r
                        ? "border-accent/60 bg-accent/10 text-ink"
                        : "border-line text-muted hover:text-ink",
                    )}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-2 block text-xs font-medium text-muted">
                Budget
              </span>
              <div className="flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={cn(
                      "rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200",
                      budget === b
                        ? "border-accent/60 bg-accent/10 text-ink"
                        : "border-line text-muted hover:text-ink",
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <Field label="Project" error={errors.message}>
              <textarea
                className={cn(inputClass, "min-h-[7rem] resize-none")}
                placeholder="What are you trying to build?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>

            <div className="flex items-center justify-between pt-1">
              <p className="font-mono text-[0.7rem] text-faint">
                Avg. reply · 48h
              </p>
              <Button type="submit" size="lg" arrow disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Send message"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

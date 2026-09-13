import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useSearchParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, Mail } from "lucide-react"
import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { Button } from "../components/ui/Button.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"
import { useReducedMotion } from "../hooks/useReducedMotion.js"

const SUBJECTS = [
  "Software Development",
  "Data & Analytics",
  "Automation / Integration",
  "Website Development",
  "Platform / Pilot Interest",
  "Other",
]

const GENERAL_EMAIL = "hello@optimaldevs.tech"

function fieldClass(hasError) {
  const base =
    "w-full bg-bg border rounded-button px-4 py-2.5 text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
  return `${base} ${hasError ? "border-red-600" : "border-border focus:border-accent"}`
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const reduced = useReducedMotion()
  const querySubject = searchParams.get("subject")
  const subjects =
    querySubject === "Partnership Inquiry"
      ? [...SUBJECTS, "Partnership Inquiry"]
      : SUBJECTS
  const defaultSubject = subjects.includes(querySubject)
    ? querySubject
    : "Other"

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: defaultSubject,
      message: "",
    },
  })

  useEffect(() => {
    setValue("subject", defaultSubject)
  }, [defaultSubject, setValue])

  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  })

  const onSubmit = async (data) => {
    const endpoint = import.meta.env.VITE_CONTACT_API_ENDPOINT
    if (!endpoint) {
      setSubmitState({
        status: "error",
        message:
          "Form isn't configured yet. Please email us directly at " +
          GENERAL_EMAIL +
          ".",
      })
      return
    }
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        // Keep the existing backend subject vocabulary and four-field contract.
        // The selected category is included in the delivered message.
        body: JSON.stringify({
          ...data,
          subject:
            data.subject === "Partnership Inquiry"
              ? "Partnership Inquiry"
              : data.subject === "Other" ||
                  data.subject === "Platform / Pilot Interest"
                ? "General Question"
                : "Project Quote",
          message: `Inquiry: ${data.subject}\n\n${data.message}`,
        }),
      })
      if (!res.ok) throw new Error("Bad response")
      setSubmitState({ status: "success", message: "" })
      reset()
    } catch {
      setSubmitState({
        status: "error",
        message:
          "Something went wrong sending your message. Please try again, or email " +
          GENERAL_EMAIL +
          " directly.",
      })
    }
  }

  return (
    <>
      <PageMeta
        title="Contact"
        description="Talk to OptimalDevs about software, data and analytics, automation, websites, or interest in the platform currently in development."
      />
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionTitle
            as="h1"
            eyebrow="Contact"
            title="Let's solve something useful."
            subtitle="Tell us what you're working on, where things get stuck, or what you'd like to build. Software, data, automation, websites, or platform pilot interest: it starts with a conversation."
            align="center"
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {submitState.status === "success" ? (
              <motion.div
                role="status"
                aria-live="polite"
                key="success"
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
                className="bg-surface border border-accent/30 rounded-lg p-8 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-accent-light text-accent flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="mt-5 font-display font-medium text-[1.5rem] text-ink leading-tight">
                  Message sent.
                </h2>
                <p className="mt-3 text-muted">
                  Thanks for reaching out. We'll review your message and reply
                  by email.
                </p>
                <div className="mt-6">
                  <Button
                    variant="ghost"
                    onClick={() =>
                      setSubmitState({ status: "idle", message: "" })
                    }
                  >
                    Send another message
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
                className="bg-surface border border-border rounded-lg p-6 md:p-8"
              >
                <form
                  className="space-y-5"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-busy={isSubmitting}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block label text-ink/80 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={fieldClass(!!errors.name)}
                      {...register("name", {
                        required: "Your name is required.",
                      })}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 text-sm text-red-700"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block label text-ink/80 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={fieldClass(!!errors.email)}
                      {...register("email", {
                        required: "An email so we can reply.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "That doesn't look like a valid email.",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-sm text-red-700"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block label text-ink/80 mb-1.5"
                    >
                      What can we help with?
                    </label>
                    <select
                      id="subject"
                      className={fieldClass(false)}
                      {...register("subject")}
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block label text-ink/80 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      className={fieldClass(!!errors.message)}
                      {...register("message", {
                        required:
                          "Tell us a bit about what you're looking for.",
                        minLength: {
                          value: 10,
                          message:
                            "A few more words please, at least 10 characters.",
                        },
                      })}
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-1.5 text-sm text-red-700"
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitState.status === "error" && (
                    <p role="alert" className="text-sm text-red-700">
                      {submitState.message}
                    </p>
                  )}

                  <div>
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted">
                    We'll use your details to respond to your inquiry.{" "}
                    <Link
                      to="/privacy"
                      className="text-accent underline underline-offset-4"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
            <a
              href={`mailto:${GENERAL_EMAIL}`}
              className="inline-flex items-center gap-2 text-ink/80 hover:text-accent transition-colors"
            >
              <Mail size={16} />
              {GENERAL_EMAIL}
            </a>
            <p className="text-muted">Prefer email? Reach us directly.</p>
          </div>
        </div>
      </section>
    </>
  )
}

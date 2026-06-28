import { useState } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, Mail } from "lucide-react"
import { SectionTitle } from "../components/ui/SectionTitle.jsx"
import { Button } from "../components/ui/Button.jsx"
import { PageMeta } from "../components/ui/PageMeta.jsx"
import { useReducedMotion } from "../hooks/useReducedMotion.js"

const SUBJECTS = [
  "Partnership Inquiry",
  "General Question",
  "Project Quote",
  "Other",
]

const GENERAL_EMAIL = "hello@optimaldevs.com"

function fieldClass(hasError) {
  const base =
    "w-full bg-bg border rounded-button px-4 py-2.5 text-ink placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors"
  return `${base} ${hasError ? "border-red-500" : "border-border focus:border-accent"}`
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const reduced = useReducedMotion()
  const querySubject = searchParams.get("subject")
  const defaultSubject = SUBJECTS.includes(querySubject) ? querySubject : SUBJECTS[1]

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: defaultSubject,
      message: "",
    },
  })

  const [submitState, setSubmitState] = useState({ status: "idle", message: "" })

  const onSubmit = async (data) => {
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
    if (!endpoint) {
      setSubmitState({
        status: "error",
        message:
          "Form isn't configured yet. Please email us directly at " +
          GENERAL_EMAIL + ".",
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
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Bad response")
      setSubmitState({ status: "success", message: "" })
      reset()
    } catch {
      setSubmitState({
        status: "error",
        message:
          "Something went wrong sending your message. Please try again, or email " +
          GENERAL_EMAIL + " directly.",
      })
    }
  }

  return (
    <>
      <PageMeta
        title="Contact"
        description="Get in touch with the OptimalDevs team — partnership inquiries, project quotes, or general questions."
      />
      <section className="pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionTitle
            eyebrow="Contact"
            title="Let's talk."
            subtitle="Whether you're interested in a partnership or just have questions — we're easy to reach."
            align="center"
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {submitState.status === "success" ? (
              <motion.div
                key="success"
                initial={reduced ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
                className="bg-surface border border-accent/30 rounded-lg p-8 text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-accent-light text-accent flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="mt-5 font-display font-medium text-[1.5rem] text-ink leading-tight">
                  Message sent.
                </h3>
                <p className="mt-3 text-muted">
                  Thanks for reaching out — we'll get back to you within 1–2
                  business days.
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
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block label text-ink/80 mb-1.5">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className={fieldClass(!!errors.name)}
                      {...register("name", { required: "Your name is required." })}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block label text-ink/80 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
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
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block label text-ink/80 mb-1.5">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className={fieldClass(false)}
                      {...register("subject")}
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block label text-ink/80 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className={fieldClass(!!errors.message)}
                      {...register("message", {
                        required: "Tell us a bit about what you're looking for.",
                        minLength: {
                          value: 10,
                          message: "A few more words please — at least 10 characters.",
                        },
                      })}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {submitState.status === "error" && (
                    <p className="text-sm text-red-600">{submitState.message}</p>
                  )}

                  <div>
                    <Button
                      variant="primary"
                      onClick={handleSubmit(onSubmit)}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending…" : "Send Message"}
                    </Button>
                  </div>
                </div>
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
            <p className="text-muted">
              We typically respond within 1–2 business days.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

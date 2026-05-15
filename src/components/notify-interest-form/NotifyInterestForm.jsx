// src/components/notify-interest-form/NotifyInterestForm.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const initialFormValues = {
  fullName: "",
  emailAddress: "",
  commentText: "",
};

const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SECTION_IMAGE_SRC = "/images/form-img.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export const NotifyInterestForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousFormValues) => ({
      ...previousFormValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus("submitting");
    setSubmissionMessage("");

    const trimmedName = formValues.fullName.trim();
    const normalizedEmail = formValues.emailAddress.trim().toLowerCase();
    const trimmedComment = formValues.commentText.trim();

    if (!trimmedName || !normalizedEmail || !trimmedComment) {
      setSubmissionStatus("error");
      setSubmissionMessage("All fields are required.");
      return;
    }

    if (!emailValidationPattern.test(normalizedEmail)) {
      setSubmissionStatus("error");
      setSubmissionMessage("Please enter a valid email address.");
      return;
    }

    try {
      const apiResponse = await fetch("/api/interest-signups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: trimmedName,
          emailAddress: normalizedEmail,
          commentText: trimmedComment,
        }),
      });

      const responsePayload = await apiResponse.json();

      if (!apiResponse.ok) {
        throw new Error(responsePayload.message || "Failed to submit.");
      }

      setSubmissionStatus("success");
      setSubmissionMessage("You're in. We'll reach out when Nymify launches.");
      setFormValues(initialFormValues);
    } catch (submissionError) {
      setSubmissionStatus("error");
      setSubmissionMessage(submissionError.message || "Failed to submit.");
    }
  };

  return (
    <section id="waitlist" className="relative overflow-hidden bg-galactic-background py-20 md:py-28">
      {/* Background orbs matching IntroSection pattern */}
      <div className="pointer-events-none absolute -left-64 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-64 bottom-1/4 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_2fr]">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-2xl"
          >
            {SECTION_IMAGE_SRC ? (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-galactic-background/70 via-transparent to-transparent z-10" />
                <img
                  src={SECTION_IMAGE_SRC}
                  alt="Nymify waitlist visual"
                  className="h-[420px] w-full object-cover lg:h-full lg:min-h-[520px]"
                />
              </>
            ) : (
              <div className="flex h-[420px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gray-700 bg-gray-900/40 lg:min-h-[520px]">
                <svg className="h-10 w-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-600">
                  Add your image to{" "}
                  <code className="rounded bg-gray-800 px-1.5 py-0.5 text-xs text-gray-400">
                    public/images/waitlist-visual.jpg
                  </code>
                </p>
              </div>
            )}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-purple-500/20" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-galactic-secondary/20" />
          </motion.div>

          {/* Form column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-galactic-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-galactic-accent" />
              </span>
              <span className="text-sm font-medium tracking-wide text-gray-400">
                App launching soon
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-black leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
            >
              Be the first to know.{" "}
              <span className="bg-gradient-to-r from-galactic-accent via-galactic-secondary to-galactic-softCyanGreen bg-clip-text text-transparent">
                Join the waitlist.
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="max-w-lg text-base leading-relaxed text-gray-400">
              Leave your details and share what you think. We will notify you the moment
              Nymify goes live and use your feedback to shape what we build next.
            </motion.p>

            {/* Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="group flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-3 transition-all focus-within:border-galactic-accent/60 focus-within:bg-gray-900/80 hover:border-gray-700">
                <FiUser className="h-4 w-4 shrink-0 text-gray-500 group-focus-within:text-galactic-accent" />
                <input
                  name="fullName"
                  type="text"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  maxLength={120}
                  className="w-full bg-transparent text-sm text-galactic-text placeholder:text-gray-600 focus:outline-none"
                />
              </div>

              <div className="group flex items-center gap-3 rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-3 transition-all focus-within:border-galactic-accent/60 focus-within:bg-gray-900/80 hover:border-gray-700">
                <FiMail className="h-4 w-4 shrink-0 text-gray-500 group-focus-within:text-galactic-accent" />
                <input
                  name="emailAddress"
                  type="email"
                  value={formValues.emailAddress}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  className="w-full bg-transparent text-sm text-galactic-text placeholder:text-gray-600 focus:outline-none"
                />
              </div>

              <div className="group flex gap-3 rounded-lg border border-gray-800 bg-gray-900/60 px-4 py-3 transition-all focus-within:border-galactic-accent/60 focus-within:bg-gray-900/80 hover:border-gray-700">
                <FiMessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-gray-500 group-focus-within:text-galactic-accent" />
                <textarea
                  name="commentText"
                  value={formValues.commentText}
                  onChange={handleInputChange}
                  placeholder="What do you think about this product?"
                  required
                  rows={4}
                  maxLength={2000}
                  className="w-full resize-none bg-transparent text-sm text-galactic-text placeholder:text-gray-600 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="group inline-flex items-center gap-2 rounded-lg bg-galactic-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-galactic-lightElectricPurple disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FiSend className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {submissionStatus === "submitting" ? "Submitting..." : "Send Feedback"}
                </button>
                <p className="text-xs text-gray-600">
                  No spam. Launch notifications only.
                </p>
              </div>

              {submissionStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-galactic-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-galactic-secondary" />
                  {submissionMessage}
                </motion.p>
              )}

              {submissionStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-sm text-red-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  {submissionMessage}
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-foreground">Send us a Message</h2>

      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">Thank you! We'll get back to you soon.</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="+977-9800000000"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Interested Country *</label>
          <select
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="">Select a country</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
          <textarea
            required
            rows={5}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Tell us about your education goals..."
          ></textarea>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  )
}

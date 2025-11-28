import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<"success" | "error" | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  // ----------------------
  // Validation Function
  // ----------------------
  const validate = () => {
    let newErrors = {
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    };

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.country.trim())
      newErrors.country = "Please select a country.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);

    return Object.values(newErrors).every((v) => v === "");
  };

  // ----------------------
  // Submit Handler
  // ----------------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitted(null);

    try {
      await emailjs.send(
        "service_fr490ra",
        "polar-contact-template",
        {
          title: `New Contact Form Submission from ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          country: formData.country,
          message: formData.message,
        },
        "Xv5-6PRSMy_204b8Z"
      );

      setSubmitted("success");

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitted("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-foreground">
        Send us a Message
      </h2>

      {submitted === "success" && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
          Thank you! We'll get back to you soon.
        </div>
      )}
      {submitted === "error" && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
          Oops! Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Phone *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="+977-9800000000"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Interested Country *
          </label>
          <select
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          >
            <option value="">Select a country</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="uk">United Kingdom</option>
          </select>
          {errors.country && (
            <p className="text-red-600 text-sm mt-1">{errors.country}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Message *
          </label>
          <textarea
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            placeholder="Tell us about your education goals..."
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
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
  );
}

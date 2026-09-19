import React, { useState } from "react";

function EyeMark() {
  return <span className="inline-block w-2 h-2 rounded-full bg-accent" />;
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: "Studio Contact Form",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-14 pb-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20">
        {/* Info */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-medium text-charcoal leading-tight tracking-tight mb-2">
            {"Let's make"}
            <br />
            {"something."}
          </h1>
          <p className="font-persian text-2xl text-warm-fg mb-12">
            بیایید چیزی بسازیم.
          </p>

          <div className="space-y-7">
            {[
              {
                label: "Email",
                value: "hello@did.studio",
                href: "mailto:hello@did.studio",
              },
              { label: "Instagram", value: "@did.studio", href: "#" },
              { label: "Telegram", value: "@didstudio", href: "#" },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <p className="text-[10px] text-warm-fg uppercase tracking-widest mb-1.5">
                  {label}
                </p>
                <a
                  href={href}
                  className="text-[15px] text-charcoal hover:text-accent transition-colors"
                >
                  {value}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-warm-border">
            <p className="text-[13px] text-warm-fg leading-relaxed">
              We usually respond within two business days. For new project
              inquiries, a few words about what you are working on helps us
              respond better.
            </p>
            <p className="font-persian text-[12px] text-warm-fg leading-relaxed mt-2.5">
              معمولاً در طول دو روز کاری پاسخ می‌دهیم.
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-4">
                <EyeMark />
                <span className="text-accent text-[12px] uppercase tracking-widest">
                  Sent
                </span>
              </div>
              <p className="text-xl font-medium text-charcoal mb-2">
                Thank you.
              </p>
              <p className="text-warm-fg text-[14px] leading-relaxed">
                We received your message and will get back to you soon.
              </p>
              <p className="font-persian text-[13px] text-warm-fg mt-2">
                پیام شما دریافت شد.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {[
                {
                  label: "Name",
                  name: "name",
                  type: "text",
                  placeholder: "Your name",
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "your@email.com",
                },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-[10px] text-warm-fg uppercase tracking-widest mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    value={form[name as "name" | "email"]}
                    onChange={(e) =>
                      setForm({ ...form, [name]: e.target.value })
                    }
                    required
                    disabled={loading}
                    className="w-full border-b border-warm-border bg-transparent py-2.5 text-[14px] text-charcoal focus:outline-none focus:border-charcoal transition-colors placeholder:text-warm-fg/40 disabled:opacity-50"
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="block text-[10px] text-warm-fg uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full border-b border-warm-border bg-transparent py-2.5 text-[14px] text-charcoal focus:outline-none focus:border-charcoal transition-colors placeholder:text-warm-fg/40 resize-none disabled:opacity-50"
                  placeholder="Tell us about your project..."
                />
              </div>

              {error && (
                <p className="text-xs text-red-500 font-persian">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="text-[12px] font-medium text-charcoal border border-charcoal px-6 py-2.5 hover:bg-charcoal hover:text-warm-white transition-colors cursor-pointer uppercase tracking-widest disabled:opacity-50"
              >
                {loading ? "ارسال..." : "→ ارسال"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

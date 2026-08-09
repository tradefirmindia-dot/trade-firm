"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const fundOptions = [
  "Below ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "Above ₹5,00,000",
];

const segmentOptions = [
  "Option Trading",
  "Futures Trading",
  "Futures & Options",
  "Stock Trading",
  "Index Research",
  "Intraday Trading",
  "Swing Trading",
  "IPO Research",
  "All Segments",
];

export default function LeadForm({ compact = false }) {
  const initialForm = useMemo(
    () => ({
      name: "",
      phone: "",
      fund: fundOptions[0],
      segment: segmentOptions[0],
      preferredTime: "10:00 AM - 12:00 PM",
      consent: false,
      company: "",
      startedAt: Date.now(),
    }),
    []
  );

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  function change(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("");
    setStatusType("");

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setStatus("Please enter a valid 10-digit Indian mobile number.");
      setStatusType("error");
      return;
    }

    if (!form.consent) {
      setStatus("Please accept the contact consent checkbox.");
      setStatusType("error");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = await response.json();

      if (!response.ok) throw new Error(body.error || "Submission failed.");

      setStatus("Request received. The Trade Firm team will contact you shortly.");
      setStatusType("success");
      setForm({ ...initialForm, startedAt: Date.now() });
    } catch (error) {
      setStatus(error.message || "Could not submit right now. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={`lead-card ${compact ? "compact" : ""}`} onSubmit={submit}>
      <input className="website-field" name="company" value={form.company} onChange={change} tabIndex="-1" autoComplete="off" aria-hidden="true" />

      <div className="form-heading">
        <div>
          <span className="form-kicker">RESEARCH SERVICE ENQUIRY</span>
          <h3>Get research service details.</h3>
          <p>Select your market segment and preferred callback time. Our team will explain the research service, process and risk framework.</p>
        </div>
        <div className="form-shield"><ShieldCheck size={20} /></div>
      </div>

      <div className="form-grid">
        <label className="full-field">Full name<input name="name" value={form.name} onChange={change} placeholder="Enter your name" autoComplete="name" required /></label>
        <label>
          Mobile number
          <div className="phone-field"><span>+91</span><input name="phone" inputMode="numeric" maxLength="10" value={form.phone} onChange={change} placeholder="10-digit number" autoComplete="tel" required /></div>
        </label>
        <label>Available fund<select name="fund" value={form.fund} onChange={change}>{fundOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>Market segment<select name="segment" value={form.segment} onChange={change}>{segmentOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label>
          Preferred callback
          <select name="preferredTime" value={form.preferredTime} onChange={change}>
            <option>10:00 AM - 12:00 PM</option><option>12:00 PM - 03:30 PM</option><option>04:00 PM - 07:00 PM</option>
          </select>
        </label>
      </div>

      <label className="consent"><input type="checkbox" name="consent" checked={form.consent} onChange={change} /><span>I agree to be contacted by Trade Firm through call or WhatsApp regarding this enquiry.</span></label>
      <button className="submit-btn" disabled={loading}><span>{loading ? "Sending request..." : "Request a call"}</span><ArrowRight size={18} /></button>
      <div className="privacy-line"><Check size={13} /> Consent recorded for call or WhatsApp follow-up.</div>
      {status && <div className={`form-status ${statusType}`}>{status}</div>}
    </form>
  );
}

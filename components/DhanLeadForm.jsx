"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import styles from "../app/forex-broker-india/page.module.css";

const initialForm = () => ({
  name: "",
  phone: "",
  email: "",
  experience: "",
  segment: "Stock Trading",
  fund: "Exploring",
  preferredTime: "10:00 AM - 12:00 PM",
  consent: false,
  company: "",
  startedAt: Date.now(),
});

export default function DhanLeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  function change(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("");
    setStatusType("");

    const phone = form.phone.replace(/\D/g, "").slice(-10);

    if (!/^[6-9]\d{9}$/.test(phone)) {
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
        body: JSON.stringify({
          ...form,
          phone,
          source: "TRADE FIRM DHAN",
        }),
      });
      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(body.error || "The request could not be submitted right now.");
      }

      setStatus("Request received. Your details are now available in the TRADE FIRM CRM, and our desk will contact you during the selected callback window.");
      setStatusType("success");
      window.gtag?.("event", "generate_lead", {
        lead_source: "trade_firm_dhan",
        service_interest: form.segment,
        transport_type: "beacon",
      });
      setForm(initialForm());
    } catch (error) {
      setStatus(error.message || "The CRM connection is temporarily unavailable. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.leadForm} onSubmit={submit}>
      <input
        className={styles.websiteField}
        name="company"
        value={form.company}
        onChange={change}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles.formHeading}>
        <div>
          <span>DIRECT CRM ENQUIRY</span>
          <h3>Request guided Dhan account setup.</h3>
          <p>Share your preferences once. The enquiry goes directly to the TRADE FIRM CRM—no WhatsApp redirect is required.</p>
        </div>
        <div className={styles.formShield}><ShieldCheck size={21} /></div>
      </div>

      <div className={styles.formGrid}>
        <label>
          Full name
          <input name="name" value={form.name} onChange={change} placeholder="Enter your name" autoComplete="name" required />
        </label>
        <label>
          Mobile / WhatsApp
          <div className={styles.phoneField}>
            <span>+91</span>
            <input name="phone" inputMode="numeric" maxLength="14" value={form.phone} onChange={change} placeholder="10-digit number" autoComplete="tel" required />
          </div>
        </label>
        <label className={styles.fullField}>
          Email address
          <input name="email" type="email" value={form.email} onChange={change} placeholder="you@example.com" autoComplete="email" required />
        </label>
        <label>
          Trading experience
          <select name="experience" value={form.experience} onChange={change} required>
            <option value="" disabled>Select experience</option>
            <option>New to markets</option>
            <option>Under 1 year</option>
            <option>1–3 years</option>
            <option>3+ years</option>
          </select>
        </label>
        <label>
          Preferred market
          <select name="segment" value={form.segment} onChange={change}>
            <option>Stock Trading</option>
            <option>Futures &amp; Options</option>
            <option>Intraday Trading</option>
            <option>Swing Trading</option>
            <option>IPO Research</option>
            <option>All Segments</option>
          </select>
        </label>
        <label>
          Planned starting capital
          <select name="fund" value={form.fund} onChange={change}>
            <option>Exploring</option>
            <option>Under ₹25,000</option>
            <option>₹25,000–₹1,00,000</option>
            <option>₹1,00,000+</option>
          </select>
        </label>
        <label>
          Preferred callback
          <select name="preferredTime" value={form.preferredTime} onChange={change}>
            <option>10:00 AM - 12:00 PM</option>
            <option>12:00 PM - 03:30 PM</option>
            <option>04:00 PM - 07:00 PM</option>
          </select>
        </label>
      </div>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" checked={form.consent} onChange={change} />
        <span>I agree to be contacted by TRADE FIRM through call, email or WhatsApp about Dhan account setup and Indian market research support.</span>
      </label>

      <button className={styles.submitButton} disabled={loading}>
        <span>{loading ? "Sending securely to CRM..." : "Request Dhan setup callback"}</span>
        <ArrowRight size={18} />
      </button>

      <div className={styles.privacyLine}><CheckCircle2 size={14} /> Consent recorded. Details are sent directly to TRADE FIRM CRM.</div>
      {status && <div className={`${styles.formStatus} ${statusType === "success" ? styles.success : styles.error}`} role={statusType === "error" ? "alert" : "status"}>{status}</div>}
    </form>
  );
}

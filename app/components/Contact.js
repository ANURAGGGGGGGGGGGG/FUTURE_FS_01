"use client";

import { useState, useRef } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const isSubmitting = useRef(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting.current) return; // guard against double submit
    isSubmitting.current = true;
    setStatus({ state: 'loading', message: 'Sending...' });

    const formEl = e.currentTarget; // keep reference before awaits
    const form = new FormData(formEl);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');
      const data = isJson ? await res.json().catch(() => null) : null;

      if (res.ok) {
        console.log('Contact form success:', { status: res.status, ok: res.ok });
        setStatus({ state: 'success', message: 'Thanks! I will get back to you soon.' });
        formEl && formEl.reset();
      } else {
        const errorMsg = (data && data.error) || 'Something went wrong. Please try again later.';
        console.error('Contact form error:', { status: res.status, ok: res.ok, error: errorMsg });
        setStatus({ state: 'error', message: errorMsg });
      }
    } catch (err) {
      console.error('Contact form exception:', err);
      setStatus({ state: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      isSubmitting.current = false;
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Have a question or want to work together? Send me a message.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"/>
            <input name="email" type="email" required placeholder="Your email" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"/>
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"/>
          <textarea name="message" required rows={6} placeholder="Your message" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"/>
          <button type="submit" disabled={status.state==='loading'} className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-60">
            {status.state==='loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status.message && (
            <p className={`text-sm ${status.state==='success' ? 'text-green-600' : status.state==='error' ? 'text-red-600' : 'text-gray-600'}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
}
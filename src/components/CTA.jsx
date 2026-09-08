import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import { useReveal } from '../hooks/useReveal.js';

const FORMSPREE_ACTION = 'https://formspree.io/f/mqerbpoo';

export default function CTA() {
  const { t } = useLanguage();
  const [ref, inView] = useReveal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORMSPREE_ACTION || FORMSPREE_ACTION.includes('YOUR_FORM_ID')) {
      const subject = `Portfolio contact from ${name}`;
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:JeehanAB@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setNote(t('form_not_configured'));
      setName(''); setEmail(''); setMessage('');
      return;
    }

    setSending(true);
    setNote(t('form_sending'));

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('_subject', 'New message from your portfolio site');

      const response = await fetch(FORMSPREE_ACTION, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        setNote(t('form_success'));
        setName(''); setEmail(''); setMessage('');
      } else {
        setNote(t('form_error'));
      }
    } catch {
      setNote(t('form_network_error'));
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="cta-band" id="contact">
      <div className={`container cta-inner ${inView ? 'in-view' : ''}`} ref={ref}>
        <div className="cta-col-left">
          <p className="cta-signoff">{t('cta_signoff')}</p>
          <h3>{t('cta_title')}</h3>
          <p className="cta-copy">{t('cta_copy')}</p>
          <div className="cta-contact-info">
            <span>{t('cta_email')}</span>
            <span>{t('cta_phone')}</span>
            <span>{t('cta_location')}</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text" placeholder={t('form_name')} required
            value={name} onChange={e => setName(e.target.value)}
          />
          <input
            type="email" placeholder={t('form_email')} required
            value={email} onChange={e => setEmail(e.target.value)}
          />
          <textarea
            rows="4" placeholder={t('form_message')} required
            value={message} onChange={e => setMessage(e.target.value)}
          />
          <button type="submit" className="btn btn-light" disabled={sending}>{t('form_send')}</button>
          <p className="form-note">{note}</p>
        </form>
      </div>
    </section>
  );
}

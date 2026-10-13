import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LuCheck, LuCircleAlert, LuLoader, LuSend } from 'react-icons/lu'
import { profile } from '../data'

const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`
const empty = { name: '', email: '', subject: '', message: '', _honey: '' }

const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Indiquez votre nom (2 caractères min.)'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Adresse e-mail invalide'
  if (v.subject.trim().length < 3) e.subject = "Précisez l'objet de votre message"
  if (v.message.trim().length < 10) e.message = 'Votre message est trop court (10 caractères min.)'
  return e
}

function Field({ label, name, error, children }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} id={`${name}-error`} className="mt-1.5 flex items-center gap-1.5 overflow-hidden text-xs text-red-500">
            <LuCircleAlert /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputCls = (err) =>
  `w-full rounded-xl border bg-bg2/60 px-4 py-3 text-sm outline-none transition placeholder:text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/15 ${err ? 'border-red-500/70' : 'border-line'}`

/** Formulaire de contact : au clic sur « Envoyer », un e-mail est transmis à profile.email */
export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (values._honey) return // anti-spam : un robot a rempli le champ caché
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return

    setStatus('sending')
    setErrorMsg('')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          _subject: `[Portfolio] ${values.subject} — ${values.name}`,
          _replyto: values.email,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || "L'envoi a échoué")
      }
      setStatus('success')
      setValues(empty)
    } catch (err) {
      setErrorMsg(err.message || "Impossible d'envoyer le message")
      setStatus('error')
    }
  }

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject || 'Contact depuis le portfolio')}&body=${encodeURIComponent(values.message)}`

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div key="ok" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex min-h-[28rem] flex-col items-center justify-center text-center" role="status">
            <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }} className="grid size-20 place-items-center rounded-full bg-emerald-500 text-4xl text-white shadow-xl shadow-emerald-500/30">
              <LuCheck />
            </motion.div>
            <h3 className="mt-6 font-display text-3xl font-bold">Message envoyé !</h3>
            <p className="mt-3 max-w-sm text-muted">Merci, je reviens vers vous très rapidement à l'adresse que vous avez indiquée.</p>
            <button onClick={() => setStatus('idle')} className="mt-8 rounded-full border border-line px-6 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent">
              Envoyer un autre message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5" aria-busy={status === 'sending'}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom complet" name="name" error={errors.name}>
                <input id="name" name="name" value={values.name} onChange={onChange} autoComplete="name" placeholder="Jean Dupont" aria-invalid={!!errors.name} aria-describedby="name-error" className={inputCls(errors.name)} />
              </Field>
              <Field label="Adresse e-mail" name="email" error={errors.email}>
                <input id="email" name="email" type="email" value={values.email} onChange={onChange} autoComplete="email" placeholder="vous@exemple.com" aria-invalid={!!errors.email} aria-describedby="email-error" className={inputCls(errors.email)} />
              </Field>
            </div>
            <Field label="Objet" name="subject" error={errors.subject}>
              <input id="subject" name="subject" value={values.subject} onChange={onChange} placeholder="Création d'un site vitrine" aria-invalid={!!errors.subject} aria-describedby="subject-error" className={inputCls(errors.subject)} />
            </Field>
            <Field label="Message" name="message" error={errors.message}>
              <textarea id="message" name="message" rows={6} value={values.message} onChange={onChange} placeholder="Parlez-moi de votre projet…" aria-invalid={!!errors.message} aria-describedby="message-error" className={`${inputCls(errors.message)} resize-none`} />
            </Field>

            {/* Champ piège anti-spam (invisible pour les humains) */}
            <input type="text" name="_honey" value={values._honey} onChange={onChange} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

            <AnimatePresence>
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm">
                  <p className="flex items-center gap-2 font-semibold text-red-500"><LuCircleAlert /> {errorMsg}</p>
                  <p className="mt-1 text-muted">
                    Vous pouvez réessayer ou <a href={mailtoHref} className="font-semibold text-accent underline underline-offset-2">envoyer l'e-mail depuis votre messagerie</a>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="submit" disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-brand px-8 py-4 font-semibold text-white shadow-lg shadow-violet-500/25 disabled:opacity-80 sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              {status === 'sending' ? (<><LuLoader className="animate-spin" /> Envoi en cours…</>) : (<>Envoyer le message <LuSend className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" /></>)}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

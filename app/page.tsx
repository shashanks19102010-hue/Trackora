import type { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import {
  Activity,
  Bell,
  Bot,
  Database,
  Gauge,
  Check,
  Fingerprint,
  Github,
  Globe2,
  KeyRound,
  Layers3,
  Lock,
  Mail,
  Map,
  MapPin,
  MessageSquareText,
  Phone,
  Radar,
  Radio,
  Route,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  Wifi,
  Zap,
} from 'lucide-react'

const features: Array<[string, string, LucideIcon]> = [
  ['Consent-first live tracking', 'Browser geolocation, accuracy rings, last seen, speed, battery and network signals only after explicit user permission.', MapPin],
  ['Phone number login', 'OTP-ready phone sign-in for fast mobile access, protected by rate limits, bot checks, device trust and suspicious-login alerts.', Phone],
  ['Security command center', 'JWT-ready architecture, secure headers, trusted devices, suspicious login alerts, lockouts and privacy controls.', ShieldCheck],
  ['ORI AI companion', 'Friendly troubleshooting for permissions, missing location, offline devices, setup flows, summaries and safe confirmation steps.', Bot],
  ['Premium dashboard', 'Tesla-clean device cards, activity timeline, live map preview, filters, quick actions and glowing realtime status states.', Activity],
  ['Self-healing UX', 'Retries, reconnect states, diagnostics, graceful fallback UI and health checks designed for resilient production deployments.', Zap],
]

const authMethods: Array<[string, string, LucideIcon]> = [
  ['Phone OTP', 'Passwordless mobile login with expiring one-time codes, resend cooldowns and lockouts after repeated failures.', Phone],
  ['Email password', 'Classic sign-in with verification, password reset, remember-me sessions and secure cookie deployment path.', Mail],
  ['Google + GitHub', 'OAuth-ready provider cards for trusted social login and fast portfolio demo onboarding.', Github],
  ['Passkeys + 2FA', 'Future-proof step-up security with authenticator apps, trusted devices and recovery codes.', Fingerprint],
]

const trackingWays: Array<[string, string, LucideIcon, string]> = [
  ['Live pulse', 'Real-time permission-based GPS coordinates with accuracy, speed, heading and last-seen timestamp.', Radar, 'Realtime'],
  ['Route replay', 'Daily route history with distance travelled, stops, timeline events and export-ready summaries.', Route, 'History'],
  ['Safe zones', 'Geofence-ready alerts when a shared device enters or leaves approved areas.', ShieldAlert, 'Alerts'],
  ['Offline recovery', 'Connection diagnostics, retry queue, stale-location warning and reconnect guidance from ORI.', Wifi, 'Resilience'],
  ['Map layers', 'OpenStreetMap-ready UI for streets, satellite-style premium cards and privacy heatmaps.', Layers3, 'Layers'],
  ['Trip reports', 'Weekly analytics for device uptime, movement patterns, battery lows and login history.', Map, 'Reports'],
]


const powerUps: Array<[string, string, LucideIcon]> = [
  ['Quantum alerts', 'Beautiful realtime notification states for login, low battery, new device, safe-zone, offline and recovery events.', Bell],
  ['Health telemetry', 'Developer-ready health surfaces for API latency, map status, auth uptime, retry volume and deployment safety.', Gauge],
  ['Encrypted vault', 'Future database layer guidance for encrypted location records, export flows, retention windows and account deletion.', Database],
  ['Signal boost', 'Connectivity intelligence for weak GPS, stale data, no internet, background sync and graceful fallback screens.', Radio],
]

const securityStack = [
  'Input validation with Zod-ready forms',
  'CSRF, XSS and injection protection guidance',
  'Secure headers and HTTPS-only production policy',
  'Device fingerprinting for security alerts only',
  'IP monitoring and impossible-travel detection',
  'Encrypted secrets through environment variables',
  'Audit logs without sensitive location leakage',
  'Delete account and export data privacy controls',
]

const plans: Array<[string, string, string, string[]]> = [
  ['Starter', '$0', 'Personal device safety', ['1 active device', 'Phone OTP login', 'Live permission status', 'ORI setup guide']],
  ['Guardian', '$12', 'Families and teams', ['10 shared devices', 'Route history', 'Safe-zone alerts', 'Weekly reports']],
  ['Command', '$29', 'Power users', ['Unlimited dashboards', 'Advanced analytics', 'API keys future', 'Priority recovery']],
]

const faq: Array<[string, string]> = [
  ['Can TRACKORA track anyone secretly?', 'No. The product is designed for your own devices or devices shared with clear permission. Access checks and consent UX are core requirements.'],
  ['How does phone login stay safe?', 'Phone OTP should be paired with resend throttles, bot checks, abuse monitoring, account lockouts and optional 2FA/passkeys for high-risk sessions.'],
  ['Does ORI change security settings automatically?', 'No. ORI can explain, diagnose and suggest safe fixes, but sensitive actions require user confirmation.'],
  ['Is this production ready?', 'This repository contains a polished frontend foundation with security headers and privacy-first copy. Backend auth, database and provider secrets still need environment configuration.'],
]

function Pill({ children }: { children?: React.ReactNode }) {
  return <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">{children}</span>
}

export default function Home() {
  return <main className="relative min-h-screen overflow-hidden grid-bg">
    <nav className="sticky top-0 z-40 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 backdrop-blur-xl">
      <a href="#top" className="flex items-center gap-3"><Image src="/trackora-logo.svg" alt="TRACKORA logo" width={44} height={44} className="rounded-xl"/><span className="text-xl font-black tracking-[.35em]">TRACKORA</span></a>
      <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex"><a href="#features">Features</a><a href="#auth">Login</a><a href="#tracking">Tracking</a><a href="#dashboard">Dashboard</a><a href="#pricing">Pricing</a></div>
      <a href="#contact" className="rounded-full bg-cyan-300 px-5 py-2 font-bold text-slate-950 shadow-glow">Join beta</a>
    </nav>

    <section id="top" className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div>
        <Pill>Know. Track. Protect. — secure permission-based intelligence</Pill>
        <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-7xl">Phone login, live maps and <span className="aurora-text">AI safety guidance.</span></h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">TRACKORA is a powerful dashboard for securely monitoring devices you own or that are shared with permission. Phone OTP login, live tracking ways, route history, security alerts and ORI work together in a premium glass interface.</p>
        <div className="mt-8 flex flex-wrap gap-4"><a className="rounded-2xl bg-white px-6 py-4 font-bold text-slate-950" href="#dashboard">Explore dashboard</a><a className="rounded-2xl border border-white/15 px-6 py-4 font-bold text-white" href="#auth">View secure login</a></div>
        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 text-center md:grid-cols-4"><Metric n="OTP" l="Phone login"/><Metric n="2FA" l="Step-up security"/><Metric n="GPS" l="Live accuracy"/><Metric n="0" l="Secret tracking"/></div>
      </div>
      <div className="glass neon-ring scanline rounded-[2rem] p-5"><Image src="/ori-mascot.svg" alt="ORI mascot expression board" width={1400} height={1120} priority className="float rounded-[1.5rem]"/></div>
    </section>

    <section id="features" className="mx-auto max-w-7xl px-6 py-16"><Header eyebrow="Platform" title="A stronger TRACKORA foundation with phone login and AI-assisted safety"/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{features.map(([t,d,Icon]) => <article key={t} className="glass rounded-3xl p-6"><Icon className="mb-5 h-8 w-8 text-cyan-300"/><h3 className="text-xl font-bold">{t}</h3><p className="mt-3 text-slate-300">{d}</p></article>)}</div></section>

    <section id="auth" className="mx-auto max-w-7xl px-6 py-16"><Header eyebrow="Authentication" title="Secure login hub for phone, email, OAuth and passkeys"/><div className="mt-10 grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><div className="glass rounded-[2rem] p-6"><div className="hologram rounded-3xl border border-cyan-300/20 p-5"><p className="text-sm uppercase tracking-[.3em] text-cyan-300">Phone verification</p><div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/10 p-4"><Phone className="text-cyan-200"/><span className="text-slate-300">+1 ••• ••• 0147</span></div><div className="mt-4 grid grid-cols-6 gap-2">{['4','8','1','9','2','6'].map(n=><span className="rounded-xl border border-white/10 bg-cyan-300/10 py-3 text-center text-xl font-black" key={n}>{n}</span>)}</div><button className="mt-5 w-full rounded-2xl bg-cyan-300 py-4 font-black text-slate-950">Verify securely</button><p className="mt-4 text-sm text-slate-400">Protected by cooldowns, bot detection, lockouts and device trust checks.</p></div></div><div className="grid gap-5 md:grid-cols-2">{authMethods.map(([title,desc,Icon])=><article key={title} className="glass rounded-3xl p-6"><Icon className="mb-4 h-8 w-8 text-cyan-300"/><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-slate-300">{desc}</p></article>)}</div></div></section>

    <section id="tracking" className="mx-auto max-w-7xl px-6 py-16"><Header eyebrow="Tracking ways" title="Live tracking modes users can understand and control"/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{trackingWays.map(([title,desc,Icon,badge])=><article key={title} className="glass rounded-3xl p-6"><div className="flex items-start justify-between"><Icon className="h-9 w-9 text-cyan-300"/><Pill>{badge}</Pill></div><h3 className="mt-6 text-xl font-bold">{title}</h3><p className="mt-3 text-slate-300">{desc}</p></article>)}</div></section>

    <section id="dashboard" className="mx-auto max-w-7xl px-6 py-16"><Header eyebrow="Live command" title="Dashboard mockup with map, devices, analytics and ORI"/><div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_.65fr]"><div className="glass rounded-[2rem] p-6"><div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-2xl font-bold">Live Map</h3><div className="flex gap-2"><Pill>Consent active</Pill><Pill>GPS ±8m</Pill></div></div><div className="mt-6 h-96 rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_40%_50%,rgba(56,189,248,.32),transparent_8rem),linear-gradient(135deg,rgba(15,23,42,.8),rgba(30,41,59,.45))] p-6"><div className="relative h-full rounded-3xl border border-white/10 bg-[linear-gradient(90deg,rgba(148,163,184,.08)_1px,transparent_1px),linear-gradient(rgba(148,163,184,.08)_1px,transparent_1px)] bg-[length:36px_36px]"><div className="pulse-dot absolute left-[18%] top-[20%] h-3 w-3 rounded-full bg-emerald-300 shadow-glow"/><div className="pulse-dot absolute left-[36%] top-[44%] h-3 w-3 rounded-full bg-cyan-300 shadow-glow"/><div className="pulse-dot absolute left-[57%] top-[56%] h-3 w-3 rounded-full bg-violet-300 shadow-glow"/><div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/60 bg-cyan-300/10 p-8 shadow-glow"><Radar className="h-12 w-12 text-cyan-200"/></div></div></div></div><aside className="space-y-5"><Device name="Aarav iPhone" status="Moving • 45 km/h • 92%"/><Device name="MacBook Pro" status="Online • charging • trusted"/><Device name="Family tablet" status="Offline • retrying • last seen 8m"/><div className="glass rounded-3xl p-5"><div className="flex items-center gap-3"><Bot className="text-cyan-200"/><h4 className="font-bold">ORI says</h4></div><p className="mt-3 text-sm text-slate-300">Location accuracy is strong. One device is offline, so I queued reconnect checks and can guide the user through permissions.</p></div></aside></div></section>

    <section className="mx-auto max-w-7xl px-6 py-16"><Header eyebrow="Power layer" title="Mind-blowing production ideas beyond a normal tracker"/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{powerUps.map(([title,desc,Icon])=><article key={title} className="glass rounded-3xl p-6"><Icon className="mb-5 h-8 w-8 text-cyan-300"/><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-slate-300">{desc}</p></article>)}</div></section>

    <section id="security" className="mx-auto max-w-7xl px-6 py-16"><Header eyebrow="Safety" title="Privacy-by-design and secure defaults"/><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{securityStack.map((s,i)=><div className="glass rounded-3xl p-5" key={s}><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-slate-950 font-black">{i+1}</div><p className="font-semibold">{s}</p></div>)}</div></section>

    <section className="mx-auto max-w-7xl px-6 py-16"><Header eyebrow="ORI intelligence" title="AI help that guides users without silently weakening security"/><div className="mt-10 grid gap-5 md:grid-cols-3"><Ori title="Troubleshoot" text="Explain why location is blocked and show exact browser permission steps." icon={MessageSquareText}/><Ori title="Summarize" text="Turn route, login and battery events into friendly daily activity summaries." icon={TimerReset}/><Ori title="Confirm" text="Ask for approval before changing alerts, privacy controls or trusted devices." icon={ShieldCheck}/></div></section>

    <section id="pricing" className="mx-auto max-w-7xl px-6 py-16"><Header eyebrow="Pricing" title="Simple plans for launch"/><div className="mt-10 grid gap-5 md:grid-cols-3">{plans.map(([name,price,tag,items])=><article key={name} className="glass rounded-3xl p-7"><h3 className="text-2xl font-bold">{name}</h3><p className="mt-2 text-slate-400">{tag}</p><p className="my-6 text-5xl font-black">{price}</p>{items.map(x=><p className="mt-3 flex gap-2" key={x}><Check className="text-emerald-300"/> {x}</p>)}</article>)}</div></section>

    <section id="faq" className="mx-auto max-w-5xl px-6 py-16"><Header eyebrow="FAQ" title="Built for transparent, ethical tracking"/>{faq.map(([q,a])=><details key={q} className="glass mt-4 rounded-2xl p-5"><summary className="cursor-pointer text-lg font-bold">{q}</summary><p className="mt-3 text-slate-300">{a}</p></details>)}</section>

    <footer id="contact" className="mx-auto max-w-7xl px-6 py-12"><div className="glass flex flex-col gap-5 rounded-[2rem] p-8 md:flex-row md:items-center md:justify-between"><div><h2 className="text-3xl font-black">Ready to build TRACKORA?</h2><p className="mt-2 text-slate-300">Next.js, TypeScript, Tailwind, ORI mascot assets, phone-login UX and Vercel-ready configuration.</p></div><div className="flex gap-3"><Lock/><KeyRound/><Github/><Globe2/><Smartphone/><Sparkles/></div></div></footer>
  </main>
}

function Header({eyebrow,title}:{eyebrow:string,title:string}){return <div><p className="font-bold uppercase tracking-[.35em] text-cyan-300">{eyebrow}</p><h2 className="mt-3 max-w-3xl text-4xl font-black md:text-5xl">{title}</h2></div>}
function Metric({n,l}:{n:string,l:string}){return <div className="glass rounded-2xl p-4"><p className="text-2xl font-black text-cyan-200">{n}</p><p className="text-xs text-slate-400">{l}</p></div>}
function Device({name,status}:{name:string,status:string}){return <div className="glass rounded-3xl p-5"><div className="flex items-center gap-4"><div className="rounded-2xl bg-cyan-300/10 p-3"><Smartphone className="text-cyan-200"/></div><div><h4 className="font-bold">{name}</h4><p className="text-sm text-slate-400">{status}</p></div></div></div>}
function Ori({title,text,icon:Icon}:{title:string;text:string;icon:LucideIcon}){return <article className="glass rounded-3xl p-6"><Icon className="mb-5 h-8 w-8 text-cyan-300"/><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-slate-300">{text}</p></article>}

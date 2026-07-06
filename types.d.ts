declare namespace React {
  type ReactNode = unknown
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module '*.css'

declare module 'next' {
  export type Metadata = {
    title?: string
    description?: string
  }
}

declare module 'next/image' {
  const Image: (props: any) => any
  export default Image
}

declare module 'lucide-react' {
  export type LucideIcon = (props: any) => any
  export const Activity: LucideIcon
  export const Bot: LucideIcon
  export const Check: LucideIcon
  export const Fingerprint: LucideIcon
  export const Github: LucideIcon
  export const Globe2: LucideIcon
  export const KeyRound: LucideIcon
  export const Layers3: LucideIcon
  export const Lock: LucideIcon
  export const Mail: LucideIcon
  export const Map: LucideIcon
  export const MapPin: LucideIcon
  export const MessageSquareText: LucideIcon
  export const Phone: LucideIcon
  export const Radar: LucideIcon
  export const Route: LucideIcon
  export const ShieldAlert: LucideIcon
  export const ShieldCheck: LucideIcon
  export const Smartphone: LucideIcon
  export const Sparkles: LucideIcon
  export const TimerReset: LucideIcon
  export const Wifi: LucideIcon
  export const Zap: LucideIcon
  export const Bell: LucideIcon
  export const Database: LucideIcon
  export const Gauge: LucideIcon
  export const Radio: LucideIcon
}

import Link from "next/link";
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  Check,
  Clock3,
  Menu,
  MessageCircleOff,
  Sparkles,
  Users,
} from "lucide-react";

const benefits = [
  {
    title: "Coincidencias automáticas",
    description:
      "JuntOS analiza la disponibilidad del grupo y encuentra los horarios donde más personas coinciden.",
    icon: CalendarCheck,
  },
  {
    title: "Menos mensajes",
    description:
      "Evita conversaciones interminables para descubrir quién puede y en qué momento.",
    icon: MessageCircleOff,
  },
  {
    title: "Alertas inteligentes",
    description:
      "Recibe una notificación cuando se alcanza la cantidad de personas que definió el grupo.",
    icon: BellRing,
  },
  {
    title: "Momento Óptimo",
    description:
      "Identifica rápidamente el mejor horario según la cantidad de participantes y la duración disponible.",
    icon: Sparkles,
  },
];

const availability = [
  { label: "Lun", level: "low" },
  { label: "Mar", level: "medium" },
  { label: "Mié", level: "low" },
  { label: "Jue", level: "high" },
  { label: "Vie", level: "medium" },
];

const availabilityStyles = {
  low: "h-14 bg-brand-100",
  medium: "h-20 bg-brand-300",
  high: "h-28 bg-brand-600",
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <header className="border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="page-container flex min-h-20 items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Ir al inicio de JuntOS"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/20">
              <Users size={22} aria-hidden="true" />
            </span>

            <span className="text-2xl font-black tracking-tight text-slate-900">
              Junt<span className="text-brand-600">OS</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegación principal"
          >
            #como-funciona
              Cómo funciona
            </a>

            #beneficios
              Beneficios
            </a>

            <Link
              href="/login"
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-700"
            >
              Iniciar sesión
            </Link>

            <Link href="/register" className="button-primary">
              Crear cuenta
            </Link>
          </nav>

          <Link
            href="/login"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
            aria-label="Ir a iniciar sesión"
          >
            <Menu size={22} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <section className="relative isolate">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[650px] bg-gradient-to-b from-brand-50 via-white to-white"
          aria-hidden="true"
        />

        <div
          className="absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-100/70 blur-3xl"
          aria-hidden="true"
        />

        <div className="page-container grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
              <Sparkles size={16} aria-hidden="true" />
              Coordinarse puede ser más simple
            </div>

            <h1 className="text-balance text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Descubre cuándo{" "}
              <span className="text-brand-600">coincides</span> con tu gente.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Comparte tu disponibilidad, deja que JuntOS encuentre los mejores
              horarios y reduce los mensajes de coordinación dentro de tus
              grupos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="button-primary gap-2">
                Crear cuenta gratis
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link href="/login" className="button-secondary">
                Iniciar sesión
              </Link>
            </div>

            <ul className="mt-8 flex flex-col gap-3 text-sm font-medium text-slate-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
              <li className="flex items-center gap-2">
                <Check
                  className="text-brand-600"
                  size={18}
                  aria-hidden="true"
                />
                Disponibilidad en bloques de 30 minutos
              </li>

              <li className="flex items-center gap-2">
                <Check
                  className="text-brand-600"
                  size={18}
                  aria-hidden="true"
                />
                Alertas por coincidencias
              </li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div
              className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-200/70 to-emerald-50 blur-2xl"
              aria-hidden="true"
            />

            <div className="card overflow-hidden p-5 sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Grupo Amigos
                  </p>

                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    Próxima coincidencia
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Users size={23} aria-hidden="true" />
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-brand-600 p-6 text-white shadow-lg shadow-brand-600/20">
                <div className="flex items-center gap-2 text-sm 

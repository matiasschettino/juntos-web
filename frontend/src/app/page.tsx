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
] as const;

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
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-100">
                  <Sparkles size={17} aria-hidden="true" />
                  Momento Óptimo
                </div>

                <p className="mt-4 text-3xl font-black">Jueves</p>

                <div className="mt-2 flex items-center gap-2 text-lg font-semibold">
                  <Clock3 size={20} aria-hidden="true" />
                  20:00 a 21:30
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {["M", "L", "S", "A"].map((initial, index) => (
                      <span
                        key={`${initial}-${index}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-xs font-bold text-brand-700"
                      >
                        {initial}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-semibold">8 de 10 disponibles</p>
                </div>
              </div>

              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900">
                    Coincidencia semanal
                  </h3>

                  <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-bold text-brand-700">
                    78%
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-5 items-end gap-3">
                  {availability.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-2"
                    >
                      <div
                        className={`w-full rounded-xl ${
                          availabilityStyles[item.level]
                        }`}
                        aria-hidden="true"
                      />

                      <span className="text-xs font-semibold text-slate-500">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Disponibles ahora
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    4 personas del grupo
                  </p>
                </div>

                <span
                  className="h-3 w-3 rounded-full bg-brand-500 shadow-[0_0_0_6px_rgba(22,184,122,0.15)]"
                  aria-label="Hay personas disponibles"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        className="border-y border-slate-100 bg-slate-50 py-20 sm:py-24"
      >
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">
              Beneficios
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Coordina menos. Coincide más.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Todo lo necesario para encontrar disponibilidad compartida sin
              convertir la coordinación en otra tarea.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 sm:py-24">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-700">
                Cómo funciona
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Tres pasos para encontrar el mejor momento.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                JuntOS se ocupa de comparar horarios. Tu grupo solo tiene que
                indicar su disponibilidad.
              </p>

              <Link
                href="/register"
                className="mt-8 inline-flex items-center gap-2 font-bold text-brand-700 transition-colors hover:text-brand-800"
              >
                Crear mi primer grupo
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <ol className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Crea un grupo",
                  description:
                    "Invita a otras personas mediante un enlace, código o email.",
                },
                {
                  number: "02",
                  title: "Indiquen disponibilidad",
                  description:
                    "Cada integrante marca cuándo puede, tal vez puede o no está disponible.",
                },
                {
                  number: "03",
                  title: "Encuentren coincidencias",
                  description:
                    "JuntOS detecta automáticamente los mejores horarios compartidos.",
                },
              ].map((step) => (
                <li key={step.number} className="card relative p-6">
                  <span className="text-sm font-black text-brand-600">
                    {step.number}
                  </span>

                  <h3 className="mt-8 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="page-container">
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Empieza a descubrir cuándo coincide tu grupo.
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Crea tu cuenta, invita a tu gente y deja que JuntOS encuentre
                el momento indicado.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/register" className="button-primary gap-2">
                  Crear cuenta
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  href="/login"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white transition-colors hover:border-brand-400 hover:text-brand-300"
                >
                  Ya tengo una cuenta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="page-container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <Users size={18} aria-hidden="true" />
            </span>

            <span className="text-lg font-black text-slate-900">
              Junt<span className="text-brand-600">OS</span>
            </span>
          </Link>

          <p className="text-center text-sm text-slate-500">
            JuntOS encuentra coincidencias. La reunión ocurre por fuera.
          </p>
        </div>
      </footer>
    </main>
  );
}

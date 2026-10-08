import Link from "next/link";
import { ArrowRight, CalendarCheck, Users } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="page-container flex min-h-20 items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-3"
            aria-label="Ir al inicio de JuntOS"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white">
              <Users size={22} aria-hidden="true" />
            </span>

            <span className="text-2xl font-black text-slate-900">
              Junt<span className="text-brand-600">OS</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/login" className="button-secondary">
              Iniciar sesión
            </Link>

            <Link href="/register" className="button-primary">
              Crear cuenta
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-brand-50 to-white py-20 sm:py-28">
        <div className="page-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-bold text-brand-700">
              Coordinarse puede ser más simple
            </p>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Descubre cuándo{" "}
              <span className="text-brand-600">coincides</span> con tu gente.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Comparte tu disponibilidad y deja que JuntOS encuentre
              automáticamente los mejores horarios para tu grupo.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="button-primary gap-2">
                Crear cuenta gratis
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link href="/login" className="button-secondary">
                Iniciar sesión
              </Link>
            </div>
          </div>

          <article className="card p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Grupo Amigos
                </p>

                <h2 className="mt-1 text-2xl font-black text-slate-900">
                  Momento Óptimo
                </h2>
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <CalendarCheck size={24} aria-hidden="true" />
              </span>
            </div>

            <div className="mt-6 rounded-3xl bg-brand-600 p-6 text-white">
              <p className="text-sm font-bold text-brand-100">
                Próxima coincidencia
              </p>

              <p className="mt-3 text-3xl font-black">Jueves</p>

              <p className="mt-2 text-lg font-semibold">20:00 a 21:30</p>

              <p className="mt-5 text-sm font-semibold">
                8 de 10 miembros disponibles
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="py-20">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black text-slate-950">
              Coordina menos. Coincide más.
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              JuntOS compara la disponibilidad de cada persona y encuentra
              automáticamente los momentos con mayor coincidencia.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8">
        <div className="page-container text-center text-sm text-slate-500">
          JuntOS encuentra coincidencias. La reunión ocurre por fuera.
        </div>
      </footer>
    </main>
  );
}

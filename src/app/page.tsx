import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col px-6 py-10 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-body)] text-xs font-semibold tracking-[0.22em] text-navy/70 uppercase">
            Texas C&amp;K, LLC
          </p>
          <a
            href="https://www.911poolcare.com"
            className="text-sm font-medium text-navy/80 transition-colors hover:text-flag-red"
          >
            911 Pool Care
          </a>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center py-12 text-center sm:py-16">
          <div className="relative mb-10 w-full max-w-xl sm:mb-12 sm:max-w-2xl">
            <Image
              src="/images/logo-flag.png"
              alt="Texas C&K, LLC — holding company for 911 Pool Care"
              width={960}
              height={480}
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 90vw, 42rem"
              className="mx-auto h-auto w-full object-contain"
            />
          </div>

          <p className="max-w-xl font-[family-name:var(--font-display)] text-2xl leading-snug text-navy sm:text-3xl">
            Holding company for 911 Pool Care
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            Texas C&amp;K, LLC owns and supports 911 Pool Care — leak detection,
            equipment repair, renovations, and inspections for Central Texas
            pool owners.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="https://www.911poolcare.com"
              className="inline-flex items-center justify-center rounded-md bg-flag-red px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_24px_rgba(191,10,48,0.28)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flag-red"
            >
              Visit 911 Pool Care
            </a>
            <a
              href="https://www.911poolcare.com/contact"
              className="inline-flex items-center justify-center rounded-md border border-navy/20 bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-navy transition-colors hover:border-navy/40 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              Request service
            </a>
          </div>
        </section>

        <footer className="border-t border-navy/10 pt-6 pb-2">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 object-contain opacity-80"
                aria-hidden
              />
              <div>
                <p className="text-sm font-semibold text-navy">Texas C&amp;K, LLC</p>
                <p className="text-xs text-muted">
                  <a
                    href="mailto:chris@texasck.com"
                    className="transition-colors hover:text-flag-red"
                  >
                    chris@texasck.com
                  </a>
                </p>
              </div>
            </div>
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Texas C&amp;K, LLC. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

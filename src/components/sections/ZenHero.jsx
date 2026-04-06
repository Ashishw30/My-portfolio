export function Hero({ data, onOpenResume }) {
  return (
    <section id="home" className="min-h-[100svh] w-full flex flex-col lg:justify-center pt-[100px] lg:pt-[80px] pb-10 px-4 sm:px-6 overflow-hidden bg-bg-primary relative">
      {/* Background Decorative Architecture */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[1px] bg-accent/10 -rotate-12 blur-[1px] pointer-events-none"></div>
      <div className="absolute bottom-[25%] right-[10%] w-[300px] h-[1px] bg-accent/10 rotate-12 blur-[1px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[5%] w-px h-[200px] bg-accent/5 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start lg:items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="reveal delay-100 flex flex-col leading-[0.98] sm:leading-[0.95] text-[2.6rem] sm:text-[3.5rem] lg:text-[5.5rem] font-black tracking-tighter break-words">
                <span className="flex flex-wrap items-center gap-x-2 sm:gap-x-4">
                  Verifying <span className="text-secondary opacity-55">Precision-Driven</span>
                </span>
                <span className="text-shimmer border-b-[4px] border-accent/20 pb-2 w-fit">System Integrity</span>
              </h1>
  
              <p className="reveal active delay-200 text-sm md:text-base font-medium leading-relaxed max-w-[500px] opacity-70 border-l-2 border-accent/20 pl-5 py-1.5">
                A Senior Manual Tester with 3 years of hands-on experience, dedicated to uncovering high-signal defects and safeguarding user trust in complex distributed systems through meticulous, human-centric verification.
              </p>
            </div>

            {/* CTAs */}
            <div className="reveal delay-300 flex flex-wrap gap-3 items-center">
              <a href={data.ctas.primary.href} className="btn-prime">
                {data.ctas.primary.label}
              </a>
              <button 
                onClick={onOpenResume}
                className="btn-ghost"
              >
                {data.ctas.secondary.label}
              </button>
            </div>

            {/* Action Area End */}
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 lg:col-span-5 reveal delay-200 flex justify-center relative">
            <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-accent/5 blur-3xl animate-pulse pointer-events-none"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>

            <div className="relative group w-full">
              {/* Shadow Puddle */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-8 bg-black/10 blur-[20px] rounded-full group-hover:w-[85%] group-hover:bg-black/15 transition-all duration-700 -z-10"></div>

              <div className="relative w-full max-w-full sm:max-w-[320px] md:max-w-[420px] aspect-[4/5] rounded-[2rem] sm:rounded-[48px] overflow-hidden shadow-2xl border-[3px] border-white/90 mx-auto transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.2)]">
                <img
                  src="/ashishprofileimage.png"
                  alt="Ashish Wani - QA Specialist"
                  className="h-full w-full object-cover object-top filter contrast-[1.05] group-hover:scale-[1.04] transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
              </div>

              {/* Name Badge - Always Animated */}
              <div className="mt-4 flex flex-col items-center gap-1 text-center hero-name-float">
                <h3 className="text-base sm:text-lg font-black tracking-tighter text-text-primary leading-none">
                  Hello, I am{" "}
                  <span className="hero-name-shimmer">Ashish Wani</span>
                  <span className="hero-cursor">|</span>
                </h3>
                <div className="h-0.5 w-8 bg-accent/30 rounded-full mt-1 hero-underline-grow"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

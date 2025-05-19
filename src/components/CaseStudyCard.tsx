function ArrowIcon() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2.33447L14.5303 7.8648V8.92546L9 14.4558L7.93934 13.3951L12.1893 9.14513H1.25V7.64513H12.1893L7.93934 3.39513L9 2.33447Z"
        fill="white"
      />
    </svg>
  );
}

/**
 * CaseStudyCard component displays a case study with a logo, description, and call-to-action button
 */
function CaseStudyCard() {
  return (
    <section className="overflow-hidden relative mx-auto max-w-none bg-stone-950 h-[726px] rounded-[36px] w-[588px] max-md:w-full max-md:h-auto max-md:max-w-[588px] max-md:min-h-[726px] max-sm:max-w-screen-sm max-sm:rounded-3xl">
      <header className="absolute left-2/4 -translate-x-2/4 top-[187px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d090eae39c05f96e840bf78f519d0d81bd90b7"
          className="h-[78px] w-[265px] max-sm:h-auto max-sm:w-[200px]"
          alt="Netsol Logo"
        />
      </header>

      <p className="absolute left-10 text-3xl font-medium tracking-tighter leading-10 text-zinc-500 top-[491px] w-[512px] max-md:text-3xl max-md:w-[calc(100%_-_80px)] max-sm:text-2xl max-sm:top-[460px]">
        A Seamless Interface for Smarter, Faster Business Operations
      </p>

      <footer className="absolute left-10 bottom-[46px] max-sm:w-[calc(100%_-_80px)]">
        <button className="inline-flex gap-3 items-center px-6 py-3 text-base font-medium leading-6 text-white rounded-xl border border-solid cursor-pointer bg-white bg-opacity-0 border-neutral-400 max-sm:justify-center max-sm:w-full">
          <span>View Casestudy</span>
          <ArrowIcon />
        </button>
      </footer>
    </section>
  );
}

export default CaseStudyCard;

import LogoGrid from "./LogoGrid";

function HeroSection() {
  // Logo URLs for the grid
  const logoUrls = [
    "/assets/section2img1.png",
    "/assets/section2img2.png",
    "/assets/section2img3.png",
    "/assets/section2img4.png",
    "/assets/section2img5.png",
  ];

  return (
    <section className="py-14 w-full bg-black">
      <div className="px-28 mx-auto  max-md:px-16 max-sm:px-5">
        <div className="flex gap-24 max-md:gap-10 max-sm:gap-8">
          <header className="w-full">
            <h1 className="text-[48px] font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight">
              Who said creativity <br />can't be strategic?
            </h1>
          </header>
          <div className="w-full">
            <p className="text-lg leading-7 max-md:text-base max-md:leading-6">
              <span className="text-zinc-400">
                In a world full of cluttered interfaces and rushed dev cycles,
                we're here to do things differently. We partner with ambitious
                teams to design and
              </span>
              <span className="font-bold text-white">
                {" "}&quot; build digital products that feel simple, scalable and
                intentional &quot;
              </span>
              <span className="text-zinc-400">
                — from first wireframe to final launch &amp; Development.
              </span>
            </p>
          </div>
        </div>
        <LogoGrid logoUrls={logoUrls} />
      </div>
    </section>
  );
}

export default HeroSection;

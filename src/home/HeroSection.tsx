import LogoGrid from "./LogoGrid";
import LogoSlider from "./LogoSlider";

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
    <section className="pt-[127px] pb-14 w-full bg-[#09090B]">
      <div className="px-28 mx-auto  max-md:px-16 max-sm:px-5">
        <div className="flex flex-col sm:flex-row justify-center gap-24 max-md:gap-10 max-sm:gap-8">
          <header className="w-full">
            <h1 className="text-[24px] sm:text-[48px] text-center sm:text-start font-bold tracking-[-1.2px] bg-gradient-to-br from-white to-[#71717A] text-transparent bg-clip-text leading-tight">
              Who said creativity <br />can't be strategic?
            </h1>
          </header>
          <div className="w-full">
            <p className="text-lg text-center sm:text-start leading-7 max-md:text-base max-md:leading-6">
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
        <div className="hidden sm:block">
        <LogoGrid logoUrls={logoUrls} />
        </div>
        <div className="sm:hidden">
        <LogoSlider logoUrls={logoUrls} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

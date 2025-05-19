

function InputDesign() {
  return (
    <div className=" px-[104px] pt-[63px]">

      <div className="px-10 py-16 w-full bg-[#101012]">
        <div>
          <div className="flex gap-5">
            <div className="w-[61%]">
              <article className="flex flex-col px-7 py-7 mx-auto w-full rounded-3xl bg-stone-900">
                <img
                  src="/assets/ipimg1.png"
                  alt="The Evolution of Gaming: From Pixel to Photorealism"
                  className="object-contain w-full rounded-3xl aspect-[1.49]"
                />
                <h2 className="mt-6 text-2xl font-medium tracking-tight text-zinc-100">
                  The Evolution of Gaming: From Pixel to Photorealism
                </h2>
                <div className="flex gap-5 items-center self-start mt-3.5 text-lg tracking-tight text-zinc-500">
                  <time className="self-stretch my-auto">April 21,2025</time>
                  <span className="self-stretch my-auto">10 mins Read</span>
                </div>
              </article>
            </div>
            <div className="ml-5 w-[39%]">
              <article className="flex flex-col items-start px-7 py-7 mx-auto w-full rounded-3xl bg-stone-900">
                <img
                  src="assets/ipimg2.png"
                  alt="Game Trends in 2025"
                  className="object-contain self-stretch w-full rounded-3xl aspect-[0.91]"
                />
                <h2 className="mt-6 text-2xl font-medium tracking-tight text-zinc-100">
                  Game Trends in 2025
                </h2>
                <div className="flex gap-5 items-center mt-3.5 text-lg tracking-tight text-zinc-500">
                  <time className="self-stretch my-auto">April 21,2025</time>
                  <span className="self-stretch my-auto">10 mins Read</span>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex gap-5">
            <div className="w-[39%]">
              <article className="flex flex-col items-start px-7 py-7 mx-auto w-full rounded-3xl bg-stone-900">
                <img
                  src="assets/ipimg3.png"
                  alt="Building Our Latest Game"
                  className="object-contain self-stretch w-full rounded-3xl aspect-[0.91]"
                />
                <h2 className="mt-6 text-2xl font-medium tracking-tight text-zinc-100">
                  Building Our Latest Game
                </h2>
                <div className="flex gap-5 items-center mt-3.5 text-lg tracking-tight text-zinc-500">
                  <time className="self-stretch my-auto">April 21,2025</time>
                  <span className="self-stretch my-auto">10 mins Read</span>
                </div>
              </article>
            </div>
            <div className="ml-5 w-[61%]">
              <article className="flex flex-col items-start px-7 py-7 mx-auto w-full rounded-3xl bg-stone-900">
                <img
                  src="assets/ipimg4.png"
                  alt="From Sketch to Screen: Our Art Pipeline Explained"
                  className="object-contain self-stretch w-full rounded-3xl aspect-[1.49]"
                />
                <h2 className="mt-6 text-2xl font-medium tracking-tight text-zinc-100">
                  From Sketch to Screen: Our Art Pipeline Explained
                </h2>
                <div className="flex gap-5 items-center mt-3.5 text-lg tracking-tight text-zinc-500">
                  <time className="self-stretch my-auto">April 21,2025</time>
                  <span className="self-stretch my-auto">10 mins Read</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputDesign;

const Content = () => {
  return (
    <section className="flex max-lg:flex-col-reverse max-lg:gap-10 h-screen items-center px-36 pt-16 max-sm:pt-0 pb-28 gap-36 max-xl:px-20 max-lg:px-0">
      <div className="h-full pt-20 max-xl:pt-14 max-lg:pt-0 w-fit flex flex-col justify-between max-lg:gap-10">
        <div className="flex flex-col gap-10 max-xl:gap-5">
          <h1 className="text-6xl font-bold max-lg:text-center max-sm:text-4xl">
            Make remote work
          </h1>
          <p className="max-lg:text-center max-lg:mx-auto max-sm:px-4 text-lg max-w-lg text-medium-gray-neutral">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="text-almost-white-neutral max-lg:mx-auto bg-almost-black-neutral py-3 px-6 rounded-xl font-medium w-fit hover:bg-almost-white-neutral hover:text-almost-black-neutral hover:outline hover:outline-2 hover:outline-almost-black-neutral">
            Learn more
          </button>
        </div>
        <div className="flex gap-8 max-sm:gap-6 items-center max-xl:grid max-xl:grid-cols-2 max-lg:grid-cols-4 max-lg:mx-auto">
          <img src="images/client-databiz.svg" className="max-sm:w-16" alt="" />
          <img
            src="images/client-audiophile.svg"
            className="max-sm:w-16"
            alt=""
          />
          <img src="images/client-meet.svg" className="max-sm:w-16" alt="" />
          <img src="images/client-maker.svg" className="max-sm:w-16" alt="" />
        </div>
      </div>
      <img
        src="images/image-hero-desktop.png"
        alt="image hero desktop"
        width={500}
        className="h-full max-sm:w-screen max-sm:h-full"
      />
    </section>
  );
};

export default Content;

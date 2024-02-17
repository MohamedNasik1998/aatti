import front from "../assets/front-view.png";

function Home() {
  return (
    <div className="relative">
      <img
        className="w-full brightness-75 "
        style={{ height: "80%" }}
        src={front}
        alt="fr"
      />
      <div
        className="lg:flex flex-col gap-10 text-left"
        style={{ position: "absolute", top: "20%", left: "5%" }}
      >
        <h1 className="text-3xl lg:text-6xl text-white font-bold">
          Ignite Your Automotive <br /> Career at
          <span style={{ color: "rgba(191, 32, 47, 1)" }}> AATTI</span>
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          <br />
          justo erat. In auctor felis id libero dictum, nec congue nulla luctus.
          <br />
          Fusce convallis velit at varius rhoncus. Vestibulum tristique semper
          <br />
          tortor, non congue elit viverra non.
        </p>
        <button
          className="mt-2 text-center text-white p-2 font-bold rounded-lg"
          style={{ width: "25%", backgroundColor: "rgba(0, 113, 189, 1)" }}
        >
          EXPLORE MORE ➜
        </button>
      </div>
    </div>
  );
}

export default Home;

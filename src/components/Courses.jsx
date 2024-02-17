import mech from "../assets/wrench.png";
import elc from "../assets/power.png";
import car from "../assets/car.png";
function Courses() {
  return (
    <div style={{ background: "rgba(246, 246, 234, 1)" }}>
      <div className="pt-10 ml-20 mb-5 flex justify-start items-center gap-2">
        <img style={{ width: "28px", height: "28px" }} src={car} alt="car" />
        <h1
          className=" font-medium "
          style={{ fontSize: "24px", color: "rgba(191, 32, 47, 1)" }}
        >
          Courses
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 justify-around pb-20">
        <div className="flex flex-col text-left gap-3">
          <h1
            className="font-bold "
            style={{ fontSize: "28px", color: "rgba(0, 37, 97, 1)" }}
          >
            Explore Our Courses
            <br /> Categories
          </h1>
          <p className="font-medium">
            Fuel your passion for cars and drive your <br />
            career in the automotive industry. Our
            <br /> diverse course categories cater to future
            <br /> mechanics, engineers, and enthusiasts
            <br /> alike. Start your journey toward an
            <br />
            exciting automotive career with us.
          </p>
          <button
            className="text-center text-white font-medium p-2 rounded-sm"
            style={{ width: "55%", backgroundColor: "rgba(0, 113, 189, 1)" }}
          >
            EXPLORE MORE ➜
          </button>
        </div>
        <div
          className="flex flex-col justify-center items-center gap-3 border-none bg-white p-5 rounded-lg"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={mech} alt="me" />
          <h1 className="font-bold" style={{ color: "rgba(0, 37, 97, 1)" }}>
            Mechanical Engineering
          </h1>
          <p className="text-center font-medium">
            Designing mechanical systems, from
            <br />
            engines to machines, to spur <br />
            innovation and enhance functionality in
            <br />
            the engineering world.
          </p>
          <button
            className="font-medium"
            style={{ color: "rgba(0, 37, 97, 1)" }}
          >
            EXPLORE MORE →
          </button>
        </div>

        <div
          className="flex flex-col justify-center items-center gap-3 border-none bg-white p-5 rounded-lg"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          }}
        >
          <img style={{ width: "40px", height: "40px" }} src={elc} alt="me" />
          <h1 className="font-bold" style={{ color: "rgba(0, 37, 97, 1)" }}>
            Mechanical Engineering
          </h1>
          <p className="text-center font-medium">
            Designing mechanical systems, from
            <br />
            engines to machines, to spur <br />
            innovation and enhance functionality in
            <br />
            the engineering world.
          </p>
          <button
            className="font-medium"
            style={{ color: "rgba(0, 37, 97, 1)" }}
          >
            EXPLORE MORE →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Courses;

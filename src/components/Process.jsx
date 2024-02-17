import car from "../assets/car.png";
// import ged from "../assets/ged.png";
import p1 from "../assets/p1.png";

import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import adimg from "../assets/Rectangle 34.png";

function Process() {
  return (
    <div>
      <div className="pt-10 pb-5  flex justify-center items-center gap-2">
        <img style={{ width: "28px", height: "28px" }} src={car} alt="car" />
        <h1
          className=" font-medium "
          style={{ fontSize: "24px", color: "rgba(191, 32, 47, 1)" }}
        >
          WORK PROCESS
        </h1>
      </div>
      <h1
        className="pt-5 font-bold text-center"
        style={{
          fontSize: "28px",
          color: "rgba(0, 37, 97, 1)",
        }}
      >
        Unveiling Our Roadmap to Automotive Expertise
      </h1>

      <p
        className="pt-5 font-medium text-center"
        style={{ lineHeight: "16px" }}
      >
        Explore our systematic approach to cultivating automotive expertise. Our
        structured program
        <br /> ensures students follow a clear path towards achieving excellence
        in the automotive industry,
        <br /> setting them on the road to success
      </p>

      {/* card */}

      <div className="mt-10 flex flex-wrap justify-around items-center">
        <div className="flex flex-col gap-4 items-center">
          <img
            className="p-5 bg-slate-300"
            src={p1}
            alt="ged"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          />
          <p className="text-center font-bold">
            Have a High School
            <br />
            Diploma or GED
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <img
            className="p-5 bg-slate-300"
            src={p2}
            alt="ged"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          />
          <p className="text-center font-bold">
            Enroll in a Trade
            <br />
            Program
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            className="p-5 bg-slate-300"
            src={p3}
            alt="ged"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          />
          <p className="text-center font-bold">
            Learn With the
            <br />
            Right Tools
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            className="p-5 bg-slate-300"
            src={p4}
            alt="ged"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          />
          <p className="text-center font-bold">
            Apply and Test for
            <br />
            Certification
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img
            className="p-5 bg-slate-300"
            src={p5}
            alt="ged"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          />
          <p className="text-center font-bold">
            Follow Local
            <br />
            Regulations
          </p>
        </div>
      </div>

      {/* Ad */}

      <div
        className="hidden mt-20 md:flex justify-between items-center text-white"
        style={{ background: "rgba(0, 113, 189, 1)" }}
      >
        <div className="flex flex-col gap-3 pl-10">
          <h1 className="font-bold text-2xl lg:text-3xl">
            Become a Part of Our A.A.T.T.I Community
          </h1>
          <button
            className="text-center text-white p-2 font-medium rounded-lg bg-white"
            style={{ width: "30%", color: "rgba(0, 113, 189, 1)" }}
          >
            JOIN WITH US ➜
          </button>
        </div>
        <img src={adimg} alt="ad" />
      </div>
      <div style={{ marginTop: "5%" }}></div>
    </div>
  );
}

export default Process;

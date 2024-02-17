import aimg from "../assets/Group 12.png";
import gimg from "../assets/Rectangle 9.png";
import woimg from "../assets/world.png";
import china from "../assets/china.png";
import india from "../assets/india.png";
import malaysia from "../assets/malaysia.png";
import germany from "../assets/germany.png";
import car from "../assets/car.png";

function About() {
  return (
    <>
      <div className="hidden md:flex justify-center gap-20 pt-10 pb-10 pl-5 pr-5">
        <div>
          <img style={{ width: "80%" }} src={aimg} alt="ab" />
        </div>

        <div className="flex flex-col gap-5">
          <div className="pt-10  flex items-center gap-2">
            <img
              style={{ width: "28px", height: "28px" }}
              src={car}
              alt="car"
            />
            <h1
              className=" font-medium "
              style={{ fontSize: "24px", color: "rgba(191, 32, 47, 1)" }}
            >
              ABOUT US OUR INSTITUTE
            </h1>
          </div>
          <h1
            className="font-bold "
            style={{ fontSize: "28px", color: "rgba(0, 37, 97, 1)" }}
          >
            Your Road to Automobile Excellence
            <br /> Starts Here
          </h1>
          <p className="font-medium">
            Embark on a transformative journey as your road to
            <br /> automotive excellence begins here. Our institute offers a
            <br />
            comprehensive range of courses, expert guidance, and
            <br /> hands-on experience, paving the way for a successful <br />{" "}
            career in the dynamic world of automobiles. Ignite your <br />{" "}
            passion and drive your future with us.
          </p>
          <div className="flex flex-col gap-2">
            <label className="flex gap-1">
              <input type="radio" value="option1" />
              <p className="font-medium">
                Auto knowledge unlocks diverse career paths in the industry.
              </p>
            </label>
            <label className="flex gap-1">
              <input type="radio" value="option2" />
              <p className="font-medium">
                Auto knowledge fuels innovation, drives tech development.
              </p>
            </label>
            <label className="flex gap-1">
              <input type="radio" value="option3" />
              <p className="font-medium">
                Auto knowledge saves on repair costs.
              </p>
            </label>
            <label className="flex gap-1">
              <input type="radio" value="option4" />
              <p className="font-medium">
                Auto knowledge promotes eco-friendly transport solutions.
              </p>
            </label>
          </div>
          <button
            className="text-center text-white p-2 font-medium rounded-lg"
            style={{ width: "35%", backgroundColor: "rgba(0, 113, 189, 1)" }}
          >
            ABOUT MORE ➜
          </button>
        </div>
      </div>

      <div
        style={{
          background: "rgba(246, 246, 234, 1)",
          height: "15vh",
          position: "relative",
        }}
      >
        {/* Gr 18 */}
        <div
          className="hidden lg:flex justify-center gap-20 rounded-2xl"
          style={{
            backgroundColor: "rgba(0, 113, 189, 1)",
            padding: "5px",
            marginLeft: "10%",
            marginRight: "10%",
            position: "absolute",
            top: "50%",
            left: "0%",
            right: "0%",
            zIndex: 2,
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-white" style={{ fontSize: "40px" }}>
              899<sup>+</sup>
            </h1>
            <p className="text-white">Successfully Trained</p>
          </div>
          <div className="border-r-2"></div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-white" style={{ fontSize: "40px" }}>
              399<sup>+</sup>
            </h1>
            <p className="text-white">Session Completed</p>
          </div>
          <div className="border-r-2"></div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-white" style={{ fontSize: "40px" }}>
              299<sup>+</sup>
            </h1>
            <p className="text-white">Student Community</p>
          </div>
          <div className="border-r-2"></div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-white" style={{ fontSize: "40px" }}>
              19<sup>+</sup>
            </h1>
            <p className="text-white">Student Community</p>
          </div>
        </div>
      </div>

      <div className="relative text-white">
        <img
          className="w-full brightness-75 filter brightness-contrast"
          style={{ height: "650px" }}
          src={gimg}
          alt="glob"
        />
        <div
          style={{ position: "absolute", top: "10%", left: "0%", right: "0%" }}
        >
          <div className="pt-10  flex justify-center items-center gap-2">
            <img
              style={{ width: "28px", height: "28px" }}
              src={car}
              alt="car"
            />
            <h1
              className=" font-medium "
              style={{ fontSize: "24px", color: "rgba(191, 32, 47, 1)" }}
            >
              OUR GLOBAL IMPACT
            </h1>
          </div>
          <h1
            className="text-center font-bold mb-5 text-white"
            style={{
              fontSize: "28px",
              lineHeight: "30px",
            }}
          >
            Global Impact of Our Automotive
            <br /> Education Programs
          </h1>

          <div className="hidden md:flex justify-center gap-20 pt-10 pb-5">
            <div>
              <p>
                Our Automotive Education Programs have made a
                <br />
                substantial global impact in the dynamic landscape of
                <br /> Asia. By offering cutting-edge training and fostering
                <br />
                automotive expertise, we have empowered individuals and
                <br /> industries alike. Through strategic partnerships and a
                <br />
                commitment to excellence, our influence has been felt
                <br /> across the continent. From shaping the skills of future
                <br />
                automotive professionals to driving innovation and
                <br /> industry growth, we take pride in our role as a catalyst
                for
                <br /> positive change in the Asian automotive sector.
              </p>
              <div className="mt-5 flex justify-start gap-10">
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5">
                    <img src={germany} alt="germany" />
                    <p>Germany</p>
                  </div>
                  <div className="flex gap-5">
                    <img src={malaysia} alt="malaysia" />
                    <p>malaysia</p>
                  </div>
                </div>

                <div
                  className="flex flex-col gap-5"
                  style={{ paddingLeft: "20%" }}
                >
                  <div className="flex gap-5">
                    <img src={china} alt="china" />
                    <p>China</p>
                  </div>
                  <div className="flex gap-5">
                    <img src={india} alt="india" />
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>

            <img style={{ width: "30%" }} src={woimg} alt="world" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

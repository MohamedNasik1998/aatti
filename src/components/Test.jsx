import car from "../assets/car.png";
import vector from "../assets/Vector.png";
import primg1 from "../assets/Rectangle 12.png";
import primg2 from "../assets/Rectangle 14.png";

function Test() {
  return (
    <div>
      <div className="pt-10 pb-5  flex justify-center items-center gap-2">
        <img style={{ width: "28px", height: "28px" }} src={car} alt="car" />
        <h1
          className=" font-medium "
          style={{ fontSize: "24px", color: "rgba(191, 32, 47, 1)" }}
        >
          OUR GLOBAL IMPACT
        </h1>
      </div>
      <h1
        className="font-bold text-center"
        style={{
          fontSize: "28px",
          color: "rgba(0, 37, 97, 1)",
          lineHeight: "30px",
        }}
      >
        Discover What Our Students Are
        <br /> Saying
      </h1>

      {/* box-card */}
      <div className="mt-10 flex justify-center gap-10">
        <div
          className="flex flex-col gap-2 p-5 rounded-lg text-white"
          style={{
            background: "rgba(0, 113, 189, 1)",
            width: "30%",
          }}
        >
          <img
            className="pb-2 "
            style={{ width: "15%", alignSelf: "flex-end" }}
            src={vector}
            alt="vector"
          />
          <p className="text-center">
            The sense of community and support among
            <br /> students and staff made my learning experience
            <br /> truly exceptional.
          </p>
          <div className="pt-2 border-b-2"></div>

          <div className="flex justify-between items-center pt-3">
            <div className="flex gap-2 items-center">
              <img style={{ width: "30%" }} src={primg1} alt="primg1" />
              <div className="flex flex-col">
                <h1>Zara Novel</h1>
                <p>Mechanical Student</p>
              </div>
            </div>
            <p>★★★★★</p>
          </div>
        </div>

        <div
          className="flex flex-col gap-2 p-5 rounded-lg text-white"
          style={{
            background: "rgba(0, 113, 189, 1)",
            width: "30%",
          }}
        >
          <img
            className="pb-2 "
            style={{ width: "15%", alignSelf: "flex-end" }}
            src={vector}
            alt="vector"
          />
          <p className="text-center">
            The institute's emphasis on real-world applications
            <br /> made all the difference. I felt prepared and confident
            <br /> in my automotive career
          </p>
          <div className="pt-2 border-b-2"></div>

          <div className="flex justify-between items-center pt-3">
            <div className="flex gap-2 items-center">
              <img style={{ width: "30%" }} src={primg2} alt="primg2" />
              <div className="flex flex-col">
                <h1>David Smith</h1>
                <p>Electrical Student</p>
              </div>
            </div>
            <p>★★★★✩</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 justify-center pt-10 pb-10">
        <input type="radio" value="option1" />
        <input type="radio" value="option2" />
        <input type="radio" value="option3" />
      </div>
    </div>
  );
}

export default Test;

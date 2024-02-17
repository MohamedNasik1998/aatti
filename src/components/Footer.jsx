import user from "../assets/user.png";
import call from "../assets/call.png";
import msg from "../assets/msg.png";
import loc from "../assets/loc.png";
import facebook from "../assets/fb.png";
import linkedin from "../assets/lin.png";
import twitter from "../assets/tw.png";
import youtoube from "../assets/yo.png";

function Footer() {
  return (
    <footer className="text-white" style={{ background: "rgba(0, 37, 97, 1)" }}>
      <div className="flex justify-around p-5">
        <div className="flex gap-5 items-center">
          <img
            className="p-5 bg-slate-300"
            src={call}
            alt="call"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          />
          <div className="flex flex-col">
            <p>Call us anytime :</p>
            <p>+94 716 049 740</p>
          </div>
        </div>
        <div className="border-r-2"></div>
        <div className="flex gap-5 items-center">
          <img
            className="p-5 bg-slate-300"
            src={msg}
            alt="call"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          />
          <div className="flex flex-col">
            <p>Email us 24/7 hours :</p>
            <p>support@aatti.com</p>
          </div>
        </div>
        <div className="border-r-2"></div>
        <div className="flex gap-5 items-center">
          <img
            className="p-5 bg-slate-300"
            src={loc}
            alt="call"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
          />
          <div className="flex flex-col">
            <p>Our location :</p>
            <p>Realty Plaza, Ja-Ela</p>
          </div>
        </div>
      </div>
      <div
        class=" text-white p-5 ml-5 mr-5 rounded-md"
        style={{ background: "rgba(0, 22, 58, 1)" }}
      >
        <div class="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div>
            {/* <!-- 1st column: Logo and text --> */}
            <img class="h-8 w-8 mb-2" src={user} alt="user" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              nec justo erat. In auctor felis id libero dictum, nec congue nulla
            </p>
          </div>
          <div>
            {/* <!-- 2nd column: List Items --> */}
            <h4
              class="font-bold  mb-2"
              style={{ color: "rgba(191, 32, 47, 1)" }}
            >
              Useful Links
            </h4>
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>About U</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            {/* <!-- 3rd column: Empty --> */}
            <h4
              class="font-bold  mb-2"
              style={{ color: "rgba(191, 32, 47, 1)" }}
            >
              Courses
            </h4>
            <ul>
              <li>Mechanical Engineering</li>
              <li>Electrical Engineering</li>
              <li>Hybrid Technology</li>
            </ul>
          </div>
          <div>
            {/* <!-- 4th column: Text and Search bar --> */}
            <h4
              class="font-bold mb-2"
              style={{ color: "rgba(191, 32, 47, 1)" }}
            >
              Get in touch!
            </h4>
            <p>Subscribe for newsletter to get News & Update</p>
            <input
              type="search"
              name="search"
              placeholder="Search your email..."
              class="p-2 bg-gray-700  text-gray-300 rounded-md w-full mt-5"
            />
          </div>
        </div>
        <div>
          <h1
            className=" font-medium "
            style={{ fontSize: "24px", color: "rgba(191, 32, 47, 1)" }}
          >
            Follow Us
          </h1>
          <div className="flex gap-2 items-center mt-3" style={{ gap: "20%" }}>
            <div className="flex gap-3 ">
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="ln" />
              <img src={twitter} alt="tw" />
              <img src={youtoube} alt="yt" />
            </div>
            <div className=" border-t-2">
              <p className="pt-2">
                Copyright © 2023 Advanced Automobile & Technical Training
                Institute All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

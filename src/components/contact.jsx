import user from "../assets/user.png";
import facebook from "../assets/gg_facebook.png";
import linkedin from "../assets/ri_linkedin-fill.png";
import twitter from "../assets/ri_twitter-fill.png";
import youtoube from "../assets/ri_youtube-fill.png";

function Contact() {
  return (
    <div className="hidden lg:flex justify-around items-center">
      <div style={{ width: 80, height: 80 }}>
        <img src={user} alt="user" />
      </div>
      <div className="flex gap-5">
        <div>
          <p>Email:</p>
          <h1>support@aatti.com</h1>
        </div>
        <div className="border-r-2"></div>

        <div>
          <p>Phone:</p>
          <h1>+94 716 049 740</h1>
        </div>
        <div className="border-r-2"></div>

        <div className="flex gap-4" style={{ width: 28, height: 28 }}>
          <img src={facebook} alt="fb" />
          <img src={linkedin} alt="ln" />
          <img src={twitter} alt="tw" />
          <img src={youtoube} alt="yt" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

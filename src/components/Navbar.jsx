function Navbar() {
  return (
    <nav
      className=" text-white p-2 font-bold h-10 "
      style={{
        backgroundColor: "rgba(0, 113, 189, 1)",
        position: "sticky",
        top: 0,
        zIndex: 3,
      }}
    >
      <svg
        id="menuicon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 md:hidden"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <ul className="hidden md:flex justify-center items-center gap-10 cursor-pointer">
        <li className="hover:underline">Home</li>
        <li className="hover:underline">Course</li>
        <li className="hover:underline">About Us</li>
        <li className="hover:underline">Contact Us</li>
      </ul>

      {/* Slide bar  */}
      <section
        id="sidebar"
        className="bg-green-100 fixed z-10 top-0 transition-all duration-1000 md:hidden"
        style={{ width: "50%", height: "100vh", left: "-50%" }}
      >
        <div class="text-right p-5">
          <p id="close-nav" class="inline cursor-pointer">
            X
          </p>
        </div>
        <ul class="flex flex-col gap-10 items-center text-gray-600">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">Course</li>
          <li className="hover:underline">About Us</li>
          <li className="hover:underline">Contact Us</li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;

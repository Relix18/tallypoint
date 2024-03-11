import { Link } from "react-router-dom";
import logo from "../assets/logo_black.png";
import vector from "../assets/indian-student.png";
import vector2 from "../assets/young-woman.jpg";
import online from "../assets/video-chat.jpg";
import offline from "../assets/classroom.jpg";
import self from "../assets/woman-working.jpg";
import rishabh from "../assets/Rishabh.png";
import { FaArrowRightLong, FaSquarePhone, FaYoutube } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between  w-10/12 mx-auto max-w-screen-xl">
        <img src={logo} loading="lazy" alt="logo" className="w-28" />
        <div className="text-black mt-4 flex gap-10 relative h-6">
          <Link to="/home" className="border-b-2 border-black mr-4">
            Home
          </Link>
          <Link
            to="/home"
            className="mr-4 relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-black hover:after:scale-100"
          >
            About
          </Link>
          <Link
            to="/home"
            className="mr-4 relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-black hover:after:scale-100"
          >
            Courses
          </Link>
          <Link
            to="/home"
            className="mr-4 relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-black hover:after:scale-100"
          >
            Blogs
          </Link>
          <Link
            to="/home"
            className="mr-4 relative after:bottom-0 after:transition after:duration-200 after:ease-out after:left-0 after:absolute after:w-full after:h-0.5 after:scale-0 after:bg-black hover:after:scale-100"
          >
            Contact
          </Link>
        </div>
        <div className="text-black mt-2 flex gap-4 mr-4 h-10">
          <Link to="/login" className="py-2">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#121F43] text-white px-8 py-2 rounded-3xl"
          >
            Create Account
          </Link>
        </div>
      </div>

      <div className="flex w-10/12 gap-4 mx-auto max-w-screen-xl">
        <div className="w-3/5">
          <h1 className="text-6xl font-normal mt-20">
            Find the{" "}
            <span className="bg-[#ff9900] px-2 rounded-lg">perfect</span> course
            and Develop your skills
          </h1>
          <p className="my-10 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Lorem ipsum dolor sit amet
          </p>
          <Link className="border-[#121F43] text-[#121F43] border-2 px-2 py-1 text-sm rounded-lg">
            Explore Courses
          </Link>
        </div>
        <div className="h-8 w-2/5">
          <img
            src={vector}
            loading="lazy"
            className="img  rounded-3xl bg-gradient-to-t from-[#ff9900]"
          />
        </div>
      </div>

      <div className="w-10/12 flex mx-auto max-w-screen-xl items-center flex-col">
        <h1 className="mt-36 text-6xl">Build Your Career, Your Way</h1>
        <p className="mt-6 text-lg">
          Choose from live online courses, classroom training, or self-paced
          online programs
        </p>
        <div className="my-20 flex gap-20">
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="img2" loading="lazy" src={online} />
            <h2 className="mt-2 text-2xl flex justify-center uppercase">
              Online Class
            </h2>
            <Link
              to={"/home"}
              className=" flex justify-center items-center uppercase text-sm mb-2"
            >
              Get Started <FaArrowRightLong className="ml-2 " />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="img2" loading="lazy" src={offline} />
            <h2 className="mt-2 text-2xl flex justify-center uppercase">
              Offline Class
            </h2>
            <Link
              to={"/home"}
              className=" flex justify-center items-center uppercase text-sm"
            >
              Get Started <FaArrowRightLong className="ml-2 " />
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img className="img2" loading="lazy" src={self} />
            <h2 className="mt-2 text-2xl flex justify-center uppercase">
              Self paced Classes
            </h2>
            <Link
              to={"/home"}
              className=" flex justify-center items-center uppercase text-sm"
            >
              Get Started <FaArrowRightLong className="ml-2 " />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex mt-20 bg-[#ccd9ff] overflow-hidden">
        <div className="flex w-10/12 gap-36 mx-auto max-w-screen-xl my-16 relative">
          <div className="w-3/5 z-10">
            <h1 className="text-5xl font-normal mt-20">
              Nail Job Interviews with Core Questions
            </h1>
            <p className="font-sans my-4 text-md">
              Explore the more comprehensive set of questions that are
              frequently asked by companies/employers:
            </p>

            <div className="mt-12">
              <p className="font-sans font-semibold my-4 text-md underline underline-offset-4">
                Top 108 SEO Interview Questions and Answers
              </p>
              <p className=" font-sans my-4 text-md">
                Well-curated basdic to advanced interview questiions on SEO,
                categorized into freshers and experienced professionals. Also,
                find tips to fast-track a career in SEO.
              </p>
            </div>
            <div className="mt-12 mb-8">
              <p className="font-sans my-4 font-semibold underline underline-offset-4">
                Top 55 JavaScript Interview Questions and Answers
              </p>
              <p className="font-sans my-4 text-md">
                The most detaile and well-structured set of interview questions
                on JavaScript for Freshers and experienced prfessionals in the
                field of web development.
              </p>
            </div>
            <Link className="text-white bg-[#858484] flex justify-center items-center  uppercase text-md rounded-lg px-4 py-2 w-1/3">
              Learn More <MdKeyboardArrowRight className="ml-2 text-2xl" />
            </Link>
          </div>
          <div className="w-2/5 h-full before:bg-[#5400db] before:h-48 before:w-48 before:rounded-full before:absolute before:right-80 before:top-26 before:blur-3xl after:bg-[#34fd01] after:h-72 after:w-72 after:rounded-full after:absolute after:-right-20 after:-bottom-16  after:z-10 after:blur-3xl">
            <img
              src={vector2}
              loading="lazy"
              className="relative img3 mt-20 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-20 w-10/12 mx-auto max-w-screen-xl mt-28 px-2 py-16">
        <div className="w-2/5 h-full">
          <img
            src={rishabh}
            loading="lazy"
            className="img4 mt-12 rounded-3xl bg-gradient-to-t from-[#ff9900]"
          />
        </div>
        <div className="w-3/5">
          <h1 className="text-5xl font-normal mt-20">
            &#34;TallyPoint Tech: Bharat ka Career Launchpad&#34;
          </h1>
          <p className="my-10 text-sm">
            &#34;Our Missin is clear. We are building to train over Hunderds of
            Career Aspirants living in under-resourced demographics of Bharat.
            We are tirelessly working to empower you Career Seekers with
            Professional & Practical Tech/Non-tech Skills to help you compete
            for your dream career opportunities on Global Podium.{" "}
            <span className="font-semibold italic">
              Ab Bharat ka har graduate seekhega Top Professional Skills easy to
              understand Language mein! kahin bhi, Kabhi bhi!
            </span>
            &#34;
          </p>
          <div className="flex gap-4 mt-12">
            <div className="border-t-4 h-28 border-black w-28 mt-4"></div>
            <div>
              <p className="font-semibold uppercase text-lg">Rishabh Shukla</p>
              <p>Founder and CEO, TallyPoint</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#121F43] text-white mt-20 py-4">
        <h1 className="flex justify-center text-5xl font-normal mt-10">
          TallyPoint INC
        </h1>
        <p className="flex justify-center text-md font-semibold font-sans mt-4">
          Our leaner community's nwavering turst and confidence continure to
          propel success sotry forward.
        </p>

        <div className="flex justify-center gap-10 mt-10">
          <p className="flex gap-2 items-center">
            <FaSquarePhone className=" text-white rounded-full text-2xl" /> +91
            7007148722
          </p>
          <p className="flex gap-2 items-center ">
            <AiFillInstagram className=" text-white text-2xl" /> tallypointinc
          </p>
          <p className="flex gap-2 items-center">
            <FaYoutube className=" text-white text-2xl" /> / tallypoint
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

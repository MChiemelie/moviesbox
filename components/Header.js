import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="text-white">
      <Nav />
      <div className="container flex items-center h-full mx-auto w-2/3 lg:w-auto">
        <div className="lg:w-1/3 lg:py-10 space-y-4 lg:space-y-8 lg:mx-[8%]">
          <h1 className="font-bold text text-3xl md:text-5xl text-center lg:text-left"> John Wick 3: <br /> Parabellum </h1>
          <div className="flex gap-4 w-full text-xs md:text-md justify-center lg:justify-normal">
            <span className="flex gap-2 items-center">
              <Image width={100} height={100} src="/imdb.png" alt="imdb" className="w-8 lg:w-10" />
              86.0/100
            </span>
            <span className="flex gap-2 items-center">
              <Image  width={100} height={100} src="/orange.png" alt="orange" className="w-5" />
              97%
            </span>
          </div>
          <p className="text-sm lg:text-md text-center lg:text-left">John Wick is on the run after killing a member of the international assassins&#39; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <button className="flex bg-pink-700 justify-center items-center mx-auto lg:mx-0 gap-4 p-2 sm:p-3 rounded text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5547 5.16795C7.24784 4.96338 6.8533 4.94431 6.52814 5.11833C6.20298 5.29235 6 5.63121 6 6V10C6 10.3688 6.20298 10.7077 6.52814 10.8817C6.8533 11.0557 7.24784 11.0366 7.5547 10.8321L10.5547 8.83205C10.8329 8.64659 11 8.33435 11 8C11 7.66565 10.8329 7.35342 10.5547 7.16795L7.5547 5.16795Z" fill="white" />
            </svg>
            <span>WATCH TRAILER</span>
          </button>
        </div>
      </div>
      <div></div>
    </header >
  );
}
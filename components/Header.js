import Image from "next/image";

export default function Header() {
  return (
    <header className="text-white">
      <nav className="flex justify-around mx-auto w-full p-4 text-xl items-center">
        <logo className="flex font-slimbold font-sans justify-center items-center gap-4">
          <Image width={100} height={100} src="/logo.png" alt="logo" className="w-10" />
          <span className="font-bold text-lg">MovieBox</span>
        </logo>
        <div className="relative w-2/5">
          <input type="search" placeholder="What do you want to watch?" className="placeholder:italic placeholder:text-gray-100 bg-opacity-25 bg-gray-400 bg-clip-padding backdrop-blur-md rounded px-1 py-1 w-full border border-gray-500 text-white text-sm appearance-none outline-none focus:none focus:border-gray-300" />
          <div className="absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-200" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex font-slimbold font-sans justify-center items-center gap-8">
          <span className="text-sm">Sign In</span>
          <button className="bg-red-600 p-1 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white" />
              <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="container">
        <div className="w-1/3 py-10 self-center space-y-4 lg:space-y-8 mx-[8%]">
          <h1 className="font-bold text-3xl lg:text-5xl text-center md:text-left"> John Wick 3: <br /> Parabellum </h1>
          <p className="text-sm md:text-md lg:text-lg text-center md:text-left">John Wick is on the run after killing a member of the international assassins&#39; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <div className="flex gap-4 w-full text-sm md:text-md">
            <span className="flex gap-2 items-center">
              <Image width={50} height={50} src="/imdb.png" alt="imdb" />
              86.0/100
            </span>
            <span className="flex gap-2 items-center">
              <Image width={20} height={20} src="/orange.png" alt="orange" />
              97%
            </span>
          </div>
          <button className="flex bg-red-600 justify-center items-center gap-4 p-2 rounded">
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
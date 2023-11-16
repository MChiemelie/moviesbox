export default function DetailsSkeleton() {
   return (
      <div className="w-full animate-pulse space-y-6 h-screen p-4">
         <div className="flex mx-auto rounded-2xl w-full h-1/2 bg-gray-400" />
         <div className="md:flex gap-4 justify-between lg:space-x-3 space-y-4 lg:space-y-0">
            <div className="md:w-2/3 space-y-4">
               <div className="flex justify-center items-center gap-2">
                  <p className="bg-gray-400 h-6 w-2/3 rounded mx-auto justify-center" />
                  <div className="text-sm lg:text-md flex mx-auto justify-center items-center gap-1">
                     <span className="gap-2 border border-pink-200 bg-pink-50 font-semibold text-pink-600 p-1 rounded-full h-8 w-16" />
                     <span className="gap-2 border border-pink-200 bg-pink-50 font-semibold text-pink-600 p-1 rounded-full h-8 w-16" />
                  </div>
               </div>
               <div className="space-y-1">
                  <div className="flex gap-2">
                     <div className="h-3 w-4/5 rounded bg-gray-400" />
                     <div className="h-3 w-1/5 rounded bg-gray-400" />
                  </div>
                  <div className="flex gap-2">
                     <div className="h-3 w-1/5 rounded bg-gray-400" />
                     <div className="h-3 w-4/5 rounded bg-gray-400" />
                  </div>
                  <div className="flex gap-2">
                     <div className="h-3 w-3/5 rounded bg-gray-400" />
                     <div className="h-3 w-2/5 rounded bg-gray-400" />
                  </div>
                  <div className="flex gap-2">
                     <div className="h-3 w-2/5 rounded bg-gray-400" />
                     <div className="h-3 w-3/5 rounded bg-gray-400" />
                  </div>
                  <div className="flex gap-2">
                     <div className="h-3 w-4/5 rounded bg-gray-400" />
                     <div className="h-3 w-1/5 rounded bg-gray-400" />
                  </div>
                  <div className="flex gap-2">
                     <div className="h-3 w-1/5 rounded bg-gray-400" />
                     <div className="h-3 w-4/5 rounded bg-gray-400" />
                  </div>
               </div>
               <div>
                  <ul className="space-y-2 text-sm my-4">
                     <li className="flex items-center gap-2">
                        <div className="bg-gray-400 h-4 w-1/6 rounded" /> <div className="bg-gray-400 h-4 w-3/5 rounded" />
                     </li>
                     <li className="flex items-center gap-2">
                        <div className="bg-gray-400 h-4 w-1/6 rounded" /> <div className="bg-gray-400 h-4 w-3/5 rounded" />
                     </li>
                     <li className="flex items-center gap-2">
                        <div className="bg-gray-400 h-4 w-1/6 rounded" /> <div className="bg-gray-400 h-4 w-3/5 rounded" />
                     </li>
                  </ul>
                  <div className="flex border-2 h-8 gap-6 rounded-lg mx-1">
                     <button className="bg-pink-700 p-2 rounded-lg text-white text-xs w-1/3" />
                  </div>
               </div>
            </div>
            <div className="md:w-1/3 space-y-1">
               <div className="flex items-center justify-center gap-2 lg:justify-end">
                  <span className="bg-gray-400 h-3 w-3 rounded-full" />
                  <p className="text-xs bg-gray-400 h-3 w-12 rounded-md" />
               </div>
               <div className="space-y-2">
                  <button className="flex w-full h-8 bg-pink-700 text-white items-center text-xs justify-center gap-4 py-2 rounded-lg" />
                  <button className="flex w-full h-8 bg-pink-50 text-gray-800 items-center text-xs justify-center gap-4 py-2 rounded-lg border border-pink-500" />
               </div>
               <div className="relative">
                  <div className="rounded-t-lg w-full bg-gray-400 h-40" />
                  <button className="absolute bottom-0 text-white flex w-full items-center text-xs justify-center gap-1 py-2 bg-opacity-25 bg-gray-400 bg-clip-padding backdrop-blur-md rounded-lg p-1 rounded-xl" />
               </div>
            </div>
         </div>
      </div>
   );
}


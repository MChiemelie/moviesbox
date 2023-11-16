export default function CardSkeleton() {
   return (
      <div role="status" className="relative w-full animate-pulse overflow-hidden">
         <div className="rounded relative space-y-4 w-full h-full p-4">
            <div className="bg-gray-400 p-4 sm:grid-cols-13 mt-0 grid h-[300px] w-full grid-cols-12 items-end space-y-2 rounded p-4 md:gap-4" />
            <div className="flex items-center gap-2">
               <div className="h-4 w-1/12 rounded bg-gray-400" />
               <div className="h-4 w-1/4 rounded-md bg-gray-400" />
            </div>
            <div className="h-5 w-4/5 rounded bg-gray-400" />
            <div className="flex justify-between">
               <div className="flex items-center gap-2">
                  <div className="h-4 w-2/3 rounded bg-gray-400" />
                  <div className="h-4 w-16 rounded-md bg-gray-400" />
               </div>
               <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-gray-400" />
                  <div className="ml-2 h-4 w-12 rounded-md bg-gray-400" />
               </div>
            </div>
         </div>
      </div>
   );
}
// GridSkeleton.js
import React from 'react';
import CardSkeleton from './CardSkeleton';

export default function GridSkeleton() {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
         {Array.from({ length: 8 }).map((_, index) => (
            <CardSkeleton key={index} />
         ))}
      </div>
   );
}
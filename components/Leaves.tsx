// components/Leaves.tsx
"use client";

import React, { useEffect, useState } from "react";

const Leaves = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once it's rendered on the client
  }, []);

  if (!isClient) return null; // Don't render anything on the server

  return (
    <div className="fixed left-0 top-0 w-9/10 h-screen pointer-events-none z-10 overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`leaf absolute top-[-10%] animate-fall${(i % 3) + 1}`}
          style={{
            left: `${Math.random() * 50}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        >
          🍂 
        </div>
      ))}
    </div>
  );
};

export default Leaves;

'use client'

// components
import LeftOne from "./components/leftOne";
import RightOne from "./components/rightOne";
import BottomOne from "./components/bottomOne";

export default function Home() {
  return (
    <div>
      <div className="flex">
        <LeftOne />
        <RightOne />

      </div>

      <BottomOne />
 



    </div>
  );
}

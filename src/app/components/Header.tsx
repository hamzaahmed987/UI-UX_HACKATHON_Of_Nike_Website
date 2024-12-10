// "use client"
// import Image from "next/image"
// import { useState } from "react";
// import Link from "next/link";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <>
//       <header className="body-font bg-[#F5F5F5] h-[36px] pt-1">
//         <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
//           {/* Logo and Icon Section */}
//           <div className="flex items-center">
//             <Image
//               className="w-[24px] h-[24px]"
//               width={24}
//               height={24}
//               src={"/assets/Vector.png"}
//               alt={"Icon"}
//             />

//           </div>

//           {/* Navigation Section */}
//           <nav className="flex flex-wrap items-center text-sm text-[#111111] font-helvetica space-x-2 md:space-x-6 ">
//             <Link href={"/Stores"} className="hover:text-gray-800">
//               Find a Store
//             </Link>
//             <div className="w-[1px] h-[14px] bg-[#111111]"></div>
//             <Link href={"/Help"} className="hover:text-gray-800">
//               Help
//             </Link>
//             <div className="w-[1px] h-[14px] bg-[#111111]"></div>
//             <Link href={"/JoinUs"} className="hover:text-gray-800">
//               Join Us
//             </Link>
//             <div className="w-[1px] h-[14px] bg-[#111111] "></div>
//             <Link href={"/SignIn"} className="hover:text-gray-800">
//               Sign In
//             </Link>
//           </nav>
//         </div>
//       </header>


//       <header className="w-full h-[60px] flex justify-between items-center px-4 font-helvetica bg-[#FFFFFF]">
//       {/* Left Side - Logo */}
//       <div className="flex items-center">
//         <Link href={"/"}>
//         <img
//           src="/assets/Nike.png"
//           alt="Nike Logo"
//           className="w-[50px] h-[50px]"
//         />
//         </Link>
//       </div>

//       {/* Middle - Navigation Links */}
//       <nav className="hidden md:flex ml-44 space-x-4 text-[15px]">
//         <Link href="/Products" className="hover:text-gray-600">
//           New & Featured
//         </Link>
//         <Link href="/Products" className="hover:text-gray-600">
//           Men
//         </Link>
//         <Link href="/Products" className="hover:text-gray-600">
//           Women
//         </Link>
//         <Link href="/Products" className="hover:text-gray-600">
//           Kids
//         </Link>
//         <Link href="/Products" className="hover:text-gray-600">
//           Sale
//         </Link>
//         <Link href="/Products" className="hover:text-gray-600">
//           SNKRS
//         </Link>
//       </nav>

//       {/* Right Side - Search and Wishlist */}
//       <div className="hidden md:flex space-x-4 items-center">
//         {/* Search Bar */}
//         <div className="flex items-center">
//           <img
//             src="/assets/Search.png"
//             alt="Search Bar"
//             className="w-[180px] h-[40px]"
//           />
//         </div>

//         {/* Wishlist Icon */}
//         <div className="flex items-center">
//           <img
//             src="/assets/Heart.png"
//             alt="Wishlist Icon"
//             className="w-[36px] h-[36px]"
//           />
//           <Link href={"/Bag"}>
//             <img
//             src="/assets/Bag.png"
//             alt="Wishlist Icon"
//             className="w-[36px] h-[36px]"
//           />
//           </Link>
//         </div>
//       </div>

//       {/* Right Side - Menu Icon (Small Screens) */}
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? (
//             // Close Icon
//             <div className="w-[24px] h-[24px] flex items-center justify-center bg-gray-800 text-white rounded">
//               ✖
//             </div>
//           ) : (
//             // Menu Icon
//             <div className="w-[24px] h-[24px] flex flex-col justify-between bg-gray-800 text-white p-[2px] rounded">
//               <span className="block h-[2px] bg-white"></span>
//               <span className="block h-[2px] bg-white"></span>
//               <span className="block h-[2px] bg-white"></span>
//             </div>
//           )}
//         </button>
//       </div>

//       {/* Navigation Links - Dropdown Menu */}
//       {isMenuOpen && (
//         <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden">
//           <nav className="flex flex-col items-center space-y-4 p-4">
//             <Link href="/Products" className="hover:text-gray-600">
//               New & Featured
//             </Link>
//             <Link href="/Products" className="hover:text-gray-600">
//               Men
//             </Link>
//             <Link href="/Products" className="hover:text-gray-600">
//               Women
//             </Link>
//             <Link href="/Products" className="hover:text-gray-600">
//               Kids
//             </Link>
//             <Link href="/Products" className="hover:text-gray-600">
//               Sale
//             </Link>
//             <Link href="/Products" className="hover:text-gray-600">
//               SNKRS
//             </Link>
//             {/* Center - Search and Wishlist for Small Screens */}
//             <div className="flex flex-col items-center space-y-2 mt-4">
//               {/* Search Bar */}
//               <div className="flex items-center">
//                 <img
//                   src="/assets/Search.png"
//                   alt="Search Bar"
//                   className="w-[150px] h-[30px]"
//                 />
//               </div>
//               {/* Wishlist Icon */}
//               <div className="flex items-center">
//           <img
//             src="/assets/Heart.png"
//             alt="Wishlist Icon"
//             className="w-[36px] h-[36px]"
//           />
//           <Link href={"/Bag"}>
//             <img
//             src="/assets/Bag.png"
//             alt="Wishlist Icon"
//             className="w-[36px] h-[36px]"
//           />
//           </Link>
//         </div>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//     </>

//   )
// }


// --------------------------------------------------------------
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingCart, Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <header className="body-font bg-[#F5F5F5] h-[36px] pt-1">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
          {/* Logo and Icon Section */}
          <div className="flex items-center">
            <Image
              className="w-[24px] h-[24px]"
              width={24}
              height={24}
              src="/logo.png"
              alt="Icon"
            />
          </div>

          {/* Navigation Section */}
          <nav className="flex flex-wrap items-center text-sm text-[#111111] font-helvetica space-x-2 md:space-x-6">
            <Link href="/find-store" className="hover:text-gray-800">
              Find a Store
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111]"></div>
            <Link href="/help" className="hover:text-gray-800">
              Help
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111]"></div>
            <Link href="/join-us" className="hover:text-gray-800">
              Join Us
            </Link>
            <div className="w-[1px] h-[14px] bg-[#111111]"></div>
            <Link href="/login" className="hover:text-gray-800">
              Sign In
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Header */}
      <header className="w-full h-[60px] flex justify-between items-center px-4 font-helvetica bg-[#FFFFFF] relative">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/vector.png"
              alt="Nike Logo"
              width={58}
              height={58}
            />
          </Link>
        </div>

        {/* Middle - Navigation Links */}
        <nav className="hidden md:flex ml-44 space-x-4 text-[15px]">
          <Link href="/product" className="hover:text-gray-600">
            New & Featured
          </Link>
          <Link href="/product" className="hover:text-gray-600">
            Men
          </Link>
          <Link href="/product" className="hover:text-gray-600">
            Women
          </Link>
          <Link href="/product" className="hover:text-gray-600">
            Kids
          </Link>
          <Link href="/product" className="hover:text-gray-600">
            Sale
          </Link>
          <Link href="#/product" className="hover:text-gray-600">
            SNKRS
          </Link>
        </nav>

        {/* Right Side - Search and Wishlist */}
        <div className="hidden md:flex space-x-4 items-center">
          {/* Custom Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Wishlist and Cart Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/wishlist">
              <Heart className="w-6 h-6 text-gray-800 hover:text-gray-600" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-gray-600" />
            </Link>
          </div>
        </div>

        {/* Right Side - Menu Icon (Small Screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <div className="w-[24px] h-[24px] flex items-center justify-center bg-gray-800 text-white rounded">
                ✖
              </div>
            ) : (
              <div className="w-[24px] h-[24px] flex flex-col justify-between bg-gray-800 text-white p-[2px] rounded">
                <span className="block h-[2px] bg-white"></span>
                <span className="block h-[2px] bg-white"></span>
                <span className="block h-[2px] bg-white"></span>
              </div>
            )}
          </button>
        </div>

        {/* Navigation Links - Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white shadow-md md:hidden z-50">
            <nav className="flex flex-col items-center space-y-4 p-4">
              <Link href="/product" className="hover:text-gray-600">
                New & Featured
              </Link>
              <Link href="/product" className="hover:text-gray-600">
                Men
              </Link>
              <Link href="/product" className="hover:text-gray-600">
                Women
              </Link>
              <Link href="/product" className="hover:text-gray-600">
                Kids
              </Link>
              <Link href="/product" className="hover:text-gray-600">
                Sale
              </Link>
              <Link href="/product" className="hover:text-gray-600">
                SNKRS
              </Link>
              {/* Center - Search and Wishlist for Small Screens */}
              <div className="flex flex-col items-center space-y-2 mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="rounded-full bg-gray-100 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
                  />
                </div>
                <div className="flex space-x-4">
                  <Heart className="w-6 h-6 text-gray-800 hover:text-gray-600" />
                  <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-gray-600" />
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

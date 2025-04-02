const Navbar = () => {
  return (
    <div className="flex relative w-full overflow-hidden bg-[#f8e8d1]">
      <div className="w-full bg-red-500">
        <div className="h-14 shadow-lg"></div>
        <div className="h-full bg-[#F8E8D1] rounded-tr-2xl"></div>
      </div>
      <div className="text-freckle flex items-center text-3xl/6 rounded-b-xl py-1 h-fit tracking-tighter [-webkit-text-stroke:0.2px_black] px-2 bg-red-500 w-fit text-white [text-shadow:_-2px_2px_0_rgb(0_0_0_/_0.8)]">
        FAKE
        <br />
        FRIEND
        <br />
        FINDER
      </div>
      <div className="w-full bg-red-500">
        <div className="h-14"></div>
        <div className="h-full bg-[#F8E8D1] rounded-tl-2xl"></div>
      </div>
    </div>
  );
};

export default Navbar;

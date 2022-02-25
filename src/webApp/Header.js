function Header() {
  return (
    <>
      <div className="hidden md:block ">
        <div className="flex flex-row justify-between text-white font-semibold py-10">
          <div className=" w-1/5 text-2xl">Site.com</div>
          <div className="flex flex-row justify-between w-2/4">
            <div>Home</div>
            <div>Services</div>
            <div>About</div>
            <div>Contact Us</div>
          </div>
        </div>
      </div>

      <div className="block md:hidden py-5">
        <div className="flex flex-row justify-between items-center text-white">
        <div className=" w-1/5 text-2xl">Site.com</div>
          <div className=" text-2xl">=</div>
        </div>
      </div>
    </>
  );
}

export default Header;

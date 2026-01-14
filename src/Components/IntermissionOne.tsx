import intermissionOne from "../assets/intermissionwatch1.jpg";

const IntermissionOne = () => {
  return (
    <div className="h-[500px] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-20 bg-black"></div>
      <img
        src={intermissionOne}
        className="object-cover w-full top-0 z-10 fixed"
      />
    </div>
  );
};

export default IntermissionOne;

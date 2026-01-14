import fblogo from "../assets/fb.webp";
import iglogo from "../assets/ig.webp";

const Footer = () => {
  return (
    <div className=" font-medium bg-[#89986D] py-8">
      <div className="grid grid-cols-4 gap-6 px-40 justify-start">
        <div className="flex justify-start flex-col text-left gap-4">
          <div>About the shop</div>
          <div>
            Inspired Timepieces is a trusted 100% authentic luxury watch dealer
            in the Philippines.
          </div>
        </div>

        <div className="flex justify-start flex-col text-left gap-4">
          <div>Quick Links</div>
          <div className="flex gap-2 flex-col">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 overflow-hidden rounded-md shadow-md">
                <img src={fblogo} />
              </div>
              <a href="https://www.facebook.com">https://www.facebook.com/</a>
            </div>

            <a
              href="https://www.instagram.com/"
              className="flex gap-2 items-center"
            >
              <div className="w-10 h-10 overflow-hidden rounded-md shadow-md">
                <img src={iglogo} />
              </div>
              <div>https://www.instagram.com/</div>
            </a>
          </div>
        </div>

        <div className="flex justify-start flex-col text-left gap-4">
          <div>We are located at</div>
          <div className="flex gap-2 flex-col">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              labore distinctio, aliquid ut eveniet esse similique, iusto
              debitis nemo velit voluptate, iste inventore autem quasi.
              Consectetur veniam aspernatur officiis culpa?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

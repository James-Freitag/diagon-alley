import Image from "next/image";
import headerImg from "../../../public/diagon-alley-main.jpg";

const Header = () => {
  return (
    <section className="flex justify-center mx-auto pt-8 pb-16 z-50 ">
      <div className="relative">
        <p className="md:absolute z-10 bottom-1/3 left-6 md:max-w-[500px] mx-auto pb-2 md:pb-0">
          <span className="text-lg font-semibold text-[#D4AF37]">
            Welcome to Diagon Alley
          </span>
          , your one-stop shop for all things magical! From enchanted wands and
          high-speed broomsticks to the latest Weasleys' Wizard Wheezes, we
          bring the wizarding world right to your doorstep. Shop now and
          experience the magic—no Floo Powder required!
        </p>
        <div className="contrast-100 h-full w-full">
          <Image
            src={headerImg}
            alt="Diagon Alley Wide Shot"
            className="object-cover bg-cover bg-no-repeat md:max-h-[28rem] border-2 border-[#D4AF37] shadow-lg md:relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;

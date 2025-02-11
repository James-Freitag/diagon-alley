import Image from "next/image";
import weasleyShop from "../../../public/weasleys/weasley-shop.png";

const Weasleys = () => {
  return (
    <section className="min-h-screen flex justify-center mx-auto pt-8 pb-16 px-6 z-50">
      <div className="relative md:bg-black">
        <p className="md:absolute z-10 bottom-1/3 left-6 md:max-w-[500px] mx-auto pb-2 md:pb-0 text-[#f5f5e6]">
          <span className="text-lg font-semibold text-[#D4AF37]">
            Welcome to Weasleys' Wizard Wheezes
          </span>
          , the ultimate destination for magical mischief and enchanted pranks!
          From Skiving Snackboxes to Peruvian Instant Darkness Powder, our shop
          is packed with spellbinding tricks and joke products to surprise
          witches, wizards, and Muggles alike.
        </p>
        <div className="md:bg-black opacity-80 h-full w-full">
          <Image
            src={weasleyShop}
            alt="Weasleys joke shop store front"
            className="object-cover bg-cover bg-no-repeat md:max-h-[28rem] border-2 border-[#D4AF37] shadow-lg md:relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Weasleys;

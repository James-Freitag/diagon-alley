import Image from "next/image";
import Link from "next/link";
// Images
import owlPhoto from "../../../public/owls/owl1.jpg";
import broomPhoto from "../../../public/brooms/broom1.jpg";
import broomPhotoTwo from "../../../public/brooms/broom2.jpg";
import robePhoto from "../../../public/robes/slytherin-robe.jpg";
import wandPhoto from "../../../public/wands/wand7.jpg";
import fudgePhoto from "../../../public/weasleys/fever-fudge.png";

const Featured = () => {
  return (
    <section className="py-4 max-w-[90%] mx-auto">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6 mx-auto">
        <li className="h-full w-full">
          <Link href="/">
            <Image
              src={broomPhoto}
              alt="Broom photo"
              objectFit="cover"
              className="border-2 border-[#D4AF37] h-80 md:h-60 w-full shadow-lg object-cover bg-cover"
            />
          </Link>
        </li>
        <li className="h-full w-full">
          <Link href="/">
            <Image
              src={fudgePhoto}
              alt="Fudge photo"
              objectFit="cover"
              className="border-2 border-[#D4AF37] h-80 md:h-60 w-full shadow-lg object-cover bg-cover"
            />
          </Link>
        </li>
        <li className="h-full w-full">
          <Link href="/">
            <Image
              src={wandPhoto}
              alt="Wand Photo"
              objectFit="cover"
              className="border-2 border-[#D4AF37] h-80 md:h-60 w-full shadow-lg object-cover bg-cover"
            />
          </Link>
        </li>
        <li className="h-full w-full">
          <Link href="/">
            <Image
              src={robePhoto}
              alt="slytherin robe photo"
              objectFit="cover"
              className="border-2 border-[#D4AF37] h-80 md:h-60 w-full shadow-lg object-cover bg-cover"
            />
          </Link>
        </li>
        <li className="h-full w-full">
          <Link href="/">
            <Image
              src={owlPhoto}
              alt="Owl photo"
              objectFit="cover"
              className="border-2 border-[#D4AF37] h-80 md:h-60 w-full shadow-lg object-cover bg-cover"
            />
          </Link>
        </li>
        <li className="h-full w-full">
          <Link href="/">
            <Image
              src={broomPhotoTwo}
              alt="Broom photo"
              objectFit="cover"
              className="border-2 border-[#D4AF37] h-80 md:h-60 w-full shadow-lg object-cover bg-cover"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Featured;

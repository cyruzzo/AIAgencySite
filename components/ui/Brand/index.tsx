import Image from "next/image";
import logoDark from "public/logo-dark.svg";

export default () => (
  <>
    <div className="flex items-center gap-2 text-white">
      <Image src={logoDark} alt="TeraBrain logo" width={50} className="m-2" />
      <h3 className="text-xl">TeraBrain</h3>
    </div>
  </>
);

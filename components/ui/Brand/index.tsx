import Image from "next/image";
import logoDark from "public/logo-dark.svg";

export default () => (
  <>
    <div>
      <Image src={logoDark} alt="TeraBrain logo" width={50} className="m-2" />
    </div>
  </>
);

import Image from "next/image";

const Header = () => {
  return (
    <div className="header-component">
      <Image
        src="https://storage.googleapis.com/imatra_media/images/imatra_tunnus.png"
        alt="Image"
        width="238px"
        height="46px"
      />
    </div>
  );
};

export default Header;

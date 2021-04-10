import Image from "next/image";

const ImageComponent = ({ imageUrl }: { imageUrl?: string }) => {
  return (
    <>
      {imageUrl && (
        <div className="imageContainer">
          <Image
            layout="responsive"
            src={imageUrl}
            alt="Image"
            height="auto"
            width="auto"
            className="image123"
          />
        </div>
      )}
    </>
  );
};
export default ImageComponent;

const Description = ({
  description,
  localization,
}: {
  description?: any;
  localization: string;
}) => {
  return <>{description && <p>{description[localization]}</p>}</>;
};

export default Description;

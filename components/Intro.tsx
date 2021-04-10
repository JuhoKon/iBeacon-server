const Intro = ({
  intro,
  localization,
}: {
  intro?: any;
  localization: string;
}) => {
  return <>{intro && <p className="intro">{intro[localization]}</p>}</>;
};

export default Intro;

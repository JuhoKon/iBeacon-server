const Intro = ({ intro }: { intro?: string }) => {
  return <>{intro && <p className="intro">{intro}</p>}</>;
};

export default Intro;

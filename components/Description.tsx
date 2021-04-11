const Description = ({ description }: { description?: string }) => {
  return <>{description && <p>{description}</p>}</>;
};

export default Description;

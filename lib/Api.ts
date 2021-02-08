export const TestCall = async () => {
  const res = await fetch("http://worldtimeapi.org/api/ip");
  const json = await res.json();
  return json;
};

import { Input } from "@material-tailwind/react";

export const FormPer = ({ id, GrabValues, setGrabValues }: any) => {
  // This is form can be show more then one time it depends on passenger seats
  const UpdateValue = (id_string: string, value: any) => {
    let LocalArray = GrabValues;

    LocalArray[id][id_string] = value;

    setGrabValues(LocalArray);
  };
  return (
    <div className="FormPer">
      <h1>Pessenger {id + 1}</h1>
      <Input
        label="First Name"
        onChange={(e) => {
          UpdateValue("fname", e.target.value);
        }}
      />
      <Input
        label="Last Name"
        onChange={(e) => {
          UpdateValue("lname", e.target.value);
        }}
      />
      <Input
        label="Airport"
        onChange={(e) => {
          UpdateValue("airport", e.target.value);
        }}
      />
      <Input
        label="Purpose of flight"
        onChange={(e) => {
          UpdateValue("purpose", e.target.value);
        }}
      />
    </div>
  );
};

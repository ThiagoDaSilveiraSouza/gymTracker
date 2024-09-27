import { useState } from "react";
import { SerieType } from "../../../../types";

const formDefaultValues: SerieType = {
  id: "",
  exerciseList: [],
  name: "",
};

export const UseSereiesModal = () => {
  const [formValues, setFormValues] = useState(formDefaultValues);
  return { formValues };
};

import { ReactNode } from "react";
import RadioGroup from "../_components/radiogroup";

export default function Page(): ReactNode {
  return (
    <RadioGroup
      groupTitle="Select language"
      groupItems={["english", "urdu", "kashmiri"]}
      itemName="current-language"
    />
  );
}

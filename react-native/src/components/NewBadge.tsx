import { Image } from "react-native";

// imported as png instead of defining the component
// because no specs available in figma file regarding font etc.

export const NewBadge = () => (
  <Image
    style={{ width: 53, height: 26 }}
    source={require("../../assets/NewIcon.png")}
  />
);

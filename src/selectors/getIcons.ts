import icons from "../config/icons";

export default function getIcon(name: string) {
  for (let index = 0; index < icons.length; index++) {
    if (icons[index].name === name) {
      return icons[index].component;
    }
  }
}

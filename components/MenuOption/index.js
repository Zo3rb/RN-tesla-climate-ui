import Option from "../Option";

export default function MenuOption({ item }) {
  return <Option iconName={item.iconName} name={item.name} href={item.href} />;
}

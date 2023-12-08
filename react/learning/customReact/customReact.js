function render(element, container) {
  /* const tag = document.createElement(element.type);
  tag.innerHTML = element.value;
  tag.setAttribute("href", element.props.href);
  tag.setAttribute("target", element.props.target);
  container.appendChild(tag); */

  const tag = document.createElement(element.type);
  tag.innerHTML = element.children;
  for (const props in element.props) {
    if (props === "children") continue;
    tag.setAttribute(props, element.props[props]);
  }
  container.appendChild(tag);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://jagdish.vercel.app",
    target: "_blank",
  },
  children: "click here to go to website",
};
const root = document.querySelector("#root");

render(reactElement, root);

import "./styles/index.css";

const returnString: CallableFunction = (): string => "test";

console.log("webpack bundling " + returnString());

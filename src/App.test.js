import { render, screen } from "@testing-library/react";
import App from "./App";

it("muestra el posicionamiento profesional principal", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      name: /desarrollo productos digitales que resuelven trabajo real/i,
    })
  ).toBeInTheDocument();
});

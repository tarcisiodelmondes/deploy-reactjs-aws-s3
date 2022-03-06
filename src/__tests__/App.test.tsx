import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should have a text", () => {
    render(<App />);

    const text = screen.getByRole("heading", {
      name: "Deploy React Applications on AWS S3 with Github Actions",
    });

    expect(text).toBeInTheDocument();
  });
});

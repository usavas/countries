import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  await waitFor(() => {
    const buttonElement = screen.getByText(/Search/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("App component", () => {
  test("codesweetly test heading", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/codesweetly test/i);
  });

  test("a codesweetly project heading", async () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Update Heading" });

    userEvent.click(button);

    // Utilisez waitFor pour attendre que le titre soit mis à jour
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent(/a codesweetly project/i);
    }, { timeout: 3000 });
  });
});

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
// import App from "./App";

// describe("App component", () => {
//   test("codesweetly test heading", () => {
//     render(<App />);
//     expect(screen.getByRole("heading")).toHaveTextContent(/codesweetly test/i);
//   });

//   test("a codesweetly project heading", () => {
//     render(<App />);

//     const button = screen.getByRole("button", { name: "Update Heading" });

//     userEvent.click(button);

//     expect(screen.getByRole("heading")).toHaveTextContent(/a codesweetly project/i);
//   });
// });

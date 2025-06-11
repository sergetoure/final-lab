import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Header from "../header.jsx";

describe("Header", () => {
  it("opens github page on github icon click", () => {
    const openSpy = vi.fn();
    // jsdom has window.open - override
    window.open = openSpy;
    const { container } = render(<Header />);
    const githubIcon = container.querySelector('svg[data-icon="github"]');
    expect(githubIcon).toBeTruthy();
    fireEvent.click(githubIcon);
    expect(openSpy).toHaveBeenCalledWith(
      "https://github.com/serge-toure",
      "_blank"
    );
  });
});

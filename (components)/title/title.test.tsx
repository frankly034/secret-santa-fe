import { render } from "@testing-library/react";

import Title from ".";

describe("Title - Component", () => {
  it("renders title component", () => {
    const { container } = render(<Title>{"Gift a friend this holiday"}</Title>);
    expect(container).toMatchSnapshot();
  });

  it("renders single string child", () => {
    const { getByRole } = render(<Title>{"Gift"}</Title>);
    expect(getByRole("heading")).toBeTruthy;
  });

  it("should render last word with lastWordColor in a multiple string title", () => {
    const { getByText } = render(
      <Title lastWordColor="#ff0000">Gift a friend this holiday</Title>
    );
    expect(getByText("holiday").style.color).toEqual("rgb(255, 0, 0)");
  });

  it("should render single word title with preceeding color", () => {
    const { getByText } = render(
      <Title preceedingWordsColor="#00ff00" lastWordColor="#ff0000">
        Gift
      </Title>
    );
    expect(getByText("Gift").style.color).toEqual("rgb(0, 255, 0)");
  });

  it("should render preceeding texts and last word with appropriate colors", () => {
    const { getByText } = render(
      <Title preceedingWordsColor="#00ff00" lastWordColor="#ff0000">
        Gift a friend this holiday
      </Title>
    );
    expect(getByText("Gift a friend this").style.color).toEqual(
      "rgb(0, 255, 0)"
    );
    expect(getByText("holiday").style.color).toEqual("rgb(255, 0, 0)");
  });
});

import { render } from "@testing-library/react";

import Title from ".";
import { PaletteColor } from "../../theme/themeColour";

describe("Component - Title", () => {
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
      <Title secondaryColor={PaletteColor.white}>
        Gift a friend this holiday
      </Title>
    );
    expect(getByText("holiday").style.color).toEqual("rgb(255, 255, 255)");
  });

  it("should render single word title with preceeding color", () => {
    const { getByText } = render(
      <Title
        primaryColor={PaletteColor.yellow100}
        secondaryColor={PaletteColor.red100}
      >
        Gift
      </Title>
    );
    expect(getByText("Gift").style.color).toEqual("rgb(253, 211, 101)");
  });

  it("should render preceeding texts and last word with appropriate colors", () => {
    const { getByText } = render(
      <Title
        primaryColor={PaletteColor.white}
        secondaryColor={PaletteColor.red100}
      >
        Gift a friend this holiday
      </Title>
    );
    expect(getByText("Gift a friend this").style.color).toEqual(
      "rgb(255, 255, 255)"
    );
    expect(getByText("holiday").style.color).toEqual("rgb(241, 81, 86)");
  });
});

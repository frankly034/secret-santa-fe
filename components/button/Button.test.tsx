import { fireEvent, render } from "@testing-library/react";

import Button from ".";

describe("Component - Button", () => {
  let onClick: () => void;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it("renders button component", () => {
    const { container } = render(<Button>{"Click Me!"}</Button>);
    expect(container).toMatchSnapshot();
  });

  it("should render the default button with primary button class", () => {
    const { getByRole } = render(<Button>{"Click Me!"}</Button>);
    expect(getByRole("button").classList).toContain("primary");
  });

  it("should render the secondary button with secondary class", () => {
    const { getByRole } = render(
      <Button type="secondary">{"Click Me!"}</Button>
    );
    expect(getByRole("button").classList).toContain("secondary");
  });

  it("should fire the onClick function when clicked for active button", () => {
    const { getByRole } = render(
      <Button onClick={onClick} type="primary">
        {"Click Me!"}
      </Button>
    );

    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not fire the onClick function for disabled buttons", () => {
    const { getByRole } = render(
      <Button onClick={onClick} type="primary" disabled>
        {"Click Me!"}
      </Button>
    );

    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});

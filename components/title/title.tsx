import styles from "./title.module.css";

import { Typography } from "antd";
import { ComponentProps, FunctionComponent, ReactNode } from "react";

import { PaletteColor, ThemeColor } from "../../theme/themeColour";

const { Title: AntTitle } = Typography;

interface TitleProps extends Omit<ComponentProps<typeof AntTitle>, "children"> {
  children: ReactNode;
  primaryColor?: ThemeColor;
  secondaryColor?: ThemeColor;
}

type GetTitleContent = (args: TitleProps) => ReactNode;

const getTitleContent: GetTitleContent = ({
  children,
  primaryColor = PaletteColor.yellow100,
  secondaryColor,
}) => {
  if (
    secondaryColor &&
    typeof children === "string" &&
    children.lastIndexOf(" ") !== -1
  ) {
    const indexOfLastWord = children.lastIndexOf(" ");
    const lastWord = children.slice(indexOfLastWord);
    const preceedingWords = children.slice(0, indexOfLastWord);

    return (
      <>
        <span style={{ color: primaryColor }}>{preceedingWords}</span>
        <span style={{ color: secondaryColor }}>{lastWord}</span>
      </>
    );
  }

  return <span style={{ color: primaryColor }}>{children}</span>;
};

const Title: FunctionComponent<TitleProps> = ({
  children,
  level,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <AntTitle className={styles.title} level={level}>
      {getTitleContent({ children, primaryColor, secondaryColor })}
    </AntTitle>
  );
};

export default Title;

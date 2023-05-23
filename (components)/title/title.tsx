import styles from "./title.module.css";

import { Typography } from "antd";
import { ComponentProps, FunctionComponent, ReactNode } from "react";

const { Title: AntTitle } = Typography;

interface TitleProps extends Omit<ComponentProps<typeof AntTitle>, "children"> {
  children: ReactNode;
  lastWordColor?: string;
  preceedingWordsColor?: string;
}

type GetContent = (args: TitleProps) => ReactNode;

const getContent: GetContent = ({
  children,
  lastWordColor,
  preceedingWordsColor,
}) => {
  if (
    lastWordColor &&
    typeof children === "string" &&
    children.lastIndexOf(" ") !== -1
  ) {
    const indexOfLastWord = children.lastIndexOf(" ");
    const lastWord = children.slice(indexOfLastWord);
    const preceedingWords = children.slice(0, indexOfLastWord);

    return (
      <>
        <span style={{ color: preceedingWordsColor }}>{preceedingWords}</span>
        <span style={{ color: lastWordColor }}>{lastWord}</span>
      </>
    );
  }

  return <span style={{ color: preceedingWordsColor }}>{children}</span>;
};

const Title: FunctionComponent<TitleProps> = ({
  children,
  level,
  lastWordColor,
  preceedingWordsColor,
}) => {
  return (
    <AntTitle className={styles.title} level={level}>
      {getContent({ children, lastWordColor, preceedingWordsColor })}
    </AntTitle>
  );
};

export default Title;

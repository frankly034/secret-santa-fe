import styles from "./button.module.css";

import React, { ComponentProps, FunctionComponent, ReactNode } from "react";
import { Button as AntButton } from "antd";

declare const ButtonTypes: readonly ["primary", "secondary"];

type ButtonType = (typeof ButtonTypes)[number];

interface ButtonProps extends Omit<ComponentProps<typeof AntButton>, "type"> {
  children: ReactNode;
  type?: ButtonType;
}

const Button: FunctionComponent<ButtonProps> = ({
  block = true,
  children,
  type = "primary",
  ...props
}) => {
  return (
    <AntButton block={block} className={styles[type]} shape="round" {...props}>
      {children}
    </AntButton>
  );
};

export default Button;

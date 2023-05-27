import type { Preview } from "@storybook/react";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "primary-bg",
      values: [
        {
          name: "primary-bg",
          value: "#1D181A",
        },
        {
          name: "modal-bg",
          value: "#282627",
        },
        {
          name: "secondary-bg",
          value: "#3E4244",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

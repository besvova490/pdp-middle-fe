import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

// assets
import "../src/assets/styles/index.scss";
import "../src/assets/styles/storybook.scss";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

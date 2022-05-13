import type { NextPage } from "next";

import { Button, GlobalStyle, Icon, theme } from "@pikurate/ds-web";

import { ThemeProvider } from "@emotion/react";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button label={"hello"} size={"big"} />
      <Button
        icon={<Icon icon="logo_naver" />}
        size={"small"}
        theme={"active"}
        label={"Naver로 시작하기"}
        onClick={() => console.log("hi")}
      />
    </ThemeProvider>
  );
};

export default Home;

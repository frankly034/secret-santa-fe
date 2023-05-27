"use client";

import { Title } from "@/components";
import { PaletteColor } from "@/theme/themeColour";

export default function Home() {
  return (
    <main>
      <div>
        <Title
          primaryColor={PaletteColor.yellow100}
          secondaryColor={PaletteColor.red100}
        >
          {"Gift a friend this holiday"}
        </Title>
      </div>
    </main>
  );
}

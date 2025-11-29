// components/ui/tech-cloud/IconCloud.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs: string[];
  externalTheme?: "light" | "dark" | string;
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs, externalTheme }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme: providerTheme } = useTheme();
  // prefer externalTheme if provided, otherwise fallback to provider theme, then "light"
  const activeTheme = externalTheme ?? providerTheme ?? "light";

  useEffect(() => {
    let mounted = true;
    fetchSimpleIcons({ slugs: iconSlugs }).then((d) => {
      if (mounted) setData(d);
    });
    return () => {
      mounted = false;
    };
  }, [iconSlugs]);

  // re-compute icons when data or activeTheme changes
  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, String(activeTheme)),
    );
  }, [data, activeTheme]);

  // Using key forces remount if activeTheme changes — optional but robust
  return (
    // @ts-ignore
    <Cloud {...cloudProps} key={String(activeTheme)}>
      <>{renderedIcons}</>
    </Cloud>
  );
}

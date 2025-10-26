import type { FC, PropsWithChildren } from "react";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	// You can still wrap the children with other providers, Like `next-themes`, `react-query`, `framer-motion`, etc.
	<>{children}</>
);

export default RootLayout;

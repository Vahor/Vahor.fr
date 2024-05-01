import { Header } from "@/components/header/header";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Vahor",
		template: "%s | Vahor",
	},
	description: "yey",
	metadataBase: new URL("https://vahor.fr"),
	creator: "Nathan David",
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "/",
	},
	authors: [
		{
			name: "Nathan David",
			url: "https://vahor.fr",
		},
	],
	twitter: {
		creator: "@vahor_",
		card: "summary",
	},
	openGraph: {
		locale: "fr_FR",
		siteName: "Vahor",
	},
	icons: [
		{ rel: "icon", url: "/favicon.ico" },
		{ rel: "apple-touch-icon", url: "/apple-icon.png" },
		{ rel: "icon", sizes: "192x192", url: "/android-chrome-192x192.png" },
		{ rel: "icon", sizes: "512x512", url: "/android-chrome-512x512.png" },
	],
};

export const viewport: Viewport = {
	colorScheme: "dark light",
	initialScale: 1,
	minimumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body className={cn(inter.className)}>
				<Providers>
					<Header />
					{children}
				</Providers>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}

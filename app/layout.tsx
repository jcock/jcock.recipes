import type { ReactNode } from 'react';
import Script from 'next/script';
import Layout from '~/components/layout/layout';
import { Provider } from '~/components/util/providers';
import { inter, lora } from '~/styles/fonts';
import { siteMetadata, siteViewport } from '~/lib/seo';
import site from '~/data/site.json';
import '~/styles/app.css';

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function AppLayout({ children }: { children: ReactNode }) {
	const gtmId = site.analytics.gtmId;
	return (
		<html
			lang="en-US"
			suppressHydrationWarning
			className={`${inter.variable} ${lora.variable}`}
			data-scroll-behavior="smooth"
		>
			<body>
				<Provider>
					<Layout>{children}</Layout>
				</Provider>
				{process.env.NODE_ENV === 'production' && gtmId.startsWith('GTM-') && (
					<Script
						id="google-tag-manager"
						strategy="afterInteractive"
					>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}</Script>
				)}
			</body>
		</html>
	);
}

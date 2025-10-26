import { getHTMLTextDir } from "intlayer";
import { Inter } from "next/font/google";
import type { NextLayoutIntlayer } from "next-intlayer";
import { IntlayerClientProvider } from "next-intlayer";

export { generateStaticParams } from "next-intlayer";

const inter = Inter({ subsets: ["latin"] });

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params;
  return (
    <IntlayerClientProvider locale={locale}>
      <html lang={locale} dir={getHTMLTextDir(locale)}>
        <body className={inter.className}>{children}</body>
      </html>
    </IntlayerClientProvider>
  );
};

export default LocaleLayout;





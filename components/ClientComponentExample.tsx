"use client";

import { useIntlayer } from "next-intlayer";
import type { FC } from "react";

export const ClientComponentExample: FC = () => {
	const content = useIntlayer("client-component-example");

	return (
		<div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
			<h2 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
				{content.title.value}
			</h2>
			<p className="text-green-800 dark:text-green-200">
				{content.content.value}
			</p>
		</div>
	);
};





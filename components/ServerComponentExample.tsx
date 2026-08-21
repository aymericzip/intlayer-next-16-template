import { useIntlayer } from "next-intlayer/server";
import type { FC } from "react";

export const ServerComponentExample: FC = () => {
  const content = useIntlayer("server-component-example");

  return (
    <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
      <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
        {content.title}
      </h2>
      <p className="text-blue-800 dark:text-blue-200 mb-4">
        {content.description}
      </p>
      <div className="space-y-2">
        <p className="font-medium text-blue-900 dark:text-blue-100">
          {content.features}
        </p>
        <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
          <li>{content.feature1}</li>
          <li>{content.feature2}</li>
          <li>{content.feature3}</li>
        </ul>
      </div>
    </div>
  );
};

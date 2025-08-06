import React from "react";
//import { useTranslation } from "../hooks/useTranslation";
import { useTranslation } from "../../hooks/useTranslation";
import { useSelector } from "react-redux";

export default function DebugTranslation() {
  const { t } = useTranslation();
  const { currentLanguage } = useSelector((state) => state.language);

  const tests = {
    navbar_home: t("navbar.home"),
    navbar_about: t("navbar.about"),
    featuresList: t("featuresList"),
    steps: t("steps"),
    enterprise: t("enterprise"),
    pages_featuresList: t("pages.featuresList"),
    pages_steps: t("pages.steps"),
    pages_enterprise: t("pages.enterprise"),
    about_title: t("pages.about.title"),
    features_title: t("pages.about.features.title"),
  };

  return (
    <div className="p-8 bg-yellow-100 border border-yellow-400 m-4 rounded">
      <h2 className="text-2xl font-bold mb-4">🔍 Translation Debug</h2>

      <div className="mb-4">
        <p>
          <strong>Current Language:</strong> {currentLanguage}
        </p>
        <p>
          <strong>Translation Function:</strong> {typeof t}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(tests).map(([key, value]) => (
          <div key={key} className="bg-white p-3 rounded border">
            <strong>{key}:</strong>
            <br />
            <code className={value ? "text-green-600" : "text-red-600"}>
              {JSON.stringify(value) || "undefined"}
            </code>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-100 rounded">
        <h3 className="font-bold">Instructions:</h3>
        <ol className="list-decimal list-inside">
          <li>Check which values show "undefined"</li>
          <li>Look for the correct path that returns data</li>
          <li>Use that path in your components</li>
        </ol>
      </div>
    </div>
  );
}

"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: React.ReactNode;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  onChange?: (tabId: string) => void;
};

export function Tabs({ tabs, defaultTab, className, onChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) {
      onChange(tabId);
    }
  };

  return (
    <div className={className}>
      <div className="bg-white border border-gray-200 rounded-md p-1 inline-flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium",
              activeTab === tab.id
                ? "bg-orange-50 text-orange-600"
                : "text-gray-700 hover:bg-gray-100"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tabs.map((tab) => (
          <div key={tab.id} className={cn(activeTab !== tab.id && "hidden")}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

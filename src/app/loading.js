"use client";

import OvalSpinner from "@/components/layout/OvalSpinner";

export default function Loading() {
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#ffffff",
        display: "flex",
        inset: 0,
        justifyContent: "center",
        position: "fixed",
        zIndex: 10000,
      }}
    >
      <OvalSpinner />
    </div>
  );
}

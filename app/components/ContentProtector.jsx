"use client";

import { useEffect, useState } from "react";

export default function ContentProtector({ watermarkText = "CONFIDENTIAL" }) {
  const [alertMode, setAlertMode] = useState(false);
  const [winKeyPressed, setWinKeyPressed] = useState(false);

  useEffect(() => {
    const triggerAlert = () => {
      setAlertMode(true);
      setTimeout(() => setAlertMode(false), 2000);
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      triggerAlert();
    };

    const handleKeyDown = (e) => {
      // If Windows key is pressed → reload instantly
      if (e.key === "Meta" || e.key === "OS") {
        setWinKeyPressed(true);
        window.location.reload();
      }

      // Block DevTools & View Source
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        triggerAlert();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "Meta" || e.key === "OS") {
        setWinKeyPressed(false);
      }
    };

    // Keep checking if Win key is stuck down (e.g., hardware key held)
    const interval = setInterval(() => {
      if (winKeyPressed) {
        window.location.reload();
      }
    }, 200); // check every 200ms

    const handleBlur = () => {
      triggerAlert(); // Switching away or screenshot
    };

    // Detect extension injections
    const detectExtension = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (
            node.tagName === "SCRIPT" ||
            node.tagName === "LINK" ||
            node.tagName === "STYLE"
          ) {
            triggerAlert();
          }
        }
      }
    });

    document.body.style.userSelect = "none";
    window.addEventListener("blur", handleBlur);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    detectExtension.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.body.style.userSelect = "auto";
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      clearInterval(interval);
      detectExtension.disconnect();
    };
  }, [winKeyPressed]);

  if (!alertMode) return null;

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(255,0,0,0.25) 0px,
          rgba(255,0,0,0.25) 1px,
          transparent 1px,
          transparent 50px
        )`,
        backgroundSize: "200px 200px",
        color: "rgba(255,0,0,0.4)",
        fontSize: "5rem",
        fontWeight: "bold",
        textAlign: "center",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "rotate(-30deg)",
        backdropFilter: "blur(10px)",
        transition: "opacity 0.3s ease",
      }}
    >
      {watermarkText}
    </div>
  );
}

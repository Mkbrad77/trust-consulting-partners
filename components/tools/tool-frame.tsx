"use client";

import { useEffect, useRef, useState } from "react";

type ToolMessage = { type?: string; height?: number };

/**
 * Affiche un outil autonome (fichier HTML de public/outils) dans la page du site.
 * L'outil transmet sa hauteur par postMessage : la page grandit avec lui, sans double barre de défilement.
 */
export function ToolFrame({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(900);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      if (event.source !== ref.current?.contentWindow) return;
      const data = event.data as ToolMessage | null;
      if (data?.type === "tcp-tool-height" && typeof data.height === "number") {
        setHeight(Math.max(600, Math.ceil(data.height)));
      }
      if (data?.type === "tcp-tool-scroll-top") {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      style={{ height }}
      className="block w-full scroll-mt-28 rounded-2xl border border-border bg-white"
    />
  );
}

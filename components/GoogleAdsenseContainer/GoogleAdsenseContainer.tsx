import { useEffect } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}
export function GoogleAdsenseContainer({
  client,
  slot,
}: {
  client: string;
  slot: string;
}) {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  const AdContainer = styled.div`
    min-width: 320px;
    margin: auto;
    text-align: center;
    ins.adsbygoogle[data-ad-status="unfilled"] {
      display: none !important;
    }
  `;

  return (
    <AdContainer>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </AdContainer>
  );
}

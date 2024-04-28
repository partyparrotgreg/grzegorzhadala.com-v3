"use client";

import { getBlock } from "./get-block";

export const FadeContent = ({ record }: { record: any }) => {
  return <>{getBlock(record)}</>;
};

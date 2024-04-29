"use client";

import { getBlock } from "../blocks/get-block";

export const FadeContent = ({ record }: { record: any }) => {
  return <>{getBlock(record)}</>;
};

"use client";

import { SectionTitle } from "../typography/section-title";


export function ExperienceList() {
  return (
    <div className="flex flex-col">
      <SectionTitle>Experience</SectionTitle>
      <div className="flex flex-col">
        {Array.from({ length: 24 }).map((_, i) => (
          <TempCard key={i} />
        ))}
      </div>
    </div>
  );
}

const TempCard = () => {
  return (
    <div className="content-padding border-border border-b flex flex-row gap-6">
      <div className="font-semibold">Senior Product Designerd</div>
      <div>FreeBird / Chicago (remote) / Nov 2019 — Mar 2020</div>
      <div className="text-sm">
        A bunch of friends teaming up and trying to build a startup from a
        simple need. I was in charge of the visual and experience direction of
        the app and system for venue owners.
      </div>
    </div>
  );
};

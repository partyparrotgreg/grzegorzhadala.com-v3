import { SkillRecord } from "@/gql/graphql";
import { Badge } from "../ui/badge";

export const SkillsRender = ({ skills }: { skills: SkillRecord[] }) => {
  return (
    <div className="justify-start items-start gap-2 flex flex-wrap">
      {skills.map(({ id, name }) => (
        <Badge key={id}>{name}</Badge>
      ))}
    </div>
  );
};

import { SkillRecord } from "@/gql/graphql";
import { Badge } from "../ui/badge";

export const SkillsRender = ({ skills }: { skills: SkillRecord[] }) => {
  return (
    <div className="justify-start items-start gap-2 flex -ml-1 flex-wrap">
      {skills.map(({ id, name }) => (
        <Badge variant={"outline"} key={id}>
          {name}
        </Badge>
      ))}
    </div>
  );
};

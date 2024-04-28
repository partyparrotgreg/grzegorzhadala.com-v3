import { SkillRecord } from "@/gql/graphql";
import { Fade } from "react-awesome-reveal";
import { Badge } from "../ui/badge";

export const SkillsRender = ({ skills }: { skills: SkillRecord[] }) => {
  return (
    <div className="justify-start items-start gap-px inline-flex flex-wrap leading-4">
      <Fade direction="up" triggerOnce cascade damping={0.1} delay={500}>
        {skills.map(({ id, name }) => (
          <Badge key={id}>{name}</Badge>
        ))}
      </Fade>
    </div>
  );
};

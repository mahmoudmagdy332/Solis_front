import { project } from "../../app/utils/types/types";

export default function Tabs({ projects, setter, current }: { projects: {data:project[]}, setter: React.Dispatch<React.SetStateAction<number|undefined>>, current: number }) {
  return (
    <ul className="flex items-center justify-center gap-4 list-none">
      {projects.data.map((project, i) => (
        <li key={i} onClick={() => setter(project.id)} className={"cursor-pointer transition duration-300 border border-black px-4 py-2 text-black hover:text-white hover:bg-black rounded-lg" + (
          project.id === current ? " text-white bg-black" : ""
        )}>
          {project.name}
        </li>
      ))}
    </ul>
  );
};

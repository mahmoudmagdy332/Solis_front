export default function Tabs({ projects, setter, current }: { projects: string[], setter: React.Dispatch<React.SetStateAction<number>>, current: number }) {
  return (
    <ul className="flex items-center gap-4 list-none">
      {projects.data.map((project: unknown, i: number) => (
        <li key={i} onClick={() => setter(project.id)} className={"cursor-pointer transition text-gray-900 hover:text-lime-800 underline-on-hover" + (
          project.id === current ? " after:scale-100 after:bg-lime-900 text-lime-800" : ""
        )}>
          {project.name}
        </li>
      ))}
    </ul>
  );
};

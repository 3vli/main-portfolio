import { BsGithub } from "react-icons/bs";
import { PROJECTS } from "../constants";
import { RiVercelFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-8">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {PROJECTS.map((proj, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] bg-neutral-950 shadow-md shadow-purple-400 rounded-2xl border-4 border-neutral-800 p-4 transition-transform hover:scale-105"
           >
            <img src={proj.image} alt="" className="w-full mb-3 border-b border-neutral-700" />
            <div className="flex justify-end gap-2">
              <a className="px-2 py-1 rounded text-neutral-400 bg-neutral-800 " href={proj.gitlink}><BsGithub/></a>
              <a className="px-2 py-1 rounded text-neutral-400 bg-neutral-800 " href={proj.vercellink}><RiVercelFill/></a>
            </div>
            <h3 className="text-xl font-bold">{proj.title}</h3>
              <p className="text-neutral-400 my-2">{proj.description}</p>
              <div className="flex flex-wrap gap-1">
              {proj.technologies.map((tech, index) => (
                 <span key={index} className=" rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 ">{tech} </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

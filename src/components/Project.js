import blog from "../assets/img/blog.png";
import res from "../assets/img/res.png";
import keeper from "../assets/img/keeper.png";
import myntra from "../assets/img/myntra.png";
import ProjectCard from "./ProjectCard";

export const Project = () => {
  const projects = [
    {
      title: "Restaurant-App",
      text: "Fully Responsive Modern Resturant application. I have built this website with modern UI/UX in React.js.",
      imgsrc: res,
      source: "https://github.com/phenomenon5/restaurant-web-app",
    },
    {
      title: "Myntra-app-clone",
      text: "Created Myntra app clone using Reactjs.It is a e-commerce website.I have also used redux toolkit for state management.",
      imgsrc: myntra,
      source: "https://github.com/phenomenon5/myntra-app-clone",
    },
    {
      title: "Keeper-App",
      text: "Made a note-making service that allows user to store notes and delete them.I used React.js to built this app. ",
      imgsrc: keeper,
      source: "https://github.com/phenomenon5/Keeper-app",
    },
    {
      title: "Blog Website",
      text: "Made a user friendly blog app using MERN stack.We can register,login,add,update,delete and read posts.It also have a setting page where we can change our profile information.",
      imgsrc: blog,
      source: "https://github.com/phenomenon5/Blog-app",
    },
  ];

  return (
    <section className="skill" id="projects">
      <h2 className="project-hd">Projects</h2>

      <div className="project-bx">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </section>
  );
};

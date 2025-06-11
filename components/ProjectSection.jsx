import ProjectCard from "./ProjectCard";
const ProjectSection = ()=>{
    const projects = [
        {
            title: "React Space",
            description: "Description for project four goes here.",
            image:"../src/assets/img01.jpg"
        },
        {
            title: "Project Two",
            description: "Description for project four goes here.",
            image: "../src/assets/img01.jpg"
        },
        {
            title: "Project Three",
            description: "Description for project three goes here.",
            image: "../src/assets/img01.jpg"
        },
        {
            title: "Project Four",
            description: "Description for project four goes here.",
            image:"../src/assets/img01.jpg"
        }
    ];

    return (
        <>
        <section className="project" id="project">

            <h1>Feature Projects</h1>
            <div className="project-cards">
              { projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}  
                />
              )) }
            </div>
        </section>
        </>
    )
}


export default ProjectSection;
import { stacks, skills } from "../assets/constants";
function Skills() {
  return (
    <div className="skills-container">
      <div className="section-header">
        <section>
          <img src="images/dave.jpg" alt="" className="object-cover" />
        </section>
        <h1>Skills and Stacks</h1>
      </div>

      <div className="my-5 md:flex justify-center gap-5">
        {/* stack card */}
        <section className="card">
          <h1 className="text-4xl font-semibold text-heading">Stack</h1>
          <section>
            {stacks.map((stack, index) => (
              <div key={index}>
                <stack.icon className="text-4xl" />
                {stack.title}
              </div>
            ))}
          </section>
        </section>

        {/* skills card */}
        <section className="card">
          <h1 className="text-4xl font-semibold text-heading">Skills</h1>
          <section>
            {skills.map((skill, index) => (
              <div key={index}>
                <skill.icon className="text-4xl" />
                {skill.title}
              </div>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
}

export default Skills;

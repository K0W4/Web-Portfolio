import React from 'react';

import { skills } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text text-white">
        Hello, I'm <span className="orange-gradient_text font-semibold drop-shadow">Gabriel Kowaleski</span>!
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-white">
        <p>
        A Software Engineer, born in Brazil, undergraduate student, seeking specialization in front-end technologies and as a game developer.</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text text-white">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back shadow-o rounded-xl bg-orange-800"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  )
}

export default About
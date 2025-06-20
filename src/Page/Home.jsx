import React from 'react'
import Hero from '../Component/Hero'
import SkillsSection from '../Component/SkillSection'
import ExperienceSection from '../Component/ExperienceSection'
import WorkProcess from '../Component/WorkProcess'
import ContactSection from '../Component/ContactSection'

export default function Home() {
  return (
    <div>
        <Hero></Hero>
        <SkillsSection></SkillsSection>
        <ExperienceSection></ExperienceSection>
        <WorkProcess></WorkProcess>
        <ContactSection></ContactSection>

    </div>
  )
}

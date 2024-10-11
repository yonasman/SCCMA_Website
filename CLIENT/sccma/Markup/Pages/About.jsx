import AboutUsTop from "../Components/AboutUsTop/AboutUsTop"
import GoalWrapper from "../Components/GoalWrapper/GoalWrapper"
import MissionWrapper from "../Components/MissionWrapper/MissionWrapper"
import Story from "../Components/Story/Story"
import TeamCardWrapper from "../Components/TeamCardWrapper/TeamCardWrapper"
import Volunteer from '../Components/Volunteer/Volunteer'

function About() {
  return (
    <>
        <AboutUsTop/>
        <Story/>
        <MissionWrapper/>
        <GoalWrapper/>
        <TeamCardWrapper/>
        <Volunteer/>
    </>
  )
}

export default About

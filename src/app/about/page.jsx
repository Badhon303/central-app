import Container from "@/components/Container"
import Lamp from "@/components/Lamp"
import AboutSection from "@/components/AboutSection"
import { Button } from "@/components/ui/button"
import { BackgroundBoxesDemo } from "@/components/BackgroundBox"

export default function About() {
  return (
    <div className="">
      {/* <Lamp /> */}
      <BackgroundBoxesDemo title={"About"}/>
      <AboutSection/>
    </div>
  )
}

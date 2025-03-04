import Container from "@/components/Container"
import Lamp from "@/components/Lamp"
import NewsAndEventsSection from "@/components/NewsAndEventsSection"
import { Button } from "@/components/ui/button"
import { BackgroundBoxesDemo } from "@/components/BackgroundBox"

export default function About() {
  return (
    <div className="">
      {/* <Lamp /> */}
      <BackgroundBoxesDemo title={"News And Events"}/>
      <NewsAndEventsSection/>
    </div>
  )
}

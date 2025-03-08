import { BackgroundBoxesDemo } from "@/components/BackgroundBox"
import FAQSection from "@/components/FAQSection"
import ProductSection from "@/components/ProductSection"
import { Button } from "@/components/ui/button"

export default function Product() {
  return (
    <div className="">
      {/* <Lamp /> */}
      <BackgroundBoxesDemo title={"Product"}/>
      <ProductSection />
    </div>
  )
}

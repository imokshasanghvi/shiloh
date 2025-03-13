import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CategoryShowcaseProps {
  title: string
  description: string
  image: string
  link: string
}

export default function CategoryShowcase({ title, description, image, link }: CategoryShowcaseProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={600}
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <Button asChild className="w-full bg-shiloh-blue text-white hover:bg-shiloh-blue/90">
          <Link href={link}>Shop Now</Link>
        </Button>
      </div>
    </div>
  )
}


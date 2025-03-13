import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

// Mock products data
const allProducts = [
  {
    id: "1",
    name: "Classic Oxford Shirt",
    price: 120000,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
  },
  {
    id: "2",
    name: "Elegant Summer Dress",
    price: 160000,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
  },
  {
    id: "3",
    name: "Premium Leather Sneakers",
    price: 260000,
    image: "/placeholder.svg?height=400&width=300",
    category: "footwear",
  },
  {
    id: "4",
    name: "Slim Fit Jeans",
    price: 140000,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
  },
  {
    id: "5",
    name: "Silk Blouse",
    price: 140000,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
  },
  {
    id: "6",
    name: "Classic Leather Boots",
    price: 320000,
    image: "/placeholder.svg?height=400&width=300",
    category: "footwear",
  },
  {
    id: "7",
    name: "Kids Cartoon T-Shirt",
    price: 40000,
    image: "/placeholder.svg?height=400&width=300",
    category: "kids",
  },
  {
    id: "8",
    name: "Kids School Uniform",
    price: 45000,
    image: "/placeholder.svg?height=400&width=300",
    category: "kids",
  },
]

interface RelatedProductsProps {
  category: string
  currentProductId: string
}

export default function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  // Filter products by category and exclude current product
  const relatedProducts = allProducts
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 4)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {relatedProducts.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={400}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-2">
                <Button size="icon" className="rounded-full bg-white text-black hover:bg-gray-200">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
                <Button size="icon" className="rounded-full bg-white text-black hover:bg-gray-200">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                <Link href={`/product/${product.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">TSh {product.price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  )
}


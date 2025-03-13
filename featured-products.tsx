import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Classic Oxford Shirt",
    price: 120000,
    image: "/placeholder.svg?height=400&width=300",
    category: "men",
    isNew: true,
    isSale: false,
  },
  {
    id: 2,
    name: "Elegant Summer Dress",
    price: 160000,
    originalPrice: 200000,
    image: "/placeholder.svg?height=400&width=300",
    category: "women",
    isNew: false,
    isSale: true,
  },
  {
    id: 3,
    name: "Premium Leather Sneakers",
    price: 260000,
    image: "/placeholder.svg?height=400&width=300",
    category: "footwear",
    isNew: true,
    isSale: false,
  },
  {
    id: 4,
    name: "Kids Cartoon T-Shirt",
    price: 40000,
    image: "/placeholder.svg?height=400&width=300",
    category: "kids",
    isNew: true,
    isSale: false,
  },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={400}
              className="h-full w-full object-cover object-center"
            />
            {product.isNew && <Badge className="absolute top-2 left-2 bg-black text-white">New</Badge>}
            {product.isSale && <Badge className="absolute top-2 left-2 bg-red-600 text-white">Sale</Badge>}
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
            <div className="text-sm font-medium text-gray-900">
              {product.originalPrice ? (
                <div className="flex flex-col items-end">
                  <span className="text-red-600">TSh {product.price.toLocaleString()}</span>
                  <span className="text-gray-500 line-through text-xs">
                    TSh {product.originalPrice.toLocaleString()}
                  </span>
                </div>
              ) : (
                <span>TSh {product.price.toLocaleString()}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


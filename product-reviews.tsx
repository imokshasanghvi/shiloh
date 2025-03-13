"use client"

import { useState } from "react"
import { Star, ThumbsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

// Mock reviews data
const reviews = [
  {
    id: 1,
    author: "JD",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 months ago",
    title: "Excellent quality and fit",
    content:
      "I'm extremely pleased with this purchase. The material is high quality and the fit is perfect. I've received many compliments when wearing it. Highly recommend!",
    helpful: 24,
    isHelpful: false,
  },
  {
    id: 2,
    author: "SM",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "1 month ago",
    title: "Great product, slightly large",
    content:
      "The quality is excellent and I love the design. My only issue is that it runs slightly large. I would recommend sizing down if you're between sizes. Otherwise, it's a great addition to my wardrobe.",
    helpful: 12,
    isHelpful: false,
  },
  {
    id: 3,
    author: "MT",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 3,
    date: "3 weeks ago",
    title: "Good but not great",
    content:
      "The product is decent for the price. The material is comfortable but not as durable as I expected. It's good for occasional wear but I'm not sure how well it will hold up over time.",
    helpful: 8,
    isHelpful: false,
  },
]

interface ProductReviewsProps {
  productId: string
  rating: number
  reviewCount: number
}

export default function ProductReviews({ productId, rating, reviewCount }: ProductReviewsProps) {
  const [activeReviews, setActiveReviews] = useState(reviews)

  const handleHelpful = (reviewId: number) => {
    setActiveReviews(
      activeReviews.map((review) =>
        review.id === reviewId
          ? {
              ...review,
              helpful: review.isHelpful ? review.helpful - 1 : review.helpful + 1,
              isHelpful: !review.isHelpful,
            }
          : review,
      ),
    )
  }

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0]
  reviews.forEach((review) => {
    ratingCounts[5 - review.rating]++
  })

  const ratingPercentages = ratingCounts.map((count) => (count / reviews.length) * 100)

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold">{rating.toFixed(1)}</h3>
            <div className="flex my-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : i < rating
                        ? "text-yellow-400 fill-yellow-400 opacity-50"
                        : "text-black"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-black">Based on {reviewCount} reviews</p>

            <div className="w-full mt-6 space-y-2">
              {[5, 4, 3, 2, 1].map((star, index) => (
                <div key={star} className="flex items-center gap-2">
                  <div className="flex items-center w-12">
                    <span>{star}</span>
                    <Star className="h-4 w-4 ml-1 text-black" />
                  </div>
                  <Progress value={ratingPercentages[index]} className="h-2" />
                  <span className="text-sm text-black w-12">{ratingCounts[index]}</span>
                </div>
              ))}
            </div>

            <Button className="mt-8 w-full bg-shiloh-blue text-white hover:bg-shiloh-blue/90">Write a Review</Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Customer Reviews</h3>
            <Select defaultValue="recent">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="highest">Highest Rated</SelectItem>
                <SelectItem value="lowest">Lowest Rated</SelectItem>
                <SelectItem value="helpful">Most Helpful</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-6">
            {activeReviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.author} />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{review.author}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-black"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-black">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h5 className="font-medium">{review.title}</h5>
                  <p className="mt-2 text-black">{review.content}</p>
                </div>

                <div className="mt-4 flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-xs flex items-center gap-1 ${review.isHelpful ? "text-shiloh-blue" : "text-black"}`}
                    onClick={() => handleHelpful(review.id)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">Leave a Review</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} className="text-black hover:text-yellow-400">
                      <Star className="h-6 w-6" />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Review Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Summarize your experience"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Review</label>
                <Textarea placeholder="Share your experience with this product" className="min-h-[100px]" />
              </div>
              <Button className="bg-shiloh-blue text-white hover:bg-shiloh-blue/90">Submit Review</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


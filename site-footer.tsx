import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-shiloh-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SHILOH</h3>
            <p className="text-white mb-4">
              Your premier destination for fashion and style. Discover the latest trends in men's, women's, kids', and
              footwear.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/men" className="text-white hover:text-white">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link href="/category/women" className="text-white hover:text-white">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link href="/category/kids" className="text-white hover:text-white">
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link href="/category/footwear" className="text-white hover:text-white">
                  Footwear Collection
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-white hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-white hover:text-white">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-white hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-white hover:text-white">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-white hover:text-white">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-white hover:text-white">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">&copy; {new Date().getFullYear()} SHILOH. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-8" />
            <img src="/placeholder.svg?height=30&width=50" alt="Apple Pay" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  )
}


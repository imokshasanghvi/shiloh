import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Shiloh</h1>
          <p className="text-black max-w-3xl mx-auto">
            Bringing quality fashion to Tanzania since 2010. We're committed to providing stylish, affordable clothing
            for the whole family.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-black mb-4">
              Shiloh was founded in 2010 with a simple mission: to bring high-quality, affordable fashion to Tanzania.
              What started as a small boutique in Dar es Salaam has grown into one of the country's leading fashion
              retailers.
            </p>
            <p className="text-black mb-4">
              Our founder, XYZ, noticed a gap in the market for stylish yet affordable clothing that catered to local
              tastes while embracing global fashion trends. With determination and a passion for fashion, she
              established Shiloh to bridge this gap.
            </p>
            <p className="text-black">
              Today, we proudly serve thousands of customers across Tanzania, offering a wide range of clothing and
              footwear for men, women, and children. Our commitment to quality, style, and customer satisfaction remains
              at the heart of everything we do.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=600" alt="Shiloh store" fill className="object-cover" />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-shiloh-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-shiloh-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-black">
                We're committed to providing high-quality products that are durable, comfortable, and made to last. We
                carefully select our materials and maintain strict quality control standards.
              </p>
            </div>
            <div className="bg-shiloh-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-shiloh-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m16 10-4 4-2-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordability</h3>
              <p className="text-black">
                We believe that fashion should be accessible to everyone. That's why we work hard to offer stylish
                products at prices that won't break the bank, without compromising on quality.
              </p>
            </div>
            <div className="bg-shiloh-light p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-shiloh-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-black">
                We're proud to be a Tanzanian business that contributes to the local economy. We support local suppliers
                whenever possible and are committed to giving back to our community.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "XYZ", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
              { name: "ABC", role: "Chief Operations Officer", image: "/placeholder.svg?height=300&width=300" },
              { name: "PQR", role: "Head of Design", image: "/placeholder.svg?height=300&width=300" },
              { name: "MNO", role: "Marketing Director", image: "/placeholder.svg?height=300&width=300" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-[200px] w-[200px] rounded-full overflow-hidden mx-auto mb-4">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-black">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: "Dar es Salaam", address: "123 Nyerere Road, Dar es Salaam", phone: "+255 123 456 789" },
              { city: "Arusha", address: "456 Sokoine Road, Arusha", phone: "+255 987 654 321" },
              { city: "Mwanza", address: "789 Kenyatta Drive, Mwanza", phone: "+255 456 789 123" },
            ].map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{location.city}</h3>
                <p className="text-black mb-1">{location.address}</p>
                <p className="text-black">{location.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-shiloh-blue text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Shiloh Family</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto">
            Discover our latest collections and enjoy a seamless shopping experience. Whether you're shopping for
            yourself or your family, we have something for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-shiloh-blue hover:bg-white/90">
              <Link href="/category/men">Shop Men</Link>
            </Button>
            <Button asChild className="bg-white text-shiloh-blue hover:bg-white/90">
              <Link href="/category/women">Shop Women</Link>
            </Button>
            <Button asChild className="bg-white text-shiloh-blue hover:bg-white/90">
              <Link href="/category/kids">Shop Kids</Link>
            </Button>
            <Button asChild className="bg-white text-shiloh-blue hover:bg-white/90">
              <Link href="/category/footwear">Shop Footwear</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


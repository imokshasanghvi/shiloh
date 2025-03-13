"use client"
import {
  X,
  ArrowLeft,
  RotateCcw,
  Smile,
  Type,
  Pen,
  ChevronUp,
  Image,
  Timer,
  ChevronRight,
  SendToBackIcon as BackIcon,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialMediaInterface() {
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Top toolbar */}
      <div className="flex justify-center py-4 px-2 gap-3">
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 h-10 w-10">
          <X className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 h-10 w-10">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 h-10 w-10">
          <div className="text-xs font-bold">HD</div>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 h-10 w-10">
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 h-10 w-10">
          <Smile className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 h-10 w-10">
          <Type className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-800 h-10 w-10">
          <Pen className="h-5 w-5" />
        </Button>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-auto bg-white text-gray-800 rounded-t-lg">
        <div className="p-6">
          <h2 className="font-bold text-sm uppercase text-gray-700">PROJECT OVERVIEW</h2>
          <p className="text-sm text-gray-600 mb-3">
            Development of a comprehensive E-commerce Platform for various Products with different categories including:
          </p>

          <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
            <li>
              <span className="font-medium">Frontend:</span> Responsive, modern, and user-friendly web interface.
            </li>
            <li>
              <span className="font-medium">Backend:</span> RESTful API services using Node.js.
            </li>
            <li>
              <span className="font-medium">Database:</span> MongoDB for scalable data management.
            </li>
            <li>
              <span className="font-medium">Mobile Applications:</span> Separate client and seller applications for
              Android and iOS platforms.
            </li>
            <li>
              <span className="font-medium">UI/UX Design:</span> Engaging and intuitive user interface and experience
              for web and mobile platforms.
            </li>
            <li>
              <span className="font-medium">API Integration:</span> Payment gateways, logistics, and third-party service
              integration.
            </li>
          </ul>

          <h2 className="font-bold text-sm uppercase text-gray-700 mt-6">SCOPE OF WORK</h2>
          <ol className="list-decimal pl-5 text-sm space-y-2">
            <li>
              <span className="font-medium">Frontend Development (Web)</span>
              <ul className="list-disc pl-5 mt-1">
                <li>Responsive design for all devices.</li>
                <li>Interactive product display, shopping cart, and checkout process.</li>
                <li>User authentication and profile management.</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Backend Development</span>
              <ul className="list-disc pl-5 mt-1">
                <li>RESTful API development for all business logic.</li>
                <li>Authentication and authorization services.</li>
                <li>Admin panel for managing products, users, and orders.</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Database</span>
              <ul className="list-disc pl-5 mt-1">
                <li>Setup and configuration of MongoDB.</li>
                <li>Data models for users, products, orders, and transactions.</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">UI/UX Design</span>
              <ul className="list-disc pl-5 mt-1">
                <li>Design prototypes for web and mobile.</li>
                <li>Wireframes, mockups, and final visual design.</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Mobile Application Development</span>
              <ul className="list-disc pl-5 mt-1">
                <li>
                  Client Application:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Browse products, manage carts, place orders.</li>
                    <li>View order history.</li>
                  </ul>
                </li>
                <li>
                  Seller Application:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Manage inventory, orders, and sales reports.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">API Integration</span>
              <ul className="list-disc pl-5 mt-1">
                <li>Payment gateway integration.</li>
                <li>Third-party authentication (Google, Facebook, etc.)</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-black pt-2 pb-4">
        <div className="flex justify-center mb-4">
          <ChevronUp className="h-6 w-6" />
        </div>
        <div className="text-center mb-6">Swipe up for filters</div>
        <div className="mx-4 mb-4 flex items-center bg-gray-800 rounded-full p-2">
          <Image className="h-6 w-6 ml-2 mr-3" />
          <span className="text-gray-400 flex-1 text-left">Add a caption...</span>
          <Timer className="h-6 w-6 mr-2" />
        </div>
        <div className="flex items-center justify-between px-4 mb-4">
          <div className="text-lg font-medium">Moksha 619</div>
          <Button className="rounded-full bg-green-500 hover:bg-green-600 h-14 w-14 flex items-center justify-center">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Navigation bar */}
        <div className="flex justify-between items-center px-12 pt-4">
          <BackIcon className="h-6 w-6" />
          <div className="h-6 w-6 border-2 rounded-sm"></div>
          <Menu className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}


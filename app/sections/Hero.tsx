"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
  FloatingElement,
} from "@/components/ui/parallax-floating"
import Link from "next/link"

const exampleImages = [
  {
    url: "https://i.pinimg.com/236x/c9/f2/84/c9f284f8cbeee6c9e2ab8c720dc839d6.jpg",
    author: "Branislav Rodman",
    link: "https://i.pinimg.com/236x/c9/f2/84/c9f284f8cbeee6c9e2ab8c720dc839d6.jpg",
    title: "Cavs jersey",
  },
  {
    url: "https://i.pinimg.com/236x/ca/8f/aa/ca8faac30cd44a2488e82d562d819a61.jpg",
    link: "https://i.pinimg.com/236x/ca/8f/aa/ca8faac30cd44a2488e82d562d819a61.jpg",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://i.pinimg.com/236x/4a/b5/0e/4ab50e8c8c77cbbd170e2d1604819f0b.jpg",
    link: "https://i.pinimg.com/236x/4a/b5/0e/4ab50e8c8c77cbbd170e2d1604819f0b.jpg",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://i.pinimg.com/236x/7c/f3/2f/7cf32f738656dff612fd1484c93a30c1.jpg",
    link: "https://i.pinimg.com/236x/7c/f3/2f/7cf32f738656dff612fd1484c93a30c1.jpg",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://i.pinimg.com/474x/6d/be/69/6dbe697cc98539fd475ba4e95ad1fde8.jpg",
    link: "https://i.pinimg.com/474x/6d/be/69/6dbe697cc98539fd475ba4e95ad1fde8.jpg",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://i.pinimg.com/236x/cb/02/40/cb024015d5254fd25a2a295a9d08484b.jpg",
    link: "https://i.pinimg.com/236x/cb/02/40/cb024015d5254fd25a2a295a9d08484b.jpg",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://i.pinimg.com/236x/3d/00/49/3d0049f860792ad47aa4d9cffeba2dde.jpg",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
    link: "https://i.pinimg.com/236x/3d/00/49/3d0049f860792ad47aa4d9cffeba2dde.jpg",
  },
  {
    url: "https://i.pinimg.com/236x/d3/eb/72/d3eb722a42a7cfc410a3008fe6806de8.jpg",
    author: "Mathilde Langevin",
    link: "https://i.pinimg.com/236x/d3/eb/72/d3eb722a42a7cfc410a3008fe6806de8.jpg",
    title: "A table topped with two wine glasses and plates",
  },
]

const Hero = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <div
      className="flex w-full h-full min-h-screen justify-center items-center text-black overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p className="text-5xl md:text-7xl z-50 font-calendas italic font-bold">
          The KitNation.
        </p>
        <Link href="/products">
        <p className="text-xs z-50 hover:scale-110 transition-transform bg-black text-white rounded-full py-2 w-20 cursor-pointer">
          Shop Now
        </p>
        </Link>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-60 h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[32%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-80 h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[53%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-80 h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[83%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-80 h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[2%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-80 h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className="w-80 h-80  object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[73%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-80 h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[80%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-60 h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}

export default Hero

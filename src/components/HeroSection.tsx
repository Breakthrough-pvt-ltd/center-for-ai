// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Head from "next/head";

const HeroSection = () => {
  return (
    <>
      <Head>
        <title>AI-Driven Innovation | Empowering Tomorrow</title>
        <meta
          name="description"
          content="Discover how AI-driven innovation is reshaping industries with cutting-edge technology, creativity, and ethics at its core."
        />
      </Head>
      <section
        className="relative text-white flex items-center justify-center bg-gradient-bg min-h-screen"
        id="HeroSection"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start justify-between h-full relative">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-text-gradient mb-10">
              Empowering Tomorrow with AI-Driven Innovation
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 mb-10">
              Unleash the potential of artificial intelligence to revolutionize
              industries, create new possibilities, and solve real-world
              challenges. Join us on a journey to reshape the future with
              cutting-edge AI technology, ethics, and creativity at its core.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="/connect"
                className="bg-_purple-600 hover:bg-_purple-500 text-white flex items-center gap-2 px-6 py-3 rounded-xl text-lg font-medium transition-colors duration-300"
              >
                Explore More
                <FaArrowRight className="ml-1 text-lg" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-0">
          <Image
            src="/hero.png"
            alt="Illustration of AI research driving innovation"
            width={1476}
            height={2216}
            className="rounded-lg shadow-lg object-contain lg:w-auto lg:h-auto"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;

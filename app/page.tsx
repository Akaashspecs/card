import SketchCards from "@/components/SketchCards";
import FeaturedSketch from "@/components/FeaturedSketch";

export default function Home() {
  return (
    <>
      <FeaturedSketch />
      <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 p-4 sm:p-24 overflow-hidden relative">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-100 mb-8 sm:mb-12 tracking-tight text-center">
            Sketch Gallery
          </h1>
          <SketchCards />
        </div>
      </main>

    </>
  );
}

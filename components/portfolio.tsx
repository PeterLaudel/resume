import { Carousel } from "flowbite-react";
import Image from "next/image";

function Item({
  src,
  alt,
  header,
  description,
}: {
  src: string;
  alt: string;
  header: string;
  description: string;
}) {
  return (
    <div className="flex justify-center relative h-full text-black">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        fill
        sizes="100vw"
        style={{
          objectFit: "contain"
        }} />
      <div className="absolute text-left bg-black/10">
        <h3>{header}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="h-[80vh]">
      <Carousel>
        <Item
          src="/resume/cg.jpg"
          alt="Computer graphics"
          header="Computer graphics"
          description="Your description here..."
        />
        <Item
          src="/resume/surf.jpg"
          alt="Speeded up robust features"
          header="Speeded up robust features"
          description="Your description here..."
        />
        <Item
          src="/resume/cv.jpg"
          alt="Image processing"
          header="Image processing"
          description="Your description here..."
        />
        <Item
          src="/resume/ir.jpg"
          alt="Visual information retrieval"
          header="Visual information retrieval"
          description="Your description here..."
        />
        <Item
          src="/resume/raytracer.jpg"
          alt="Raytracer"
          header="Raytracer"
          description="Your description here..."
        />
        <Item
          src="/resume/sfm.jpg"
          alt="3D reconstruction"
          header="3D reconstruction"
          description="Your description here..."
        />
      </Carousel>
    </div>
  );
}

import Image from "next/image";

interface GalleryImage {
  id: string;
  title?: string;
  alt: string;
  imageUrl: string;
  thumbnailUrl?: string;
}

interface GalleryProps {
  galleryData: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ galleryData }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryData.map((img) => (
          <div
            key={img.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={img.imageUrl}
              alt={img.alt}
              width={400}
              height={300}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
           {img?.title && <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent px-2 py-1">
              <h3 className="text-white text-sm truncate">{img?.title}</h3>
            </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

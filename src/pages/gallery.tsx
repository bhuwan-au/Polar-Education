import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function GalleryPage() {
  const images = [
    {
      original: "/gallery/1.jpeg",
      thumbnail: "/gallery/1.jpeg",
    },
    {
      original: "/gallery/2.jpeg",
      thumbnail: "/gallery/2.jpeg",
    },
    {
      original: "/gallery/3.jpeg",
      thumbnail: "/gallery/3.jpeg",
    },
    {
      original: "/gallery/4.jpeg",
      thumbnail: "/gallery/4.jpeg",
    },
    {
      original: "/gallery/5.jpeg",
      thumbnail: "/gallery/5.jpeg",
    },
    {
      original: "/gallery/6.jpeg",
      thumbnail: "/gallery/6.jpeg",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto">
            A closer look at our offices, classrooms, training sessions, and
            student events that shape successful study abroad journeys.
          </p>
        </div>

        {/* Gallery */}
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={true}
            lazyLoad={true}
            showNav={true}
            thumbnailPosition="bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;

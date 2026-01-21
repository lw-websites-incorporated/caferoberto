import { siteConfig } from '@/config/siteConfig';

export default function HowToFindUs() {
  const { mapEmbedUrl } = siteConfig.location;

  return (
    <section className="w-full h-[500px] md:h-[600px]">
      <iframe
        title="Location Map"
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </section>
  );
}
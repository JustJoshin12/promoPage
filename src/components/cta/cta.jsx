import { Image } from "../shared/image";

export const CtaSection = () => {
  return (
    <section id="supports" className="overflow-hidden bg-galactic-cream py-20">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Events We Support
            </h2>
            <p className="mt-6 text-base font-bold leading-7 text-gray-600">
              At Anime Event Discovery, we celebrate the vibrant and diverse
              world of anime by supporting a wide range of events. From
              large-scale anime conventions that bring together fans from all
              over to anime-themed restaurants where you can enjoy
              meals inspired by your favorite shows, we make it easy for you to
              find events that match your interests.
            </p>
            <p className="mt-6 text-base font-bold leading-7 text-gray-600">
              We also support exciting anime gaming events, where enthusiasts
              can compete, play, and connect over their favorite games.
              Additionally, our platform features various anime gatherings, such
              as dance and DJ events, that offer unique opportunities to
              socialize and enjoy the anime culture in fun, dynamic settings.
              Discover and join these events through Anime Event Discovery to
              immerse yourself fully in the anime world!
            </p>
            
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt=""
                src="/images/ctaImages/image3.jpg"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first hidden sm:flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt=""
                  src="/images/ctaImages/gaming.jpg"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src="/images/ctaImages/dance.jpg"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src="/images/ctaImages/restaurant.webp"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

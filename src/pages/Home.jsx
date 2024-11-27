import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full relative">
        <img
          src="https://jep-asset.akamaized.net/cms/assets/jioapps/jiosaavn/top-banner-desk.webp"
          alt="Desktop Banner"
          className="hidden md:flex w-full h-auto"
        />

        <img
          src="https://jep-asset.akamaized.net/cms/assets/jioapps/jiosaavn/top-banner-mob.webp"
          alt="Mobile Banner"
          className="md:hidden flex w-full h-auto"
        />

        <div className="absolute top-0 left-0 w-full lg:w-[50%] h-full flex flex-col justify-end lg:justify-center items-start p-4 lg:p-10 text-white rounded-2xl">
          <h1 className="flex items-center gap-1 text-xl lg:text-2xl font-semibold text-red-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/15047/15047447.png"
              alt=""
              className="h-10"
            />
            TuneEmotion
          </h1>
          <h2 className="text-2xl lg:text-4xl font-semibold my-2 lg:my-4">
            India’s ultimate audio entertainment web app.
          </h2>
          <p className="">
            Discover a new way to enjoy music tailored to your emotions.
          </p>

          <button className="mt-4 w-full lg:w-fit text-center bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"></button>
        </div>
      </div>
    </Layout>
  );
}

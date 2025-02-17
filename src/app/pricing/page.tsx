import Footer from "@/components/Footer";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="flex flex-col relative top-0 left-0 w-full h-screen z-30 font-specialElite">
      <section className="mt-[450px] flex justify-center mx-auto my-4 z-20 w-full">
        <div className="mx-auto w-full">
          <div className="py-10 w-full grid grid-cols-[repeat(auto-fit,min(500px))] place-content-center gap-[50px] bg-opacity-70 bg-stone-700">
            <div className="flex flex-col h-full shadow-2xl rounded-2xl bg-[url('/priceCard.jpg')] bg-cover">
              <h2 className="px-5 pt-5 text-3xl font-bold text-white">
                Starter Pack
              </h2>
              <p className="px-5 text-amber-400">Price: 20€/Month</p>
              <p className="px-5 py-2 text-xl font-bold text-white">
                Everything you need to get started
              </p>
              <ul className="list-none pl-3 py-5">
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkBronze.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Single member seat
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkBronze.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Global edge network
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkBronze.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  5 GB storage space
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkBronze.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Instant rollbacks
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkBronze.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Static assets
                </li>
              </ul>
            </div>
            <div className="mx-8 text-white flex flex-col items-center">
              <p className="p-4 text-xl break-all">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                nulla aspernatur sunt laboriosam amet animi mollitia excepturi
                porro autem earum provident, itaque nisi odio quam! Cumque,
                iusto nam. Aut quos recusandae iure beatae. Aspernatur sunt
                laboriosam amet animi mollitia excepturi.
              </p>
              <Link href={"/order"}>
                <button className="my-8 rounded-3xl border-2 border-slate-200 shadow-teal-50 shadow-2xl h-16 w-52 pt-2 text-white text-2xl font-bold hover:bg-amber-400 hover:text-black">
                  Order Now
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-[200px] py-10 w-full grid grid-cols-[repeat(auto-fit,min(500px))] place-content-center gap-[50px] bg-opacity-70 bg-stone-700">
            <div className="flex flex-col h-full shadow-2xl rounded-2xl bg-[url('/priceCard.jpg')] bg-cover">
              <h2 className="px-5 pt-5 text-3xl font-bold text-white">
                Pro Pack
              </h2>
              <p className="px-5 text-amber-400">Price: 50€/Month</p>
              <p className="px-5 py-2 text-xl font-bold text-white">
                Includes everything from the Starter Pack, plus:
              </p>
              <ul className="list-none pl-3 pb-5">
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkSilver.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Background functions
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkSilver.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Password-protected sites
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkSilver.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  50 GB storage space
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkSilver.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Email support
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkSilver.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Team audit logs
                </li>
              </ul>
            </div>
            <div className="mx-8 text-white flex flex-col items-center">
              <p className="p-4 text-xl break-all">
                Tunei mollitia excepturi porro autem earum provident, itaque
                nisi odio quam! Cumque, iusto nam. Aut quos recusandae iure
                beatae aspernatur sunt laboriosam amet animi.
              </p>
              <p className="p-4 text-xl break-all">
                Lorem ipsum dolor sit amet. Consequatur, consectetur?
              </p>
              <Link href={"/order"}>
                <button className="my-8 rounded-3xl border-2 border-slate-200 shadow-teal-50 shadow-2xl h-16 w-52 pt-2 text-white text-2xl font-bold hover:bg-amber-400 hover:text-black">
                  Order Now
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-[200px] py-10 w-full grid grid-cols-[repeat(auto-fit,min(500px))] place-content-center gap-[50px] bg-opacity-70 bg-stone-700">
            <div className="flex flex-col h-full shadow-2xl rounded-2xl bg-[url('/priceCard.jpg')] bg-cover">
              <h2 className="px-5 pt-5 text-3xl font-bold text-white">
                Enterprise Pack
              </h2>
              <p className="px-5 text-amber-400">Price: 150€/Month</p>
              <p className="px-5 py-2 text-xl font-bold text-white">
                Includes everything from the Pro Pack, plus:
              </p>
              <ul className="list-none pl-3 pb-5">
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkGold.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Org-level SSO and SCIM
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkGold.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Organization management
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkGold.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Security features
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkGold.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  Custom billing
                </li>
                <li className="pl-8 pr-3 pt-1 bg-[url('/checkGold.png')] bg-no-repeat bg-left-top bg-[length:28px_28px] text-white text-xl">
                  AI features
                </li>
              </ul>
            </div>
            <div className="mx-8 text-white flex flex-col items-center">
              <p className="p-4 text-xl break-all">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam reprehenderit perspiciatis debitis corporis nihil quo.
              </p>
              <p className="p-4 text-xl break-all">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, consectetur?
              </p>
              <Link href={"/order"}>
                <button className="my-8 rounded-3xl border-2 border-slate-200 shadow-teal-50 shadow-2xl h-16 w-52 pt-2 text-white text-2xl font-bold hover:bg-amber-400 hover:text-black">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[70px] flex m-auto z-20 w-full">
        <div className=" h-[250px] w-full flex flex-col justify-center gap-2">
          <h2 className="pl-[38vw] md:pl-[42vw] xl:pl-[45vw] text-white text-6xl">
            Fast
          </h2>
          <h2 className="pl-[30vw] md:pl-[32vw] xl:pl-[35vw] text-white text-2xl">
            Easy
          </h2>
          <h2 className="pl-[48vw] md:pl-[52vw] xl:pl-[55vw] text-white text-4xl">
            Secure
          </h2>
          <h2 className="pl-[20vw] md:pl-[25vw] xl:pl-[30vw] text-white text-5xl">
            Flexible
          </h2>
        </div>
      </section>

      {/* Static Background */}
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/pricingBg.jpg')] bg-cover bg-center z-0">
        {/* <div className="flex h-[300px] w-fit z-0"></div> */}
      </section>

      {/* Order Button */}
      <section className="flex my-20 mx-auto z-20 w-fit">
        <div className="h-[300px] flex flex-col justify-center items-center">
          <p className="w-96 py-5 text-center text-white text-3xl">
            For custom solutions, please contact our experienced sales team.
          </p>
          <Link href={"/order"}>
            <button className="rounded-3xl border-4 border-amber-400 shadow-teal-50 shadow-2xl h-20 w-52 pt-2 text-white text-2xl font-bold hover:bg-amber-400 hover:border-slate-200 hover:text-black">
              Contact Sales
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

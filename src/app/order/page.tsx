import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const Order = () => {
  return (
    <div className="flex flex-col relative top-0 left-0 w-full h-screen z-30 font-specialElite">
      <section className="mt-[430px] bg-opacity-60 bg-white flex z-20 w-full">
        <div className="flex flex-col xl:flex-row items-center justify-center min-h-96 h-fit w-full">
          <div className="flex flex-col w-[90vw] min-w-[500px] max-w-[700px] h-fit my-8 mx-16 shadow-2xl rounded-2xl bg-[url('/priceCard.jpg')] bg-cover">
            <h1 className="p-6 text-white text-3xl font-bold">Thank you!</h1>
            <p className="p-6 text-white text-xl">
              We have now received your order and will process it as soon as
              possible.
            </p>
            <h2 className="p-6 text-xl font-bold text-yellow-600">
              Alea iacta est...
            </h2>
          </div>
          <div className="flex w-[90vw] max-w-[700px] mb-10 xl:max-h-96 xl:max-w-[500px] xl:mb-0 py-auto">
            <Image
              className="size-full rounded-xl xl:mr-10"
              width={300}
              height={200}
              src="/orderDice.jpg"
              alt="Dices in the air"
            />
          </div>
        </div>
      </section>

      {/* Static Background */}
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/orderBg.jpg')] bg-cover bg-center z-0"></section>

      <section className="flex m-auto z-20 w-fit">
        <div className="mt-10 h-[300px] flex flex-col justify-center items-center">
          <Link href={"/"}>
            <button className="rounded-3xl border-2 border-slate-200 shadow-teal-50 shadow-2xl h-20 w-52 pt-2 text-white text-2xl font-bold hover:bg-amber-400 hover:text-black">
              Home
            </button>
          </Link>
          <p className="w-96 pt-5 text-center text-white text-xl">
            Deleniti porro suscipit nam dignissimos quisquam odit praesentium
            sapiente. Aperiam ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Order;

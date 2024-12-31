import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const Unauthorized = () => {
  return (
    <div className="flex flex-col relative top-0 left-0 w-full h-screen z-30 font-specialElite">
      <section className="mt-[430px] bg-opacity-60 bg-white flex z-20 w-full">
        <div className="flex flex-col xl:flex-row items-center justify-center min-h-96 h-fit w-full">
          <div className="flex flex-col w-[90vw] min-w-[500px] max-w-[700px] h-fit my-8 mx-16 shadow-2xl rounded-2xl bg-[url('/priceCard.jpg')] bg-cover">
            <div className="flex flex-col">
              <h1 className="p-6 text-white text-3xl font-bold">
                Unauthorized access attempt
              </h1>
              <p className="p-6 text-white text-xl">
                Your email and password do not match our records. Please try
                again or apply for an account below.
              </p>
              <div className="flex w-full justify-center items-center">
                <Link href={"/login"}>
                  <button className="mb-10 mt-6 xl:my-0 rounded-xl border-2 border-slate-200 shadow-teal-50 shadow-2xl py-2 px-6 text-white text-2xl font-bold hover:bg-amber-400 hover:text-black">
                    Log in
                  </button>
                </Link>
              </div>
            </div>
            <Image
              className="size-full rounded-b-2xl xl:mr-10"
              width={300}
              height={150}
              src="/unauthorized.jpg"
              alt="Library"
            />
          </div>
        </div>
      </section>

      {/* Static Background */}
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/unauthorizedBg.jpg')] bg-cover bg-center z-0"></section>

      <section className="flex m-auto z-20 w-fit">
        <div className="mt-10 h-[300px] flex flex-col justify-center items-center">
          <Link href={"/pricing"}>
            <button className="rounded-3xl border-2 border-slate-200 shadow-teal-50 shadow-2xl h-20 w-52 pt-2 text-white text-2xl font-bold hover:bg-amber-400 hover:text-black">
              Apply for acount
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

export default Unauthorized;

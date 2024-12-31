import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col relative top-0 left-0 w-full h-screen z-30 font-specialElite">
      <section className="mt-[430px] bg-opacity-60 bg-white flex z-20 w-full">
        <div className="flex flex-col xl:flex-row items-center justify-center min-h-96 h-fit w-full">
          <div className="flex flex-col w-[90vw] min-w-[500px] max-w-[700px] h-fit my-8 mx-16 shadow-2xl rounded-2xl bg-[url('/priceCard.jpg')] bg-cover">
            <form className="flex flex-col lg:flex-row w-full h-full">
              <div className="flex flex-col">
                <div className="mt-10 flex">
                  <label
                    htmlFor="userName"
                    className="w-36 min-w-[120px] ml-2 sm:ml-4 md:ml-6 lg:ml10 text-xl text-white"
                  >
                    User Name:
                  </label>
                  <input
                    id="userName"
                    className="w-80 min-w-[280px] pl-2 pt-1 text-md text-black  bg-stone-100 rounded-md"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mt-2 xl:mb-10 flex">
                  <label
                    htmlFor="psw"
                    className="w-36 min-w-[120px] ml-2 sm:ml-4 md:ml-6 lg:ml10 text-xl text-white"
                  >
                    Password:
                  </label>
                  <input
                    id="psw"
                    className="w-80 min-w-[280px] pl-2 pt-1 text-md text-black bg-stone-100 rounded-md"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="flex w-full justify-center items-center">
                <Link href={"/unauthorized"}>
                  <button className="mb-10 mt-6 xl:my-0 rounded-xl border-2 border-slate-200 shadow-teal-50 shadow-2xl py-2 px-6 text-white text-2xl font-bold hover:bg-amber-400 hover:text-black">
                    Log in
                  </button>
                </Link>
              </div>
            </form>
            <Image
              className="size-full rounded-b-2xl xl:mr-10"
              width={300}
              height={150}
              src="/login.jpg"
              alt="Library"
            />
          </div>
        </div>
      </section>

      {/* Static Background */}
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/orderBg.jpg')] bg-cover bg-center z-0"></section>

      <section className="mt-[50px] flex m-auto z-20 w-full">
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
      <Footer />
    </div>
  );
};

export default Login;

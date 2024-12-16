import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // <div className="flex flex-col sticky top-0 left-0 w-fit h-screen z-30">
    <div className="flex flex-col relative top-0 left-0 w-fit h-screen z-30 font-specialElite">
      <section className="mt-[400px] bg-white flex z-20 w-fit">
        <div className="flex h-96">
          <div className="flex flex-col w-1/2 h-fit my-8 mx-16 shadow-2xl rounded-2xl">
            <h1 className="p-6 text-xl font-bold">Create your register</h1>
            <p className="p-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos ad tempora sed, commodi perferendis maiores expedita
              similique ipsum earum vero voluptatem, officiis animi explicabo
              quaerat architecto harum assumenda debitis? Eveniet est sit ab.
              Deserunt blanditiis impedit. Deleniti porro suscipit nam
              dignissimos quisquam odit praesentium sapiente aperiam magnam eius
              cumque accusantium eaque quae placeat dolorem quibusdam,
              consequuntur nihil mollitia id nemo consectetur? Aperiam at
              dolorum numquam sunt doloremque natus voluptatum odio eos, animi
              quidem temporibus ipsum quo laboriosam odit, illo minus!
            </p>
          </div>
          <div className="flex h-96 w-max py-3">
            <Image
              className="size-full rounded-xl"
              width={600}
              height={400}
              src="/createRegister.jpg"
              alt="Library"
            />
          </div>
        </div>
      </section>

      <section className="flex m-auto z-20 w-full">
        <div className=" h-[250px] w-full flex flex-col justify-center gap-2">
          <h2 className="pl-[53vw] text-white text-6xl">Fast</h2>
          <h2 className="pl-[40vw] text-white text-2xl">Easy</h2>
          <h2 className="pl-[60vw] text-white text-4xl">Secure</h2>
          <h2 className="pl-[45vw] text-white text-5xl">Flexible</h2>
        </div>
      </section>

      {/* Static Background */}
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/homeBg.jpg')] bg-cover z-0">
        {/* <div className="flex h-[300px] w-fit z-0"></div> */}
      </section>

      <section className="bg-white flex z-20 w-fit">
        <div className="flex h-96">
          <div className="flex ml-16 h-96 w-max py-3">
            <Image
              className="size-full rounded-xl"
              width={600}
              height={400}
              src="/cloudStorage.jpg"
              alt="Library"
            />
          </div>
          <div className="flex flex-col w-1/2 h-fit my-8 mx-16 shadow-2xl rounded-2xl">
            <h1 className="p-6 text-xl font-bold">
              Store your register in the cloud
            </h1>
            <p className="p-6">
              Deleniti porro suscipit nam dignissimos quisquam odit praesentium
              sapiente aperiam magnam eius cumque accusantium eaque quae placeat
              dolorem quibusdam, consequuntur nihil mollitia id nemo
              consectetur? Aperiam ipsum dolor, sit amet consectetur adipisicing
              elit.
            </p>
            <p className="px-6 pb-6">
              Dignissimos ad tempora sed, commodi perferendis maiores expedita
              similique ipsum earum vero voluptatem, officiis animi explicabo
              quaerat architecto harum assumenda debitis? Eveniet est sit ab.
              Deserunt blanditiis impedit.
            </p>
          </div>
        </div>
      </section>

      {/* Order Button */}
      <section className="flex m-auto z-20 w-fit">
        <div className="mt-10 h-[300px] flex flex-col justify-center items-center">
          <button className="rounded-3xl border-2 border-slate-200 shadow-teal-50 shadow-2xl h-20 w-52 pt-2 text-white text-2xl font-bold hover:bg-amber-400 hover:text-black">
            Order Now
          </button>
          <p className="w-96 pt-5 text-center text-white text-xl">
            Deleniti porro suscipit nam dignissimos quisquam odit praesentium
            sapiente. Aperiam ipsum dolor, sit amet consectetur adipisicing
            elit.
          </p>
        </div>
      </section>

      <section className="mt-[25px] mb-52 bg-white flex z-20 w-fit">
        <div className="flex h-96">
          <div className="flex flex-col w-1/2 h-fit my-8 mx-16 shadow-2xl rounded-2xl">
            <h1 className="p-6 text-xl font-bold">
              Access it securely from wherever you are
            </h1>
            <p className="p-6">
              Deserunt blanditiis impedit. Deleniti porro suscipit nam
              dignissimos quisquam odit praesentium sapiente aperiam magnam eius
              cumque accusantium eaque quae placeat dolorem quibusdam,
              consequuntur nihil mollitia id nemo consectetur? Aperiam at
              dolorum numquam sunt doloremque natus voluptatum odio eos, animi
              quidem temporibus ipsum quo laboriosam odit, illo minus!
              Dignissimos ad tempora sed, commodi perferendis maiores expedita
              similique ipsum earum vero voluptatem, officiis animi explicabo
              quaerat architecto harum assumenda debitis? Eveniet est sit ab.
            </p>
          </div>
          <div className="flex h-96 w-max py-3">
            <Image
              className="size-full rounded-xl"
              width={600}
              height={400}
              src="/secureAvailable.jpg"
              alt="Library"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

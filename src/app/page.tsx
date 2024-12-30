import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // <div className="flex flex-col sticky top-0 left-0 w-fit h-screen z-30">
    <div className="flex flex-col relative top-0 left-0 w-full h-screen z-30 font-specialElite">
      <section className="mt-[400px] bg-white flex z-20 w-full">
        <div className="flex flex-col xl:flex-row items-center justify-center min-h-96 h-fit w-full">
          <div className="flex flex-col w-[90vw] min-w-[500px] max-w-[700px] h-fit my-8 mx-16 shadow-2xl rounded-2xl">
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
          <div className="flex w-[90vw] max-w-[700px] mb-10 xl:max-h-96 xl:max-w-[500px] xl:mb-0 py-auto">
            <Image
              className="size-full rounded-xl xl:mr-10"
              width={300}
              height={200}
              src="/createRegister.jpg"
              alt="Library"
            />
          </div>
        </div>
      </section>

      <section className="flex m-auto z-20 w-full">
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
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/homeBg.jpg')] bg-cover z-0">
        {/* <div className="flex h-[300px] w-fit z-0"></div> */}
      </section>

      <section className="bg-white flex z-20 w-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center min-h-96 h-fit w-full">
          <div className="flex w-[90vw] max-w-[700px] mb-10 xl:max-h-96 xl:max-w-[500px] xl:mb-0 py-auto">
            <Image
              className="size-full rounded-xl xl:mr-10"
              width={300}
              height={200}
              src="/cloudStorage.jpg"
              alt="Library"
            />
          </div>
          <div className="flex flex-col w-[90vw] min-w-[500px] max-w-[700px] h-fit my-8 mx-16 shadow-2xl rounded-2xl">
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

      <section className="mt-[250px] bg-white flex z-20 w-full">
        <div className="flex flex-col xl:flex-row items-center justify-center min-h-96 h-fit w-full">
          <div className="flex flex-col w-[90vw] min-w-[500px] max-w-[700px] h-fit my-8 mx-16 shadow-2xl rounded-2xl">
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
          <div className="flex w-[90vw] max-w-[700px] mb-10 xl:max-h-96 xl:max-w-[500px] xl:mb-0 py-auto">
            <Image
              className="size-full rounded-xl xl:mr-10"
              width={300}
              height={200}
              src="/secureAvailable.jpg"
              alt="Library"
            />
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

      <Footer />
    </div>
  );
}

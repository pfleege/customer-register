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

      {/* Button */}
      <section className="flex m-auto z-20 w-fit">
        <div className=" h-[250px] flex flex-col justify-center items-center">
          <button className="rounded-3xl border-2 border-slate-200 shadow-teal-50 shadow-2xl h-20 w-52 text-white text-xl font-bold">
            Add Customer
          </button>
        </div>
      </section>

      {/* Static Background */}
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/homeBg.jpg')] bg-cover z-0">
        <div className="flex h-[300px] w-fit z-0"></div>
        {/* <div className="fixed top-[800px] z-10"></div> */}
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
            <h1 className="p-6 text-xl font-bold">Cloud storage</h1>
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
      <section className="mt-[300px] mb-20 bg-white flex z-20 w-fit">
        <div className="flex h-96">
          <div className="flex flex-col w-1/2 h-fit my-8 mx-16 shadow-2xl rounded-2xl">
            <h1 className="p-6 text-xl font-bold">
              Secure and available wherever you are
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

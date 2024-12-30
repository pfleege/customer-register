"use client";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Link from "next/link";

interface CustomersProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const Customers = () => {
  const [customers, setCustomers] = useState<CustomersProps[]>([]);

  useEffect(() => {
    async function fetchCustomers() {
      try {
        const response = await fetch("/api/customers");
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCustomers();
  }, []);

  return (
    <div className="flex flex-col relative top-0 left-0 w-full h-screen z-30 font-specialElite">
      <section className="mt-[450px] flex m-auto z-20 w-full">
        <div className=" h-[250px] w-full flex flex-col justify-center gap-2">
          <h2 className="pl-[30vw] sm:pl-[33vw] md:pl-[45vw] xl:pl-[50vw] text-black text-7xl">
            Mobile
          </h2>
          <h2 className="pl-[25vw] sm:pl-[27vw] md:pl-[35vw] xl:pl-[45vw] text-black text-4xl">
            Or
          </h2>
          <h2 className="pl-[17vw] sm:pl-[20vw] md:pl-[30vw] xl:pl-[37vw] text-black text-6xl">
            Web-Based
          </h2>
        </div>
      </section>

      {/* <div className="mt-[50px] flex justify-center w-full bg-opacity-40 bg-stone-700 z-20"> */}
      <div className="mt-[50px] grid grid-cols-[repeat(auto-fit,min(520px))] gap-16 place-content-center w-full bg-opacity-40 bg-stone-700 z-20">
        {/* <div className="w-full max-w-screen-2xl"> */}
        <div className="pt-[140px] flex justify-center h-[1080px] max-w-[520px] max-h-[1080px] bg-[url('/smartPhoneFilled.png')] bg-center bg-no-repeat">
          <div className="grid grid-cols-[repeat(auto-fit,min(520px))] max-h-[800px] place-content-center gap-4 scrollbar-hide overflow-y-scroll">
            {customers.map((customer) => (
              <Link
                href={`/customers/${customer.id}`}
                className="flex flex-col w-1/2 min-w-[440px] h-80 my-8 ml-10 p-8 bg-[url('/contactBg.png')] bg-cover bg-center"
                key={customer.id}
              >
                <h2 className="ml-2 text-3xl pl-3 pt-2 font-bold border-l-8 border-amber-400 text-white">
                  {customer.name}
                </h2>
                <p className="ml-2 mt-5 text-2xl text-white">
                  Company:
                  <span className="p-2 inline text-xl text-black">
                    {customer.company.name}
                  </span>
                </p>
                <p className="ml-2 text-2xl text-white">
                  City:
                  <span className="p-2 inline text-xl text-black">
                    {customer.address.city}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="my-10 pt-[288px] flex justify-center h-[1080px] max-w-[520px] max-h-[1080px] bg-[url('/webBased.jpg')] bg-center bg-no-repeat border-2 border-yellow-50 rounded-2xl">
          <div className="grid grid-cols-[repeat(3,min(170px))] max-h-[530px] place-content-start gap-1 scrollbar-hide overflow-y-scroll">
            {customers.map((customer) => (
              <Link
                href={`/customers/${customer.id}`}
                className="flex flex-col w-1/4 min-w-[170px] h-40 p-2 pt-4 bg-[url('/contactBg.png')] bg-cover bg-center"
                key={customer.id}
              >
                <h2 className="text-sm pt-2 font-bold border-l-8 border-amber-400 text-white">
                  {customer.name}
                </h2>
                <p className="mt-5 text-[8px] text-white">
                  Company:
                  <span className="p-2 inline text-[8px] text-black">
                    {customer.company.name}
                  </span>
                </p>
                <p className="text-[8px] text-white">
                  City:
                  <span className="p-2 inline text-[8px] text-black">
                    {customer.address.city}
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-[50px] flex m-auto z-20 w-full">
        <div className=" h-[250px] w-full flex flex-col justify-center gap-2">
          <h2 className="pl-[53vw] text-black text-6xl">Fast</h2>
          <h2 className="pl-[40vw] text-black text-2xl">Easy</h2>
          <h2 className="pl-[60vw] text-black text-4xl">Secure</h2>
          <h2 className="pl-[45vw] text-black text-5xl">Flexible</h2>
        </div>
      </section>

      {/* Static Background */}
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/sampleBg.jpg')] bg-cover bg-center z-0"></section>
      <Footer />
    </div>
  );
};

export default Customers;

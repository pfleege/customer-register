"use client";
import { useEffect, useState } from "react";
import { use } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

interface CustomerProps {
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

const CustomerDetails = ({
  params,
}: {
  params: Promise<{ customerId: string }>;
}) => {
  const resolvedParams = use(params);
  const customerId = resolvedParams.customerId;
  const [customer, setCustomer] = useState<CustomerProps | null>(null);

  useEffect(() => {
    async function fetchCustomerDetails() {
      try {
        const response = await fetch(`/api/customers/${customerId}`);
        const data = await response.json();
        setCustomer(data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    }

    fetchCustomerDetails();
  }, [customerId]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div className="flex flex-col relative top-0 left-0 w-full h-screen z-30 font-specialElite">
      <div className="mt-[450px] flex justify-center w-full bg-opacity-40 bg-stone-700 z-20">
        <div className="w-full max-w-screen-2xl">
          <div className="mt-12 flex flex-col md:flex-row justify-center bg-opacity-80 bg-stone-700 rounded-xl">
            <div className="mx-auto flex flex-col w-1/2 min-w-[500px] h-fit my-8 p-8 gap-2">
              <h2 className="ml-2 text-3xl pl-3 pt-2 font-bold border-l-8 border-amber-400 text-white">
                {customer.name}
              </h2>
              <div className="mt-10 flex">
                <p className="w-36 ml-2 text-2xl text-white">Company:</p>
                <span className="w-80 pl-2 pt-1 text-xl text-black  bg-stone-100 rounded-md">
                  {customer.company.name}
                </span>
              </div>
              <div className="flex">
                <p className="w-36 ml-2 text-2xl text-white">City:</p>
                <span className="w-80 pl-2 pt-1 text-xl text-black  bg-stone-100 rounded-md">
                  {customer.address.city}
                </span>
              </div>
              <div className="flex">
                <p className="w-36 ml-2 text-2xl text-white">Email:</p>
                <span className="w-80 pl-2 pt-1 text-xl text-black  bg-stone-100 rounded-md">
                  {customer.email}
                </span>
              </div>
              <div className="flex">
                <p className="w-36 ml-2 text-2xl text-white">Phone:</p>
                <span className="w-80 pl-2 pt-1 text-xl text-black  bg-stone-100 rounded-md">
                  {customer.phone}
                </span>
              </div>
              <div className="flex">
                <p className="w-36 ml-2 text-2xl text-white">Website:</p>
                <span className="w-80 pl-2 pt-1 text-xl text-black  bg-stone-100 rounded-md">
                  {customer.website}
                </span>
              </div>
            </div>
            <div className="max-w-[500px] mx-auto mb-10 md:my-auto">
              <Image
                className="rounded-xl"
                width={300}
                height={300}
                src={`/customer${customer.id}.jpg`}
                alt="Library"
              />
            </div>
          </div>
          <div className="my-12 flex flex-col w-full items-center gap-8 bg-opacity-80 bg-stone-700 rounded-xl">
            <textarea
              className="m-12 w-[75vw] max-w-[1080px] rounded-xl p-4"
              name="textarea"
              placeholder="My comments"
              rows={10}
            />
            <Link href={"/customers"}>
              <button className="mb-12 rounded-xl border-2 border-slate-200 shadow-teal-50 shadow-xl h-12 w-28 pt-1 text-white text-xl font-bold hover:bg-amber-400 hover:text-black">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>

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

      {/* Static Background */}
      <section className="fixed top-[400px] h-screen w-screen bg-[url('/customerBg.jpg')] bg-cover bg-center z-0"></section>
      <Footer />
    </div>
  );
};

export default CustomerDetails;

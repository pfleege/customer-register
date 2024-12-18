"use client";
import { useEffect, useState } from "react";

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
    <div>
      <h1>Customers</h1>
      {customers.map((customer) => (
        <div key={customer.id}>
          <h2>{customer.name}</h2>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Customers;

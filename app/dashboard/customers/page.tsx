import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomerTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const customers = await fetchFilteredCustomers(searchParams?.query || "");

  return <CustomerTable customers={customers} />;
}

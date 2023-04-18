import { OrderByButton } from "@/components/OrderByButton";
import { SheetFilters } from "@/components/SheetFilters";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { supabase } from "../utils/supabase";

import { formatDistanceToNowStrict, parseISO } from "date-fns";

export const revalidate = 0;

async function getModels() {
  const { data, error } = await supabase.from("honeys").select();

  console.log({ data, error });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default async function Models() {
  const models = await getModels();

  const _renderLastView = (datetime: string) => {
    const distante = formatDistanceToNowStrict(parseISO(datetime));
    console.log(distante);

    return `Seen ${distante} ago`;
  };

  return (
    <div className="flex flex-col content-center items-center gap-4">
      <div className="max-w-md place-content-start">
        <h1 className="text-2xl tracking-tight text-gray-800">
          Honeys in <span className="font-bold text-gray-900">Sydney</span>
        </h1>
        <span className="w-18 inline-block text-gray-500">
          Choose your city and check out photos and contact numbers of escorts
          for sex, events, erotic services, with location or home services, and
          more options.
        </span>
      </div>

      <div className="flex w-96 flex-col rounded-lg bg-white p-4 shadow-md">
        <div className="flex w-full items-center justify-between space-x-2 ">
          <Input type="location" placeholder="Brisbane - QLD" />
          <Button type="submit">Search</Button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <SheetFilters></SheetFilters>
          <OrderByButton>Order by</OrderByButton>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {models.map((model) => (
          <div className="group rounded-lg bg-white p-4 shadow-md">
            <div className="aspect-w-1 aspect-h-1 relative m-auto h-96 w-full overflow-hidden rounded-lg bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80"
                alt="Card Image"
                className="rounded-lg object-cover object-center group-hover:opacity-75"
                width={500}
                height={500}
              />
            </div>

            <div className="mt-2 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                {model.is_verified && (
                  <Badge variant="outline" className="text-green-600 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mr-2 h-6 w-6 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>
                    Verfified
                  </Badge>
                )}

                <Badge variant="outline" className="text-amber-600 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-1 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  {_renderLastView(model.last_view as string)}
                </Badge>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">
                    {model.location}
                  </span>
                  <span className="text-sm text-gray-500">{model.age}yrs</span>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  AUD ${model.price}/h
                </p>
              </div>

              <Button className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-2 h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Call Me
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

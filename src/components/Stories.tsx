"use client";
import Image from "next/image";

const SeeMoreComponent = ({ story, action, close }) => {
  return (
    <div className="h-full max-w-full bg-white p-4">
      <h1>Hello!</h1>
      <p>
        This story would have a 'See More' link at the bottom and will open a
        URL in a new tab.
      </p>
      <button onClick={close}>Close</button>
    </div>
  );
};

const storiesMock = [
  {
    url: "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
  },
  {
    url: "https://images.unsplash.com/photo-1680499760033-b303bc1a1278?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    seeMore: SeeMoreComponent,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
  },
  {
    url: "https://images.unsplash.com/photo-1680462155279-4d73bdbf46ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    seeMore: SeeMoreComponent,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "https://picsum.photos/100/100",
    },
  },
];

{
  /* <StoriesComponent
        stories={storiesMock}
        defaultInterval={5000}
        width={432}
        height={600}
        loop={true}
        keyboardNavigation
        storyContainerStyles={{ borderRadius: 8, overflow: "hidden" }}
      /> */
}

export default function Stories({ stories }) {
  const user = null;

  const handleClick = () => {};

  return (
    <div className="md:space-x-full flex max-w-fit space-x-3 border-b-[1px] border-b-gray-700 pl-5 pb-3">
      {stories.map((storie: any) => (
        <div
          className="relative flex cursor-pointer flex-col items-center"
          onClick={handleClick}
        >
          <div className="gradient mb-1 h-16 w-16 rounded-full p-[2px]">
            <div className="h-full w-full overflow-hidden rounded-full bg-black">
              <Image
                src={storie.picture.thumbnail}
                className="h-full w-full rounded-full"
                width={64}
                height={64}
                alt="cute kitty"
              />
            </div>
          </div>
          <h3 className="md:text-md w-16 overflow-hidden text-ellipsis whitespace-nowrap text-center text-sm font-bold text-white md:w-20">
            {storie.name.first}
          </h3>
        </div>
      ))}
    </div>
  );
}

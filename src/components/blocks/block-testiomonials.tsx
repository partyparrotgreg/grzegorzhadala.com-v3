export const BlockTestiomonials = () => {
  return (
    <section className="relative isolate overflow-hidden bg-foreground text-background pl-8 pb-8 pt-16">
      <div className="">
        <figure className="mt-10  max-w-[60ch]">
          <blockquote className=" text-xl font-semibold leading-8sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
              in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 flex space-x-3 text-base items-center">
              <div className="font-semibold ">Judith Black</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-background"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-muted-foreground">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

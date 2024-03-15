export const HeroView = () => {
  return (
    <div className="w-full items-end flex justify-stretch overflow-hidden flex-col content-padding">
      <div className="flex flex-col w-full text-9xl tracking-tighter font-semibold h-full pt-20">
        <div className="-ml-2">Design</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-grow text-stone-500 font-light italic">
            &amp;
          </div>
          <div>Development</div>
        </div>
        <div className="text-4xl tracking-tight font-normal">
          <div>
            for good old <span className="text-orange-500">Fintech</span>, spicy
            new web3 ecosystems, blockchain and whatever the crap your want.
          </div>
        </div>
      </div>
    </div>
  );
};

const TranslatorStart = ({ onStart }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 sm:p-12 ">
      <div className="w-full h-64 bg-gradient-to-l from-[#3F5185] to-[#A1C6EA] rounded-t-full rounded-bl-full flex flex-col justify-center text-gray-700 pr-6 translate-x-2 text-center">
        <span className="font-shojumaru text-5xl sm:text-6xl">Hello</span>
        <span className="font-bellefair sm:text-4xl">שלום</span>
        <span className="font-notoSanaJP text-3xl sm:text-4xl text-right">
          こんにちは
        </span>
        <span className="text-2xl sm:text-3xl text-right">Hola</span>
      </div>
      <div className="w-full text-right space-y-5 mt-20 mb-36">
        <h1 className="font-righteous text-4xl text-white uppercase">Wordly</h1>

        <button
          className="
            w-32 h-10 
            bg-gradient-to-r from-[#3F5185] to-[#A1C6EA] 
            rounded-full 
            font-righteous font-bold text-lg uppercase 
            text-white 
            tracking-widest 
            shadow-md hover:shadow-lg
            hover:from-[#4B5D8A] hover:to-[#B4D0F0]
            transition-all duration-200 ease-in-out 
            active:translate-y-[1px] active:brightness-90
          "
          onClick={onStart}
        >
          <span className="mr-1">🚀</span>Start
        </button>
      </div>
      <p className="absolute bottom-4 left-4 text-sm text-gray-800">
        by Maya Shahaf Rozenberg 💻
      </p>{" "}
    </div>
  );
};

export default TranslatorStart;

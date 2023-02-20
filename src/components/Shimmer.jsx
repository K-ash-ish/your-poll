function YourPollShimmer() {
  return (
    <div className="  w-full my-6 flex flex-col items-center justify-center md:flex-row md:justify-around ">
      <div className="bg-slate-50 poll border-2 border-cyan-100  rounded md:p-6 py-4 px-2 md:w-1/2 w-11/12 my-2">
        <p className="h-14 border-b-4 border-red-400 tracking-wide leading-relaxed md:text-2xl text-xl pb-2 px-2 mb-10 md:mb-14"></p>
        <div className="options my-4 border-b-2 border-slate-100">
          <div className="option md:text-xl  flex items-center  pb-4">
            <div className=" vote w-full flex justify-between items-center">
              <p className="h-14 mx-6  w-full bg-cyan-100 hover:bg-cyan-200 transitions-color duration-300 ease-in p-4"></p>
              <button className="  tracking-widest py-5 px-7 font-semibold text-sm bg-cyan-300 text-white rounded-md shadow-sm hover:text-black ease-in duration-200 "></button>
            </div>
          </div>
        </div>
      </div>
      <div className="sharing-links flex flex-col items-center h-18  justify-center my-4  "></div>
    </div>
  );
}
function ResultShimmer() {
  return (
    <div className="result-container my-6 w-full   flex flex-row justify-around  items-center">
      <div className="results w-4/5 md:w-1/2 min-h-max border-2 border-cyan-100 rounded flex flex-col">
        <p className="mx-4 my-2  capitalize text-2xl md:text-3xl font-bold tracking-wider  underline-offset-4"></p>
        <div className="h-40 option-result m-4 p-2 border-2 ">
          <div className="h-6 md:text-xl border-b-2 option font-medium"></div>
         
        </div>
      </div>
      <div className="sharing-links flex flex-col items-center h-18  justify-center my-4  ">
        <div className="w-40 h-40 border-2"></div>
      </div>

      {/* no need tochange */}
      {/* <div className="share-link border-2 w-4/5 flex  justify-around m-4">
        <button>Share link</button>
        <button>Share link</button>
        <button>Share link</button>
      </div> */}
    </div>
  );
}

export { YourPollShimmer, ResultShimmer };

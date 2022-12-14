// import { loader } from "../assets/index"

const Loader = ({title}) => {
  return (
    <div className="w-full flex justufy-center items-center flex-col">
      {/*
      .default for SVGs

      */}
      <img src={require('../assets/loader.svg').default} alt='loader' className="w-32 h-32 object-contain"/>
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || "Loading..."}
      </h1>
    </div>
  )
}

export default Loader
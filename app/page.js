import Image from "next/image";
import Button from "./components/Button";
import {GiClockwork} from 'react-icons/gi'
import { useMyContext } from "./components/hooks/context";
export default function Home() {
  // const {isOpen,setIsOpen} = useMyContext()

  return (
    <main className="md:px-10 bg-slate-50 px-5 pb-14 md:pt-20 pt-24 flex items-center justify-center">
      <section className="md:w-[60%] flex  flex-col items-center text-center md:text-start md:block">
      <div className="textContainer flex gap-4 items-center] ">
        <div className=" hidden md:block line"></div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl hidden md:block font-bold text-slate-600">Enjoy a Taste of</h1>
          <h1 className="text-4xl hidden md:block font-bold text-slate-600">Ghana</h1>
          <h1 className="text-[2.05rem] md:hidden text-center font-bold text-slate-600">Enjoy a Taste of Ghana</h1>
          <p className=" text-2xl md:text-xl md:w-72 text-slate-800">Bringing you the authentic Ghanaian Zongo style of cooking</p>

          <div className="px-7 rotate-90 md:hidden flex flex-col items-center w-full">
          <Image
            src={'/wk.jpg'}
            width={350}
            height={200}
            alt="Food" 
            className=" rounded-3xl"
          />
        </div>
          <p className=" md:text-sm text-xl text-center md:w-96 md:text-justify text-slate-500">
          Discover the rich flavors of Ghana with our authentic Zongo-style cooking. Experience the unique blend of flavors and spices that define Ghanaian cuisine, transporting you to the heart of this vibrant culture with every bite.
          </p>
        </div>
      </div>
      <div className="btnContiner  flex gap-5 md:gap-7 pt-7">
      {/* <div className=" hidden md:block line-1"></div> */}
        <Button txt={'View Menu'} url={'/about'}/>
        <Button txt={'Catering Services'} url={''}/>
      </div>
      <div className="pt-7 flex gap-7 ">
      <div className=" hidden md:block line-1"></div>
      <div>
        <h3 className="md:text-xl text-2xl font-bold text-slate-800">Working Hours</h3>
        <p className="md:text-md text-xl font-bold text-slate-600">09 : 00am - 11 : 00pm</p>
      </div>
      <div>
          <GiClockwork className="w-14 h-10 text-[#fa6969] mt-2 animate-bounce"/>
        </div>
      </div>
      </section>
       
      <section className="hidden md:block imgContainer md:w-[35%]">
      <div className=" rotate-90">
          <Image
            src={'/wk.jpg'}
            width={500}
            height={500}
            alt="Food" 
            className=" rounded-3xl"
          />
        </div>
     
      </section>
    </main>
  );
}

import Image from "next/image";
import Button from "./components/Button";
import {GiClockwork} from 'react-icons/gi'
export default function Home() {
  return (
    <main className="px-7 py-14 flex justify-center">
      <section className="w-[50%]">
      <div className="textContainer flex gap-4 items-center] ">
        <div className="line"></div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-slate-600">Enjoy a Taste of</h1>
          <h1 className="text-4xl font-bold text-slate-600">Ghana</h1>
          <p className=" text-xl w-80 text-slate-800">Bringing you the authentic Ghanaian Zongo style of cooking</p>
          <p className=" text-sm w-96 text-justify text-slate-500">
          Discover the rich flavors of Ghana with our authentic Zongo-style cooking. Experience the unique blend of flavors and spices that define Ghanaian cuisine, transporting you to the heart of this vibrant culture with every bite.
          </p>
        </div>
      </div>
      <div className="btnContiner flex gap-7 pt-7">
      <div className="line-1"></div>
        <Button txt={'View Menu'}/>
        <Button txt={'Catering Services'}/>
      </div>
      <div className="pt-7 flex gap-7 ">
      <div className="line-1"></div>
      <div>
        <h3 className="text-xl font-bold text-slate-600">Working Hours</h3>
        <p className="text-md font-bold text-slate-600">9am : 00am - 11 : 00pm</p>
      </div>
      <div>
          <GiClockwork className="w-14 h-10 text-[#fa6969] mt-2 animate-bounce"/>
        </div>
      </div>
      </section>
       
      <section className="imgContainer w-[40%]">
      <div className="">
          <Image
            src={'/rs.jpg'}
            width={500}
            height={500}
            alt="Food" 
            className=" rounded-3xl"
          />
        </div>
      {/* <div className="w-[]">
          <Image
            src={'/food.png'}
            width={200}
            height={200}
            alt="Food" 
            className="rounded-full h-[]"

          />
        </div> */}
      {/* <div className="w-[]">
          <Image
            src={'/gobe.jpg'}
            width={200}
            height={200}
            alt="Food" 
            className="rounded-full h-[]"
          />
        </div> */}
      </section>
    </main>
  );
}

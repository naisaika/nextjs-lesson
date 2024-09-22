import { getAllData } from "@/api/apiData"
import stlyes from "./WorksPicture.module.scss"
import Image from "next/image";

export const WorksPicture = async() => {

    const allData = await getAllData();

  return (
    <div>
        <ul>
            <li>
                <div>
                    <Image src="/works/1-1.jpg" alt="写真" width={300} height={200}></Image>
                    <Image src="/works/1-2.jpg" alt="写真" width={300} height={200}></Image>
                </div>
                <p>Q Plaza FUTAKOTAMAGAWA</p>
                <p>キュープラザ二子玉川</p>
                <p>Category:</p>
                <p>Shared Space</p>
                <p>Architect</p>
                <p>Honda, Ohkawa</p>
            </li>
        </ul>
    </div>
  )
}

import Image from "next/image";

import homeImage from "../../assets/images/undraw_data-trends_kv5v.svg";
import {PageTemplate} from "@/components/templates/page.template";


export default function Home() {
    return (
        <PageTemplate>
            <div className={'flex flex-col h-full'}>
                <div className={'flex flex-col grow gap-3 justify-center items-center'}>
                    <Image src={homeImage} alt={'home-image'} width={400} height={400}/>
                    <h3 className={'text-lg'}>Seja bem vindo! Aqui você pode gerenciar todas as suas incrições</h3>
                </div>
            </div>
        </PageTemplate>
    )
}
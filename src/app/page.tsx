import {Button} from "@/components/ui/button";
import successFactors from "../assets/images/undraw_success-factors_i417.svg";
import Image from "next/image";

export default function Home() {
    return (
        <div className={'col-span-full grid grid-cols-12'}>
            {/* header */}
            <header className={'col-span-full h-fit grid grid-cols-12 items-center py-3'}>
                <span className={'col-start-2 font-semibold text-2xl'}> Expirou </span>

                <Button variant={'link'} className={'col-start-11'}>Login</Button>
            </header>

            {/* presentation */}
            <main className={'col-start-2 col-end-12 grid grid-cols-12 gap-4 py-4'}>
                {/* why choose this company */}
                <div className={'col-span-full flex gap-6'}>
                    <div className={'flex flex-col gap-6'}>
                        <h1 className={'text-nowrap text-4xl'}>O que a expirei pode fazer por você ?</h1>
                        <h3 className={'text-sm w-3/4 bg-green-300'}>
                            Facilitamos o gerenciamento das suas assinaturas,
                            oferecendo uma visão clara dos seus gastos e notificações
                            inteligentes para que você tenha mais controle, economia e faça as melhores escolhas.
                        </h3>

                        <div className={'col-span-full'}>
                            <h2 className={'text-xl font-semibold'}>Os beneficios de usar a Expirei</h2>
                            <ul className={'flex flex-col gap-3'}>
                                <li>
                                    <span>Administração de todas as suas inscrições</span>
                                </li>
                                <li>
                                    <span>Adminsitração de todo o seu gasto com as inscrições</span>
                                </li>
                                <li>
                                    <span>Notificações personalizadas para jamais esquecer e no tempo certo</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Image src={successFactors} alt="presentation-market" width={600} height={600}/>
                </div>

                {/*  */}

            </main>
        </div>
    )
}

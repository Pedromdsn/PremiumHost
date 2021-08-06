import Image from "next/image"
import Link from "next/link"
import paypal from "../../../public/paypal.png"
import mercadoPago from "../../../public/mercadopago.png"
import picPay from "../../../public/picpay.png"
import { ARROW, INFO } from "../../icons/Home"

export default function HomeHome() {
	return (
		<div className="flex 2xl:my-40 flex-col w-1/2 mx-auto items-center text-white mt-32 text-center pb-20">
			<h1 className="font-extrabold text-5xl">O SUCESSO DO SEU SERVIDOR ESTÁ COM A PREMIUM HOSTING!</h1>
			<h2 className="font-light text-2xl mt-2">a solução definitiva para todos os tipos de games</h2>
			<div className="flex mt-3 gap-5 text-purple-500 flex-wrap justify-center">
				<HomeComp ico={ARROW} nome="Criar meu servidor" />
				<HomeComp ico={INFO} nome="Mais Informações" />
			</div>
			<div className="flex gap-5 mt-7">
				<Image src={mercadoPago} width={100} height={30} quality={30} />
				<Image src={paypal} width={110} height={30} quality={30} />
				<Image src={picPay} width={90} height={30} quality={30} />
			</div>
		</div>
	)
}

type HomeCompType = {
	ico: any
	nome: string
	link?: string
}

function HomeComp(props: HomeCompType) {
	return (
		<Link href={props.link || ""} >
			<button className="flex items-center cursor-pointer bg-white rounded px-3 py-2">
				{props.ico}
				<span className="ml-2">{props.nome}</span>
			</button>
		</Link>
	)
}

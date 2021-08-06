import Link from "next/link"
import Image from "next/image"
import { ReactNode } from "react"
import Imagem from "../../public/block-icon.png"

export default function FootBar() {
	return (
		<div className="bg-black text-white flex flex-col px-20 pt-20 pb-10 text-center">
			<div className="flex justify-evenly flex-wrap">
				<Foot title="Hospedagem">
					<Link href="/">Host Minecraft</Link>
					<Link href="/">Servidores Dedicado</Link>
					<Link href="/">Servidores VPS</Link>
				</Foot>
				<Foot title="A empresa">
					<Link href="/">Sobre a Premium</Link>
					<Link href="/">Fale conosco</Link>
				</Foot>
				<Foot title="Informações">
					<Link href="/">Política Utilização</Link>
					<Link href="/">Termos de Serviço</Link>
				</Foot>
				<Foot title="Atendimento">
					<Link href="/">Nosso discord</Link>
					<Link href="/">Central de ajuda</Link>
					<Link href="/">Status dos Serviços</Link>
				</Foot>
			</div>
			<div className="flex flex-col justify-center items-center text-xl text-gray-300">
				<div>
					<Image src={Imagem} height={100} width={100}/>
				</div>
				<h1>PremiumHosting © 2021</h1>
				<h2>Todos os direitos reservados</h2>
			</div>
		</div>
	)
}

type FootType = {
	title: string
	children?: ReactNode
}

function Foot(prop: FootType) {
	return (
		<div className="mb-32">
			<div className="font-bold mb-10 text-xl">
				<h1>{prop.title}</h1>
			</div>
			<div className="flex flex-col">{prop.children}</div>
		</div>
	)
}

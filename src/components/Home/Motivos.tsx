import Image from "next/image"
import motivo1 from "../../../public/atendimento.png"
import motivo2 from "../../../public/pro.png"
import motivo3 from "../../../public/uptime.png"
import motivo4 from "../../../public/hardware.png"

export default function HomeMotivos() {
	return (
		<div className="max-w-7xl md:px-10 px-20 mx-auto">
			<h1 className="md:w-full w-1/2 font-bold text-5xl text-center mx-auto mb-20">
				Temos 4 motivos para você escolher a Premium Hosting
			</h1>
			<div className="flex flex-col gap-60">
				<Motivo
					icon={motivo1}
					extraTitulo="ATENDIMENTO"
					titulo="Suporte eficiente & rápido!"
					text="Uma das nossas principais preocupações é entregar aos nossos clientes o melhor suporte e o mais rápido, temos uma equipe especializada e pronta para te ajudar sempre que for preciso."
				/>
				<Motivo
					inv
					icon={motivo2}
					extraTitulo="PROTEÇÃO"
					titulo="Proteção Anti-DDoS PRO!"
					text="Utilizamos somente as melhores operadoras para oferecer uma proteção Anti-DDoS de qualidade aos servidores hospedados conosco, temos as melhoras proteções disponíveis no mercado."
				/>
				<Motivo
					icon={motivo3}
					extraTitulo="UPTIME"
					titulo="Servidor sempre disponível!"
					text="Trabalhamos dia e noite para te entregar um uptime perfeito, mas acredite problemas acontecem a real importância é que sempre estaremos a disposição para solucioná-los o rápido."
				/>
				<Motivo
					inv
					icon={motivo4}
					extraTitulo="HARDWARE"
					titulo="Hardware com qualidade!"
					text="Trabalhamos somente com hardware de última geração para garantir a melhor experiência com qualidade para o seu servidor, priorizamos sempre manter o melhor desempenho disponível."
				/>
			</div>
			<div className="flex justify-around mt-20 mb-40 flex-wrap">
				<Extra titulo="+ 4000" text="servidores criados"/>
				<Extra titulo="+ 6000" text="atendimentos realizados"/>
			</div>
		</div>
	)
}

type MotivoType = {
	inv?: boolean
	icon: any
	extraTitulo: string
	titulo: string
	text: string
}

function Motivo(prop: MotivoType) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex flex-col md:w-full md:text-center w-2/3">
				<h3 className="text-gray-600 mb-5">{prop.extraTitulo}</h3>
				<h1 className="text-4xl font-extrabold mb-10">{prop.titulo}</h1>
				<h2 className="text-2xl text-gray-800">{prop.text}</h2>
			</div>
			<div className={`w-1/3 md:hidden ${prop.inv ? "order-first" : "order-last"}`}>
				<Image src={prop.icon} />
			</div>
		</div>
	)
}


type ExtraType = {
	titulo: string
	text: string
}

function Extra(prop: ExtraType) {
	return (
		<div className="text-center md:mb-10">
			<h1 className="font-bold text-4xl">{prop.titulo}</h1>
			<h2 className="text-gray-700">{prop.text}</h2>
		</div>
	)
}
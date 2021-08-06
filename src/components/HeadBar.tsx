import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Premium from "../../public/logo-white.png"
import { AREA, BURGUER, CLOUD, DISCORD, HOME, HOSPEDAGEM, INSTA, STATUS, TWITTER } from "../icons/HeadBar"

export default function HeadBar() {
	const [menu, setMenu] = useState(false)

	return (
		<div className={`flex xl:justify-around items-center text-white justify-center py-10 mx-10 text-center ${menu && "xl:mb-96"}`}>
			<div className="mr-20">
				<Link href="/">
					<Image src={Premium} />
				</Link>
			</div>
			<div className={`flex xl:flex-col xl:absolute xl:w-2/3 top-40 ${!menu && "xl:hidden"} `}>
				<div className="flex gap-7 text-lg mx-5 xl:flex-col">
					<HeadBarComp ico={HOME} nome="Pagina Inicial" link="/" />
					<HeadBarComp ico={HOSPEDAGEM} nome="Hospedagem" />
					<HeadBarComp ico={CLOUD} nome="Servidores" />
					<HeadBarComp ico={STATUS} nome="Status" />
				</div>
				<div className="flex mx-7 xl:hidden">
					<HeadBarComp ico={DISCORD} />
					<HeadBarComp ico={TWITTER} />
					<HeadBarComp ico={INSTA} />
				</div>
				<div className="py-2 px-4 rounded-md border xl:flex-col xl:mt-5">
					<HeadBarComp ico={AREA} nome="Area do Cliente" />
				</div>
			</div>
			<div className="hidden xl:flex" onClick={(e) => setMenu(!menu)}>
				{BURGUER}
			</div>
		</div>
	)
}

type HeadBarCompType = {
	ico: any
	nome?: string
	link?: string
}

function HeadBarComp(props: HeadBarCompType) {
	return (
		<Link href={props.link || ""}>
			<div className="flex items-center cursor-pointer">
				{props.ico}
				<span className="ml-2">{props.nome}</span>
			</div>
		</Link>
	)
}

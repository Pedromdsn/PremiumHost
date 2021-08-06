import Image from "next/image"
import Link from "next/link"
import mine from "../../../public/minecraft.png"
import gta from "../../../public/gtaV.png"
import { ARROW } from "../../icons/Home"

export default function HomePlanos() {
	return (
		<div className="flex pb-24 pt-20 justify-center gap-10 2xl:hidden">
			<Plano icon={mine} text="Nossos planos" />
			<Plano icon={gta} text="Nossos planos" />
		</div>
	)
}

type PlanoType = {
	icon: any
	text: string
}

function Plano(prop: PlanoType) {
	return (
		<Link href="">
			<div className="flex flex-col items-center bg-white rounded-3xl py-10 px-40 shadown">
				<div className="-mt-48">
					<Image src={prop.icon} width={300} height={300} quality={100} />
				</div>
				<div className="flex text-purple-600 text-2xl font-extrabold items-center">
					<div>{prop.text}</div>
					<div className="ml-2">{ARROW}</div>
				</div>
			</div>
		</Link>
	)
}

import Head from "next/head"
import HeadBar from "../components/HeadBar"
import HomeHome from "../components/Home/Home"
import HomeMotivos from "../components/Home/Motivos"
import HomePlanos from "../components/Home/Planos"
import FootBar from "../components/FootBar"

export default function Home() {
	return (
		<>
			<div className="head bg-purple-600 mb-40">
				<HeadBar />
				<HomeHome />
				<HomePlanos />
			</div>
			<HomeMotivos />
			<FootBar />
		</>
	)
}

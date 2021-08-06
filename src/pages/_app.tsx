import Head from "next/head"
import "tailwindcss/tailwind.css"
import "../style/global.scss"

function MyApp({ Component, pageProps }) {
	return (
		<div className="font-premium overflow-x-hidden">
			<Head>
				<title>Premium Host</title>
				<link rel="icon" sizes="48x48" href="/favicon.png" />
				<meta name="description" content="Minecraft host a um preço super gostoso." />
				<meta name="author" content="Coco Blanco" />
			</Head>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp

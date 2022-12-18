import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="theme-color" href="#0000" />
					<link rel="icon" href="/img/favicon.png" />
				</Head>
				<body className="">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
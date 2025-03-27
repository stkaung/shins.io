"use client";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import FooterContextProvider from "@/context_api/FooterContext";
import HeaderContextProvider from "@/context_api/HeaderContext";
import PortfolioRenderContextProvider from "@/context_api/PortfolioRenderContext";
import smoothScroll from "@/libs/smoothScroll";
import { useEffect } from "react";
import BackToTop from "../others/BackToTop";
import Preloader from "../others/Preloader";

const PageWrapper = ({
	children,
	isIndexPage,
	isInnerPage,
	isResumeBtn,
	headerType,
	footerType,
}) => {
	useEffect(() => {
		import("wow.js").then(({ default: WOW }) => {
			new WOW().init();
		});
		smoothScroll();
	}, []);
	return (
		<div>
			<Preloader />

			<BackToTop />
			<HeaderContextProvider
				value={{ isIndexPage, isInnerPage, headerType, isResumeBtn }}
			>
				<Header />
				<Header isSticky={true} />
			</HeaderContextProvider>
			<PortfolioRenderContextProvider>
				{children ? children : ""}
			</PortfolioRenderContextProvider>
			<FooterContextProvider value={{ footerType }}>
				<Footer />
			</FooterContextProvider>
		</div>
	);
};

export default PageWrapper;

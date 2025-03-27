"use client";
import Socials4 from "@/components/shared/socials/Socials4";
import { useHeaderContext } from "@/context_api/HeaderContext";
import stickyHeader from "@/libs/stickyHeader";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Header = ({ isSticky }) => {
	const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);
	const { isInnerPage, headerType } = useHeaderContext();
	useEffect(() => {
		stickyHeader();
	}, []);

	return (
		<header
			className={`header-area  ${
				isSticky ? "header-2 header-sticky" : "header-absolute"
			}`}
		>
			<div
				className={`${
					isSticky ? "py-10px" : "pt-15px xl:pt-5 pb-5 md:pb-30px xl:pb-5"
				} relative`}
			>
				<div className="container">
					<div className="flex flex-wrap justify-between items-center">
						{/* <!-- logo and contact email --> */}
						<div>
							<ul className="flex items-center gap-x-15px xl:gap-x-35px">
								<li>
									<Logo isSticky={isSticky} />
								</li>
								{headerType === 3 ? (
									""
								) : (
									<li className="hidden md:block">
										<Link
											href="mailto:mail@gerolddesign.com"
											className={`text-size-15 font-medium ${
												isInnerPage && !isSticky
													? "text-white-color"
													: "text-seondary-color dark:text-white-color"
											} `}
										>
											mail@gerolddesign.com
										</Link>
									</li>
								)}
							</ul>
						</div>
						{/* <!-- main menu --> */}
						<Navbar
							isActiveMobileMenu={isActiveMobileMenu}
							setIsActiveMobileMenu={setIsActiveMobileMenu}
							isSticky={isSticky}
						/>
						{/* <!-- social button --> */}
						{headerType === 3 ? (
							<div className="hidden lg:block">
								<Socials4 />
							</div>
						) : (
							""
						)}
					</div>
				</div>
				{/* <!-- mobile menu --> */}
				<MobileMenu isActiveMobileMenu={isActiveMobileMenu} />
			</div>
		</header>
	);
};

export default Header;

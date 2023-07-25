import Image from "next/image";
import FeatImage01 from "@/public/images/who.jpg";
import FeatImage02 from "@/public/images/vision.jpg";
import FeatImage03 from "@/public/images/team.jpg";

export const metadata = {
    title: 'About - Relu',
    description: 'About page of Relu - Who we are | Our vision | our team',
}

export default function About() {

    return (
        <>
            <section>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="py-12 md:py-20 border-t border-gray-800">

                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                            <h1 className="h2 mb-4">About</h1>
                        </div>

                        {/* Items */}
                        <div className="grid gap-20">

                            {/* 1st item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">

                                        <h3 className="h3 mb-3">Who we are</h3>
                                        <p className="text-xl text-gray-400 mb-4">We are a software team that develops systems used in the hospitality industry. Our innovative applications provide tourists with personal attention and unique assistance.</p>

                                    </div>
                                </div>
                            </div>

                            {/* 2nd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                                        <h3 className="h3 mb-3">Our vision</h3>
                                        <p className="text-xl text-gray-400 mb-4">We aim to revolutionize the tourism market by creating new and powerful technologies that can modernize your business.</p>

                                    </div>
                                </div>
                            </div>

                            {/* 3rd item */}
                            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                                {/* Image */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
                                </div>
                                {/* Content */}
                                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                        <h3 className="h3 mb-3">Our team</h3>
                                        <p className="text-xl text-gray-400 mb-4">We are comprised of a team of full-stack software engineers with years of work experience and international preparation.</p>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
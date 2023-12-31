import CardProduct from "@/components/CardProduct";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";



export default function Home({ products }) {
    // console.log("huu",products)
    return <main>
        <HeroBanner />
        <Wrapper>
            {/* heading and paragaph start */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                    Cushioning for Your Miles
                </div>
                <div className="text-md md:text-xl">
                    A lightweight Nike ZoomX midsole is combined with
                    increased stack heights to help provide cushioning
                    during extended stretches of running.
                </div>
            </div>
            {/* heading and paragaph end */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:my-14 px-5 md:px-0 md:mx-0 sm:mx-[10%]">
                {products?.data?.map((product) => (
                    <CardProduct key={product?.id} data={product} />   //changed
                ))}

            </div>
        </Wrapper>
    </main>;
}

export async function getStaticProps() {
    const products = await fetchDataFromApi('/api/products?populate=*');
    return {
        props: { products },
    }
}

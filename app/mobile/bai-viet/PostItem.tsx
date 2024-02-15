import Link from "next/link";
import HeaderPost from "./components/HeaderPost";
import FooterPost from "./components/FooterPost";

function PostItem({ data } : { data: any }) {
    return ( 
        <div className="px-4 pt-4 mb-2 bg-white">
            <HeaderPost data={data} />

            <div>
                <div className="overflow-hidden">
                    <img 
                        className="w-full" 
                        loading="lazy" 
                        src={`${data.src ? data.src : 'https://lh3.googleusercontent.com/d/1Rjt7q0xvL0JFWcoTql-stBdJSAJnguVU=s1000?authuser=0'}`} 
                        alt="Bài viết" 
                    />
                </div>
                <div className="mt-2">
                    <Link href={`/mobile/bai-viet/chi-tiet-bai-viet`} className="text-sm font-bold text-[#262C41] overflow-hidden">
                        {`${data.title}`}
                    </Link>
                    <p className="text-xs text-[#686E7E] my-1 line-clamp-3">
                        {`${data.description}`}
                    </p>
                </div>
            </div>

            <FooterPost data={data}/>
        </div>
    );
}

export default PostItem;
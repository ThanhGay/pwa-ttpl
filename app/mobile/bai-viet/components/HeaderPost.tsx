import Link from "next/link";

function HeaderPost({ data } : {data: any}) {
    return (
        <header className="flex justify-between mb-2">
            <div className="flex">
                <img
                    src="https://ttpl.vn/assets/images/logo/logo-legalzone.png"
                    className="w-10 h-10 object-cover rounded-full"
                    alt="avatar"
                />
                <div className="flex flex-col ml-2 justify-center">
                    <Link
                        href="/mobile/trang-ca-nhan"
                        className="text-sm font-bold text-[#262C41]"
                    >
                        {`${data.user}`}
                    </Link>
                    <p className="text-xs text-[#B5B9C7]">
                        {`${data.publishAt} ngày trước`}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <div className="rounded py-[6px] px-[10px] text-xs font-medium text-[#262C41] bg-[#F4F5F8]">
                    Theo dõi
                </div>
            </div>
        </header>
    );
}

export default HeaderPost;

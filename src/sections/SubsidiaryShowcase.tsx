const SubsidiaryShowcase = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <figure className="w-full h-[200px]">
                <img className="w-full object-cover h-full" src="/assets/images/about-company.png" />
            </figure>
            <div className="mt-[40px] grid grid-cols-[55%_45%] border-[#D2DADF] border-t">
                <div className="pt-[40px]  border-[#D2DADF] border-r border-b pb-[40px]">
                    <div className="pr-[56px] pb-[40px]">
                    <p className="text-[32px] leading-[36.24px] tracking--[0.432px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure obcaecati mollitia animi quia recusandae tempora dolores nihil, fugit provident nostrum at optio quisquam ut facere magnam doloribus incidunt soluta vel.</p>
                    <div className="flex gap-[23px] mt-[40px] "><button className="flex items-center py-[12px] px-[24px] bg-[#FF9A53] text-[17.28px] text-white rounded-full leading-[26px]">Know More</button>
                    <button className="py-[12px] px-[24px] text-[17.28px] text-[#222222] border border-[#D2DADF] rounded-full leading-[26px]">Contact Us</button>
                    </div>

                    </div>
                    <div className="border-t border-[#D2DADF] pr-[56px] pt-[40px] font-semibold">
                        <h3 className="text-[14px]">SPOTLIGHT</h3>
                        <div className>
                            
                        </div>
                    </div>
                </div>
                <div className="pt-[40px]"></div>
            </div>
        </div>
    );
}
export default SubsidiaryShowcase;
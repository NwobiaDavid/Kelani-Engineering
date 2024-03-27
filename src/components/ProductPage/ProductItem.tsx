

function ProductItem() {
    return (
        <div className="justify-center flex items-center " >
            <div className="h-[450px] w-[500px] border  bg-black  overflow-hidden border-white border-opacity-40 rounded-xl ">
                <div className=" w-full h-[60%]  overflow-hidden " >
                    <img className=" w-full h-full object-cover " src="assets/images/productImages/Layer_Img.png" alt="" />
                </div>
                <div className="w-full h-[40%] flex flex-col " >
                    <div className=" h-[30%] px-8 py-2 flex  " >
                        <span className="bg-[#1D2D25] opacity-80 rounded-lg px-2 py-[3px] flex justify-center items-center ">Category</span>
                        <span className="bg-[#1D2D25] opacity-80 rounded-lg px-2 py-[3px] flex justify-center items-center ml-3 ">Tag1</span>
                    </div>
                    <div className=" h-[70%] text-lg flex w-full justify-center items-center " >
                        Product Descriptions
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProductItem
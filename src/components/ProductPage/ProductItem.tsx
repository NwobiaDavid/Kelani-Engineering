import React from 'react';

interface ImageProps {
    url: string;
    title: string;
    mimetype: string;
    size: number;
    signedUrl: string;
}

interface DataProps {
    Id: number;
    Product_Collection: string;
    Product: string;
    Image: ImageProps[];
}

const ProductItem:React.FC<{
    data: DataProps
}> = ({data}) => {
  return (
    <div className="justify-center flex items-center " >
    <div className="h-[450px] w-[500px] border  bg-black  overflow-hidden border-white border-opacity-40 rounded-xl ">
        <div className=" w-full h-[60%]  overflow-hidden " >
            <img className=" w-full h-full object-cover " src={data.Image[0].signedUrl} alt="" />
        </div>
        <div className="w-full h-[40%] flex flex-col " >
            <div className=" h-[30%] px-4 md:px-8 py-2 flex  " >
                <span className="bg-[#1D2D25] opacity-80 rounded-lg px-2 py-[3px] flex justify-center items-center "> {data.Product_Collection} </span>
            </div>
            <div className=" h-[70%] text-center text-lg flex w-full justify-center items-center " >
                {data.Product}
            </div>
        </div>


    </div>
</div>
  )
}

export default ProductItem

const BrandBlock = ({ imageSources }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pt-10 gap-5 bg-white pb-10 px-3 md:px-10 lg:px-36">
            {
                imageSources.map((images) => (
                    <div className="col-span-1 h-32 cursor-pointer transform transition ease-out duration-300 hover:scale-110">
                        <img src={images}
                            className="object-cover"
                            alt="" />
                    </div>
                ))
            }
        </div>
    );
}

export default BrandBlock;
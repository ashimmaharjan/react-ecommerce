import BrandBlock from "./BrandBlock";

const Brands = () => {

    const imageSources = [
        "https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/brands/new_brand1.png",
        "https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/brands/new_brand2.png",
        "https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/brands/new_brand3.png",
        "https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/brands/new_brand4.png",
        "https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/brands/new_brand5.png",
        "https://www.portotheme.com/magento2/porto/pub/media/wysiwyg/smartwave/porto/brands/new_brand6.png",
    ]

    return (
        <div>
            <BrandBlock imageSources={imageSources}></BrandBlock>
        </div>
    );
}

export default Brands;
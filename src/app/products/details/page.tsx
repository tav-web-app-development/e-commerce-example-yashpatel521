import Comment from "../../components/comments";
import Image from "next/image";

const productData = {
  id: 1,
  name: "Iphone 12 Pro Max",
  description: "The best iPhone ever!",
  price: "$99.99",
  image: "/iphone.jpg",
  category: "Electronics",
  brand: "Apple",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  availability: "In Stock",
  staticComments: [
    "Great product!",
    "I love this product.",
    "This product is amazing.",
  ],
};

const ProductDetail = () => {
  return (
    <div className="product-detail bg-black text-white shadow-lg rounded-lg ">
      <div className="flex flex-col">
        <div className="flex">
          <div className="relative w-1/2  mb-6 border-solid border-r-2 border-zinc-500 p-5 m-5">
            <Image
              src={productData.image}
              alt={productData.name}
              layout="fill"
              objectFit="contain"
              className="rounded-lg w-full h-full"
            />
          </div>
          <div className="px-4 my-2">
            <h2 className="text-3xl font-bold mb-4">{productData.name}</h2>
            <p className="text-lg mb-4">{productData.description}</p>
            <p className="text-2xl font-bold mb-4">{productData.price}</p>
            <p className="text-md mb-4">
              <strong>Category:</strong> {productData.category}
            </p>
            <p className="text-md mb-4">
              <strong>Brand:</strong> {productData.brand}
            </p>
            <p className="text-md mb-4">
              <strong>Availability:</strong> {productData.availability}
            </p>
            <div className="mb-6">
              <strong>Features:</strong>
              <ul className="list-disc list-inside ml-4 mt-2">
                {productData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Comment staticComments={productData.staticComments} />
      </div>
    </div>
  );
};

export default ProductDetail;

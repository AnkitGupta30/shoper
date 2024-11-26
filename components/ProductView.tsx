import { Category, Product } from "@/sanity.types";
import React from "react";
import ProductGrid from "./ProductGrid";
import { CategorySelectorComponent } from "./ui/category-selector";

interface ProductViewProp {
  products: Product[];
  categories: Category[];
}
const ProductView = ({ products, categories }: ProductViewProp) => {
  return (
    <div className="flex flex-col">
      {/* categories  */}
      <div className="w-full sm:w-[200px] mb-4">
        <CategorySelectorComponent categories={categories} />
      </div>
      {/* products  */}
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductView;

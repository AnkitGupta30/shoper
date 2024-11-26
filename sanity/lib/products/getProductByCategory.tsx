import { sanityFetch } from "../live";
import { defineQuery } from "next-sanity";

export const getProductByCategory = async (categorySlug: string) => {
  const PRODUCT_BY_CATEGORIES_QUERY = defineQuery(`
        *[_type == "product" && references(*[_type == "category" && slug.current == $categorySlug]._id) ] | order(name asc)
        `);

  try {
    const products = await sanityFetch({
      query: PRODUCT_BY_CATEGORIES_QUERY,
      params: {
        categorySlug,
      },
    });

    return products.data || [];
  } catch (error) {
    console.error("Error fething all categories", error);
    return [];
  }
};

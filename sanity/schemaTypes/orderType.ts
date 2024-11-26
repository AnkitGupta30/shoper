// import { BasketIcon } from "@sanity/icons";
// import { defineArrayMember, defineField, defineType } from "sanity";

// export const orderType = defineType({
//   name: "order",
//   title: "Order",
//   type: "document",
//   icon: BasketIcon,
//   fields: [
//     defineField({
//       name: "orderNumber",
//       title: "Order Number",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "stripeCheckoutSessionId",
//       title: "Stripe Checkout Session ID",
//       type: "string",
//     }),
//     defineField({
//       name: "stripeCustomerId",
//       title: "Stripe Customer ID",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "clerkUserId",
//       title: "Store User ID",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "customerName",
//       title: "Customer Name",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "email",
//       title: "Customer Email",
//       type: "string",
//       validation: (Rule) => Rule.required().email(),
//     }),
//     defineField({
//       name: "stripePaymentIntentId",
//       title: "Stripe Payment Intent ID",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       title: "Products",
//       name: "products",
//       type: "array",
//       of: [
//         defineArrayMember({
//           type: "object",
//           fields: [
//             defineField({
//               name: "product",
//               title: "Product Bought",
//               type: "reference",
//               to: [{ type: "product" }],
//             }),
//             defineField({
//               name: "quantity",
//               title: "Quantity Purchased",
//               type: "number",
//             }),
//           ],
//           preview: {
//             select: {
//               product: "product.name",
//               quantity: "quantity",
//               image: "product.image",
//               price: "product.price",
//               currency: "product.currency",
//             },
//             prepare(select) {
//               return {
//                 title: `${select.product} x ${select.quantity}`,
//                 subtitle: `${select.price * select.quantity}`,
//                 media: select.image,
//               };
//             },
//           },
//         }),
//       ],
//     }),
//     defineField({
//       name: "totalPrice",
//       title: "Total Price",
//       type: "number",
//       validation: (Rule) => Rule.required().min(0),
//     }),
//     defineField({
//       name: "currency",
//       title: "Currency",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       name: "amountDiscount",
//       title: "Amount Discount",
//       type: "number",
//       validation: (Rule) => Rule.min(0),
//     }),
//     defineField({
//       name: "status",
//       title: "Order Status",
//       type: "string",
//       options: {
//         list: [
//           {
//             title: "Pending",
//             value: "pending",
//           },
//           {
//             title: "Paid",
//             value: "paid",
//           },
//           {
//             title: "Shipped",
//             value: "shipped",
//           },
//           {
//             title: "Delivered",
//             value: "delivered",
//           },
//           {
//             title: "Cancelled",
//             value: "cancelled",
//           },
//         ],
//       },
//     }),
//     defineField({
//       name: "orderDate",
//       title: "Order Date",
//       type: "datetime",
//       validation: (Rule) => Rule.required(),
//     }),
//   ],
//   preview: {
//     select: {
//       name: "customerName",
//       amount: "totalPrice",
//       currency: "currency",
//       orderId: "orderNumber",
//       email: "email",
//     },
//     prepare(select) {
//       const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
//       return {
//         title: `${select.name} (${orderIdSnippet})`,
//         subtitle: `${select.amount} ${select.currency} ${select.email}`,
//         media: BasketIcon,
//       };
//     },
//   },
// });

import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string",
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Store User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Products",
      name: "products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product Bought",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "quantity",
              title: "Quantity Purchased",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
              image: "product.image",
              price: "product.price",
              currency: "product.currency",
            },
            prepare(select) {
              const { product, quantity, price, currency, image } = select;
              const productTitle = product || "Unnamed Product";
              const total = price && quantity ? price * quantity : "N/A";
              const currencySymbol = currency || "";
              return {
                title: `${productTitle} x ${quantity || 1}`,
                subtitle: `${total} ${currencySymbol}`,
                media: image,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amountDiscount",
      title: "Amount Discount",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderId: "orderNumber",
      email: "email",
    },
    prepare(select) {
      const { name, amount, currency, orderId, email } = select;
      const orderIdSnippet =
        orderId && orderId.length > 10
          ? `${orderId.slice(0, 5)}...${orderId.slice(-5)}`
          : orderId || "N/A";
      return {
        title: `${name || "Unnamed Customer"} (${orderIdSnippet})`,
        subtitle: `${amount || 0} ${currency || "Currency"} - ${email || "No Email"}`,
        media: BasketIcon,
      };
    },
  },
});

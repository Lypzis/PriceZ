export const calculators = [
  {
    slug: "mercado-livre",
    name: "Mercado Livre",
    toolName: "Mercado Livre Calculator",
    summary: "Estimate selling fees and margin for Mercado Livre listings.",
    marketplaceInfo: {
      description:
        "Mercado Livre fees vary by listing type, category, and product price. In Brazil, official help docs indicate different ranges for Clássico and Premium listings, plus possible fixed charges depending on product value and category.",
      highlights: [
        "Clássico listing fee: typically between 10% and 14% (category-dependent).",
        "Premium listing fee: typically between 15% and 19% (category-dependent).",
        "A fixed charge may apply in some price ranges and categories."
      ]
    }
  },
  {
    slug: "shopee",
    name: "Shopee",
    toolName: "Shopee Calculator",
    summary: "Model Shopee fees, shipping impact, and expected profit.",
    marketplaceInfo: {
      description:
        "Shopee fee rules in Brazil change frequently and depend on seller profile and programs (such as free-shipping programs). Typical market references show a base commission model with additional program and per-item charges.",
      highlights: [
        "Common baseline references show ~14% standard commission in Brazil.",
        "Joining free-shipping programs can add an extra percentage fee.",
        "A fixed fee per sold item is commonly applied and may vary by policy cycle."
      ],
      notice:
        "Confirm the exact current values in Shopee Seller Center before pricing, because the policy has frequent updates."
    }
  },
  {
    slug: "amazon",
    name: "Amazon",
    toolName: "Amazon Fee Calculator",
    summary: "Preview Amazon marketplace fees before publishing your product.",
    marketplaceInfo: {
      description:
        "Amazon referral fees depend on product category and are charged on total sale price (item price, shipping, and gift wrap when applicable). Many categories use percentage rates with a minimum per-item charge.",
      highlights: [
        "Referral fee percentages vary by category, often around 8% to 15%.",
        "Some categories use tiered percentages by price band.",
        "Many categories include a minimum referral fee of $0.30 per item."
      ]
    }
  },
  {
    slug: "etsy",
    name: "Etsy",
    toolName: "Etsy Fee Calculator",
    summary: "Calculate Etsy transaction and listing costs in advance.",
    marketplaceInfo: {
      description:
        "Etsy charges both listing and transaction fees. Current policy documentation states a listing fee per item and a transaction percentage that also applies to shipping and gift wrapping.",
      highlights: [
        "Listing fee: $0.20 per listing (renewed under Etsy rules).",
        "Transaction fee: 6.5% of order amount, including shipping/gift wrap.",
        "Payment processing and Offsite Ads fees may apply depending on location and program."
      ]
    }
  },
  {
    slug: "shopify",
    name: "Shopify",
    toolName: "Shopify Profit Calculator",
    summary: "Understand net profit after payment and operating costs on Shopify.",
    marketplaceInfo: {
      description:
        "Shopify is not a marketplace referral-fee model, but your effective selling cost depends on plan subscription and payment processing setup.",
      highlights: [
        "US online card rates on Shopify plans are typically in the 2.5% to 2.9% + $0.30 range.",
        "Third-party payment provider fees typically vary by plan (for example, around 0.6% to 2%).",
        "Using Shopify Payments can reduce or remove many third-party transaction fees."
      ]
    }
  }
]

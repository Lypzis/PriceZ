export function calculatePrice (cost, shipping, desiredProfit, feePercent) {
  const fee = Number(feePercent) / 100

  if (fee >= 1) {
    return 0
  }

  return (Number(cost) + Number(shipping) + Number(desiredProfit)) / (1 - fee)
}

export function calculateMetrics ({ cost, shipping, desiredProfit, feePercent }) {
  const recommendedPrice = calculatePrice(cost, shipping, desiredProfit, feePercent)

  if (recommendedPrice <= 0) {
    return {
      recommendedPrice: 0,
      marketplaceFeeValue: 0,
      realizedProfit: 0,
      profitMargin: 0
    }
  }

  const marketplaceFeeValue = recommendedPrice * (Number(feePercent) / 100)
  const realizedProfit =
    recommendedPrice - marketplaceFeeValue - Number(cost) - Number(shipping)
  const profitMargin = (realizedProfit / recommendedPrice) * 100

  return {
    recommendedPrice,
    marketplaceFeeValue,
    realizedProfit,
    profitMargin
  }
}

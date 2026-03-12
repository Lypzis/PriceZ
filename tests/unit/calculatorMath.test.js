import { calculateMetrics, calculatePrice } from "src/utils/calculatorMath"

describe("calculatorMath", () => {
  it("calculates recommended selling price with the documented formula", () => {
    const price = calculatePrice(20, 6, 10, 16)
    expect(price).toBeCloseTo(42.8571, 4)
  })

  it("returns expected fee, profit and margin metrics", () => {
    const metrics = calculateMetrics({
      cost: 20,
      shipping: 6,
      desiredProfit: 10,
      feePercent: 16
    })

    expect(metrics.recommendedPrice).toBeCloseTo(42.8571, 4)
    expect(metrics.marketplaceFeeValue).toBeCloseTo(6.8571, 4)
    expect(metrics.realizedProfit).toBeCloseTo(10, 4)
    expect(metrics.profitMargin).toBeCloseTo(23.3333, 4)
  })

  it("returns zero metrics for invalid fee percentage (>= 100%)", () => {
    const metrics = calculateMetrics({
      cost: 20,
      shipping: 6,
      desiredProfit: 10,
      feePercent: 100
    })

    expect(metrics).toEqual({
      recommendedPrice: 0,
      marketplaceFeeValue: 0,
      realizedProfit: 0,
      profitMargin: 0
    })
  })
})

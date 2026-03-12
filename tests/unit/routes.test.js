import routes from "src/router/routes"

function getMainChildren () {
  const mainRoute = routes.find((route) => route.path === "/")
  return mainRoute?.children || []
}

describe("router routes", () => {
  it("includes dynamic calculators route", () => {
    const calculatorsRoute = getMainChildren().find((route) => route.path === "calculators/:platform")
    expect(calculatorsRoute).toBeTruthy()
  })

  it("redirects /calculator/:platform to /calculators/:platform", () => {
    const legacyRoute = getMainChildren().find((route) => route.path === "calculator/:platform")
    expect(typeof legacyRoute?.redirect).toBe("function")
    expect(legacyRoute.redirect({ params: { platform: "amazon" } })).toBe("/calculators/amazon")
  })

  it("redirects /terms-of-service to /terms", () => {
    const legacyTermsRoute = getMainChildren().find((route) => route.path === "terms-of-service")
    expect(legacyTermsRoute?.redirect).toBe("/terms")
  })
})

import { mount } from "@vue/test-utils"
import CalculatorForm from "src/components/CalculatorForm.vue"
import FAQSection from "src/components/FAQSection.vue"

describe("CalculatorForm", () => {
  it("emits submit when the form is submitted", async () => {
    const wrapper = mount(CalculatorForm)
    await wrapper.find("q-form").trigger("submit")

    expect(wrapper.emitted("submit")).toHaveLength(1)
  })
})

describe("FAQSection", () => {
  it("renders one expansion item per FAQ entry", () => {
    const items = [
      { question: "Q1", answer: "A1" },
      { question: "Q2", answer: "A2" }
    ]
    const wrapper = mount(FAQSection, {
      props: { items }
    })

    const nodes = wrapper.findAll("q-expansion-item")
    expect(nodes).toHaveLength(2)
    expect(nodes[0].attributes("label")).toBe("Q1")
    expect(nodes[1].attributes("label")).toBe("Q2")
  })
})

import { config } from "@vue/test-utils"

config.global.config = {
  compilerOptions: {
    isCustomElement: (tag) => tag.startsWith("q-")
  }
}

config.global.stubs = {
  RouterLink: {
    template: "<a><slot /></a>"
  }
}

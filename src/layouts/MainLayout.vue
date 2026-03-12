<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link
            to="/"
            class="brand-link"
          >
            Pricez
          </router-link>
        </q-toolbar-title>

        <div class="gt-sm row q-gutter-sm">
          <q-btn-dropdown
            flat
            dense
            no-caps
            label="Calculators"
            auto-close
          >
            <q-list style="min-width: 220px">
              <q-item
                v-for="item in calculatorNavItems"
                :key="item.to"
                clickable
                v-ripple
                :to="item.to"
              >
                <q-item-section>{{ item.label }}</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn
            v-for="item in baseNavItems"
            :key="item.to"
            flat
            dense
            no-caps
            :label="item.label"
            :to="item.to"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="lt-md"
    >
      <q-list padding>
        <q-item-label header>Calculators</q-item-label>
        <q-item
          v-for="item in calculatorNavItems"
          :key="item.to"
          clickable
          v-ripple
          :to="item.to"
        >
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>

        <q-separator class="q-my-sm" />

        <q-item-label header>Pages</q-item-label>
        <q-item
          v-for="item in baseNavItems"
          :key="item.to"
          clickable
          v-ripple
          :to="item.to"
        >
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <SiteFooter />
  </q-layout>
</template>

<script setup>
import { ref } from "vue"
import SiteFooter from "src/components/SiteFooter.vue"
import { calculators } from "src/data/calculators"

const leftDrawerOpen = ref(false)

const baseNavItems = [
  { label: "About", to: "/about" }
]

const calculatorNavItems = calculators.map((calculator) => ({
  label: calculator.name,
  to: `/calculators/${calculator.slug}`
}))
</script>

<style scoped>
.brand-link {
  color: inherit;
  text-decoration: none;
}
</style>

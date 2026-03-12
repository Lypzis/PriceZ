<template>
  <footer class="site-footer">
    <div class="content-wrapper footer-content">
      <div class="text-body2 text-grey-7">
        &copy; {{ currentYear }} PriceZ by Lypzis. All rights reserved.
      </div>
      <div class="row items-center q-gutter-xs">
        <q-btn
          flat
          dense
          no-caps
          size="sm"
          label="About"
          to="/about"
        />
        <q-btn
          flat
          dense
          no-caps
          size="sm"
          label="Privacy Policy"
          to="/privacy-policy"
        />
        <q-btn
          flat
          dense
          no-caps
          size="sm"
          label="Terms"
          to="/terms"
        />
        <q-btn
          flat
          dense
          no-caps
          size="sm"
          label="Contact"
          to="/contact"
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  padding: 24px 0;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
</style>

# Product Matrix Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current six static product-category cards with a polished local-image product catalog that exposes six representative items per category, twelve garment items, and accessible click-through product details.

**Architecture:** Keep `/v1` as the default homepage and extract the catalog into typed static data plus a focused client-side `ProductMatrix` feature. Category and product selection remain local UI state; generated 4:5 product artwork is stored under `public/products/` and rendered with `next/image`.

**Tech Stack:** Next.js 16.2 App Router, React 19, TypeScript, Tailwind CSS 4, Node built-in test runner, built-in Image Gen, in-app browser verification.

---

## File map

- Create `src/features/products/product-types.ts`: catalog type contracts.
- Create `src/features/products/product-data.ts`: six categories and product records.
- Create `src/features/products/product-data.test.ts`: structural catalog tests.
- Create `src/features/products/ProductMatrix.tsx`: category grid and interaction state.
- Create `src/features/products/CategoryDrawer.tsx`: accessible category drawer.
- Create `src/features/products/ProductDetail.tsx`: product detail view.
- Create `src/features/products/product-ui.test.ts`: pure state/helper tests where applicable.
- Modify `src/app/v1/page.tsx`: replace inline product data and product section.
- Modify `src/app/globals.css`: dialog, card, focus, reduced-motion, and responsive polish.
- Create `public/products/<category>/*.webp`: generated product and service artwork.

### Task 1: Confirm framework contracts and add catalog types

**Files:**
- Read: `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
- Read: `node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`
- Create: `src/features/products/product-types.ts`

- [ ] **Step 1: Read the bundled Next.js 16 guides**

Run: `sed -n '1,260p' node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md && sed -n '1,260p' node_modules/next/dist/docs/01-app/01-getting-started/12-images.md`

Expected: guidance confirms the client boundary and local `next/image` usage.

- [ ] **Step 2: Define the catalog contracts**

Create exact union types for category IDs and these interfaces:

```ts
export type ProductCategoryId =
  | "garments"
  | "footwear"
  | "masks"
  | "chairs"
  | "flooring"
  | "engineering";

export interface ProductItem {
  id: string;
  categoryId: ProductCategoryId;
  name: string;
  nameEn: string;
  model: string;
  summary: string;
  specs: string[];
  applications: string[];
  image: string;
  imageAlt: string;
  tag?: string;
}

export interface ProductCategory {
  id: ProductCategoryId;
  name: string;
  nameEn: string;
  summary: string;
  stat: string;
  coverImage: string;
  coverAlt: string;
  products: ProductItem[];
}
```

- [ ] **Step 3: Type-check the new contract**

Run: `npx tsc --noEmit`

Expected: exit code 0.

- [ ] **Step 4: Commit the contract**

```bash
git add src/features/products/product-types.ts
git commit -m "feat: define product catalog contracts"
```

### Task 2: Build and test the complete product dataset

**Files:**
- Create: `src/features/products/product-data.test.ts`
- Create: `src/features/products/product-data.ts`

- [ ] **Step 1: Write a failing structural test**

The test must import `productCategories` and assert:

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { productCategories } from "./product-data.ts";

test("catalog exposes six complete categories", () => {
  assert.equal(productCategories.length, 6);
  assert.deepEqual(productCategories.map((category) => category.id), [
    "garments", "footwear", "masks", "chairs", "flooring", "engineering",
  ]);
  for (const category of productCategories) {
    assert.ok(category.products.length >= 6);
    assert.ok(category.products.every((product) => product.specs.length >= 2));
    assert.ok(category.products.every((product) => product.applications.length >= 1));
  }
  assert.equal(productCategories[0].products.length, 12);
  assert.equal(new Set(productCategories.flatMap((category) => category.products.map((product) => product.id))).size, 42);
});
```

- [ ] **Step 2: Run the test and verify failure**

Run: `node --experimental-strip-types --test src/features/products/product-data.test.ts`

Expected: FAIL because `product-data.ts` does not exist.

- [ ] **Step 3: Add all 42 product records**

Create `product-data.ts` with 12 garments and six entries in each remaining category. Use realistic but non-certification product names, distinct models, two to four concise specs, applications, `/products/...` local image paths, and accurate Chinese alt text. Set footwear stat to `系列 8 款`, garments to `12 款`, flooring to `3 类 · 6 方案`, and engineering to `6 项服务`.

- [ ] **Step 4: Run structural and type tests**

Run: `node --experimental-strip-types --test src/features/products/product-data.test.ts && npx tsc --noEmit`

Expected: one passing test and TypeScript exit code 0.

- [ ] **Step 5: Commit the dataset**

```bash
git add src/features/products/product-data.ts src/features/products/product-data.test.ts
git commit -m "feat: add complete product catalog data"
```

### Task 3: Generate and validate the product artwork

**Files:**
- Create: `public/products/garments/*.webp`
- Create: `public/products/footwear/*.webp`
- Create: `public/products/masks/*.webp`
- Create: `public/products/chairs/*.webp`
- Create: `public/products/flooring/*.webp`
- Create: `public/products/engineering/*.webp`

- [ ] **Step 1: Generate the accepted product-matrix concept**

Use built-in Image Gen to create a readable standalone concept of the complete product section: dark navy industrial-tech background, cyan accent, six large category posters, restrained labels, clear hierarchy, no decorative clutter, and a right-side category drawer state.

- [ ] **Step 2: Review the concept before asset production**

Inspect the concept with `view_image`. Reject it if category hierarchy, drawer anatomy, image-to-text balance, or click affordance is unclear.

- [ ] **Step 3: Generate the 42 distinct 4:5 source images**

Issue one built-in Image Gen call per product or service item. Prompts must identify the exact product, distinct color/shape/view, clean premium e-commerce composition, industrial credibility, dark-to-neutral studio setting, no embedded text, no logos, no certification marks, no watermark, no people with malformed anatomy, and no unrelated props.

- [ ] **Step 4: Copy final assets into the project**

Name each image after its product ID, convert oversized PNG/JPEG outputs to high-quality WebP where necessary, and place it in its category folder. Do not overwrite unrelated existing assets.

- [ ] **Step 5: Validate asset inventory and dimensions**

Run a local inventory check that asserts every `image` path from `product-data.ts` exists, every file is decodable, and each image has a portrait aspect ratio near 4:5.

Expected: 42 valid local images, no missing data references.

- [ ] **Step 6: Commit the artwork**

```bash
git add public/products
git commit -m "feat: add product catalog artwork"
```

### Task 4: Implement category and product interaction helpers with tests

**Files:**
- Create: `src/features/products/product-ui.test.ts`
- Create: `src/features/products/product-ui.ts`

- [ ] **Step 1: Write failing helper tests**

Test that `getVisibleProducts(category, page)` returns products 0–5 on page 0 and 6–11 on page 1, clamps non-garment categories to their six representative products, and that `buildInquiryHref(product)` includes the encoded name and model.

- [ ] **Step 2: Verify the tests fail**

Run: `node --experimental-strip-types --test src/features/products/product-ui.test.ts`

Expected: FAIL because helper functions do not exist.

- [ ] **Step 3: Implement the pure helpers**

```ts
export function getVisibleProducts(category: ProductCategory, page: number) {
  const safePage = category.id === "garments" && page === 1 ? 1 : 0;
  return category.products.slice(safePage * 6, safePage * 6 + 6);
}

export function buildInquiryHref(product: ProductItem) {
  return `#联系?product=${encodeURIComponent(`${product.name} ${product.model}`)}`;
}
```

- [ ] **Step 4: Run the helper tests**

Run: `node --experimental-strip-types --test src/features/products/product-ui.test.ts`

Expected: all helper tests pass.

- [ ] **Step 5: Commit the helpers**

```bash
git add src/features/products/product-ui.ts src/features/products/product-ui.test.ts
git commit -m "test: cover product browsing helpers"
```

### Task 5: Build the accessible interactive product feature

**Files:**
- Create: `src/features/products/ProductMatrix.tsx`
- Create: `src/features/products/CategoryDrawer.tsx`
- Create: `src/features/products/ProductDetail.tsx`

- [ ] **Step 1: Implement `ProductMatrix` state and category grid**

Use three state values: selected category ID, selected product ID, and garment page. Render six semantic buttons with `next/image`, category metadata, hover/focus styling hooks, and `aria-haspopup="dialog"`.

- [ ] **Step 2: Implement `CategoryDrawer`**

Render an accessible `role="dialog"` drawer with `aria-modal="true"`, heading linkage, six product buttons, garment page controls, close button, backdrop click, `Escape` handling, scroll locking, and focus restoration.

- [ ] **Step 3: Implement `ProductDetail`**

Render the selected product image, name, English name, model, spec list, application list, back button, close button, and inquiry link. Detail closing must return to the current category without resetting its page.

- [ ] **Step 4: Type-check the feature**

Run: `npx tsc --noEmit`

Expected: exit code 0 with no client/server boundary errors.

- [ ] **Step 5: Commit the feature components**

```bash
git add src/features/products/ProductMatrix.tsx src/features/products/CategoryDrawer.tsx src/features/products/ProductDetail.tsx
git commit -m "feat: add interactive product catalog"
```

### Task 6: Integrate and polish the homepage section

**Files:**
- Modify: `src/app/v1/page.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Remove inline product data from `/v1`**

Delete the six-item `products` constant and replace the existing product-grid markup with `<ProductMatrix />`, preserving the `id="产品"` navigation target and section heading.

- [ ] **Step 2: Add the accepted design tokens and responsive styles**

Add focused styles for poster aspect ratio, navy surfaces, cyan focus rings, drawer/backdrop, dialog motion, two/three/one-column breakpoints, mobile full-screen layout, image overlays, and body scroll lock. Add a `prefers-reduced-motion: reduce` block that disables transforms and transition motion.

- [ ] **Step 3: Run quality checks**

Run: `npm run lint && node --experimental-strip-types --test src/features/products/*.test.ts && npm run build`

Expected: lint passes, all tests pass, and Next.js production build succeeds.

- [ ] **Step 4: Commit the integration**

```bash
git add src/app/v1/page.tsx src/app/globals.css
git commit -m "feat: upgrade homepage product matrix"
```

### Task 7: Verify the complete browser flow and visual fidelity

**Files:**
- Modify only if verification finds a defect.

- [ ] **Step 1: Start the production site locally**

Run: `npm run build && npm run start`

Expected: site starts without runtime errors.

- [ ] **Step 2: Verify desktop behavior**

In the in-app browser, confirm six category cards render, each opens the correct drawer, each drawer shows six products, garments can switch between both sets of six, every product opens details, and all close paths work.

- [ ] **Step 3: Verify responsive behavior**

Check desktop, tablet, and mobile viewports. Confirm no horizontal overflow, mobile drawers are full-screen, controls remain visible, and images retain intentional crops.

- [ ] **Step 4: Verify accessibility behavior**

Use keyboard navigation to open a category, open a product, close with `Escape`, and verify focus returns to the initiating element. Check dialog names and image alt text in the DOM snapshot.

- [ ] **Step 5: Perform final visual comparison**

Capture the implemented product section and detail state. Use `view_image` on both the accepted concept and latest browser screenshot. Continue fixing until hierarchy, spacing, color, imagery, and interaction states are agency-signoff faithful.

- [ ] **Step 6: Re-run final checks after any fix**

Run: `npm run lint && node --experimental-strip-types --test src/features/products/*.test.ts && npm run build`

Expected: all checks pass after the final visual change.

- [ ] **Step 7: Commit verification fixes if needed**

```bash
git add src/app/v1/page.tsx src/app/globals.css src/features/products public/products
git commit -m "fix: polish product catalog experience"
```

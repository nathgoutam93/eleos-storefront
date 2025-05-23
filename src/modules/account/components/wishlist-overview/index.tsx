import { LineItem, Product } from "@medusajs/medusa"
import { Button } from "@medusajs/ui"

import { Region } from "@medusajs/medusa"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"
import WishlistItem from "./wishlist-item"

const WishlistOverview = ({
  wishlist,
  region,
}: // cartId,
{
  wishlist: LineItem[]
  region: Region
  // cartId: string
}) => {
  if (wishlist?.length) {
    return (
      <div className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        {wishlist &&
          wishlist.map((product, index) => (
            <WishlistItem
              key={product.id}
              index={index}
              product={product}
              region={region}
              // cartId={cartId}
            />
          ))}
      </div>
    )
  }

  return (
    <div
      className="w-full flex flex-col items-center gap-y-4"
      //   data-testid="no-orders-container"
    >
      <h2 className="text-large-semi">Nothing to see here</h2>
      <p className="text-base-regular">
        You don&apos;t have any products on wishlist yet {":)"}
      </p>
      <div className="mt-4">
        <LocalizedClientLink href="/" passHref>
          <Button data-testid="continue-shopping-button">
            Find Products You Like
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default WishlistOverview

import {Outfit, Plus_Jakarta_Sans} from "next/font/google"

export const outfit = Outfit({
  subsets:["latin"],
  variable:"--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const jakarta = Plus_Jakarta_Sans({
  subsets:["latin"],
  variable:"--font-jakarta",
  weight:["400","500","600", "700", "800"]
})
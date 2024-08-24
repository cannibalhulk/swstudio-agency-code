import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/#services-sec",
    newTab: false,
    func: function() {
      document.querySelector("#services-sec")?.scrollIntoView({behavior:"smooth"})
    }
  },
  {
    id: 4,
    title: "Blog",
    path: "/blogs",
    newTab: false,
  }
];
export default menuData;

export interface NavbarDataType {
  id: number
  option: string
  slug: string | null
  type: "menu" | "dropdown" | "mega"
  children:
    | null
    | {
        id: number | string
        slug: string
        name: string
      }[]
}

const data: Array<NavbarDataType> = [
  {
    id: 0,
    option: "Home",
    slug: "/",
    type: "menu",
    children: null,
  },
  {
    id: 1,
    option: "Project Gallery",
    slug: "#",
    type: "menu",
    children: null,
  },
  //   {
  //     id: 1,
  //     option: "Options",
  //     slug: null,
  //     type: "dropdown",
  //     children: [
  //       {
  //         id: 0,
  //         slug: "#",
  //         name: "menu 1",
  //       },
  //       {
  //         id: 1,
  //         slug: "#",
  //         name: "menu 2",
  //       },
  //       {
  //         id: 2,
  //         slug: "#",
  //         name: "menu 3",
  //       },
  //     ],
  //   },
  {
    id: 2,
    option: "About us",
    slug: "#",
    type: "menu",
    children: null,
  },
  {
    id: 3,
    option: "Contact",
    slug: "#",
    type: "menu",
    children: null,
  },
]

export default data

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Navigation from "../components/navigation"
import Slider from "../components/slider"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import Footer from "../components/footer"
import Pagination from "../templates/blog-pagination"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const data = useStaticQuery(graphql`{
  desktopLogo: file(absolutePath: {regex: "/FfT_Logo_Desktop.png/"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 100
        placeholder: TRACED_SVG
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
  mobileLogo: file(absolutePath: {regex: "/FfT_Logo_Mobile.png/"}) {
    childImageSharp {
      gatsbyImageData(
        quality: 100
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
        layout: CONSTRAINED
      )
    }
  }
}
`)

const logos = withArtDirection(getImage(data.desktopLogo), [
  {
    media: "(max-width: 1024px)",
    image: getImage(data.mobileLogo),
  },
])

  if (location.pathname === rootPath) {
    header = (
      <div class="px-4 md:ml-20">
        <GatsbyImage image={logos} alt="Fallfish Tenkara" />
      </div>
    )
  } else {
    header = (
      <div class="px-4 md:ml-20">
        <Link to={`/`}>
          <GatsbyImage image={logos} alt="Fallfish Tenkara" />
        </Link>
      </div>
        
    )
  }
  return (
    <div class="flex flex-col">
      <Navigation />
      <header class="pr-2">{header}</header>  
        <div class="hidden md:block w-2/3 mx-auto">
          <Slider />
        </div>
      <div class="bg-gray-200 mb-4 w-full lg:w-2/3 mx-auto overflow-hidden rounded-lg shadow-xl">
        <main>{children}</main>
        <Pagination />
      </div>
        <Footer />
    </div>
  )
}

export default Layout

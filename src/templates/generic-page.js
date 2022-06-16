import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import Section from '../components/section'

const GenericPage = (props) => {
    console.log('PROPS:', props)
    return <Layout>
                <h1>Generic Page: {props.data.datoCmsPage.title}</h1>
                {props.data.datoCmsPage.sections.map(section => (
                    <Section key={section.OriginalId} gridColumns={section.gridColumns} />
                ))}
            </Layout> 
}

export const query = graphql`
query MyQuery($pageIdJim : String) {
    datoCmsPage(title: {}, originalId: {eq: $pageIdJim}) {
        title
        slug
        originalId
        sections {
            originalId
            gridColumns {
              originalId
              desktopWidth
              mobileWidth
              tabletWidth
              content {
                links
                value
                blocks {
                    __typename
                    ... on DatoCmsImageInline{
                        id: originalId
                            image{
                                gatsbyImageData
                            }
                        } 
                    }
                }
            }
        }
    }
}
`

export default GenericPage
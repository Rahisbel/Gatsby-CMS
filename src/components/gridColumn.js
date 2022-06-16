import * as React from 'react'
import ContentRenderer from './contentRenderer'
import './gridColumn.css'

const GridColumn = ({mobileWidth,tabletWidth,desktopWidth,content}) => {
    const ContentRendered = <ContentRenderer content={content} />

    return (
        <>
            <div className='grid-col grid-col-desktop' style={{width: `${desktopWidth}%`}}>{ContentRendered}</div>
            <div className='grid-col grid-col-tablet'  style={{width: `${tabletWidth}%`}}>{ContentRendered}</div>
            <div className='grid-col grid-col-mobile'  style={{width: `${mobileWidth}%`}}>{ContentRendered}</div>
        </>
    )
}

export default GridColumn
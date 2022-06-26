import React from "react"
import ContentLoader from "react-content-loader"

export const VideoLoader = (props: any) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={1150}
    viewBox="0 0 400 460"
    backgroundColor="#4d4d4d"
    foregroundColor="#ccf7ff"
    {...props}
  >
    <circle cx="17" cy="341" r="15" /> 
    <rect rx="2" ry="2" width="470" height="210"/> 
    <rect x="-2" y="245" rx="0" ry="0" width="209" height="15" /> 
    <rect x="-9" y="269" rx="0" ry="0" width="275" height="8" /> 
    <rect x="-9" y="293" rx="0" ry="0" width="275" height="8" /> 
    <rect x="-9" y="304" rx="0" ry="0" width="275" height="8" /> 
    <rect x="-9" y="281" rx="0" ry="0" width="275" height="8" /> 
    <rect x="42" y="331" rx="0" ry="0" width="109" height="8" /> 
    <rect x="43" y="344" rx="0" ry="0" width="75" height="8" /> 
    <rect x="291" y="244" rx="0" ry="0" width="106" height="20" /> 
    <rect x="292" y="273" rx="0" ry="0" width="104" height="21" />
  </ContentLoader>
)


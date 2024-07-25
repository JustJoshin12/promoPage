export const Image = ({src,alt,className}) => (
    <img alt={alt} src={src}  fetchpriority="high" className={className || ""}/>
  );
  
    
export function FooterHyperLinks(props){
    const {item} = props
    return(
        <a href={item.link}>{item.text}</a>
    )
}
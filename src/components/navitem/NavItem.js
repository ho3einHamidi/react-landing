export function NavItem(props){
    const {item} = props
    console.log("🚀 ~ NavItem ~ ellll:", item)
    return (
        <a href={item.link}>{item.text}</a>
    )
}
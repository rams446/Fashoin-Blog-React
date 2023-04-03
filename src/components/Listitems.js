export default function(props){
    
    return(
       
        <ul>
         <li><a className={props.listColor} href="...">{props.name} </a></li>
        <li><a className={props.listColor} href="...">Womens's</a></li>
        <li><a className={props.listColor} href="...">Men's</a></li>
        <li><a className={props.listColor} href="...">On the Street</a></li>
        <li><a className={props.listColor} href="...">The Catwalk</a></li>
        <li><a className={props.listColor} href="...">AdWatch</a></li>
        <li><a className={props.listColor} href="...">About</a></li>
        <li><a className={props.listColor} href="...">{props.name1}</a></li>
       </ul>
    )
}
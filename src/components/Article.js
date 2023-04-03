import logo from './blog-image-1.jpg'
import logo1 from './blog-image-2.jpg'
export default function Article(){
    return (
        <>
        <div className='article'>
        <time>11/12/20</time>
        <h2 class="h2">On the Street in Brooklyn</h2>
        <img src={logo}  alt="logo" />
        <p class="articleP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis laborum officia, aperiam reiciendis quos beatae ipsa illo exercitationem iure maiores dolor ab unde voluptatem eius quas soluta provident eligendi.
        </p>
        <a class="a">Continues</a>
        </div>
        <div className='article'>
        <time>11/11/20</time>
         <h2 class="h2">Vintage in Vogue</h2>
         <img src= {logo1} alt="Blog Image"/>
         <p class="articleP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis laborum officia, aperiam reiciendis quos beatae ipsa illo exercitationem iure maiores dolor ab unde voluptatem eius quas soluta provident eligendi.
         </p>
         <a class="a">Continues</a>
        </div>

        </>
    )
}
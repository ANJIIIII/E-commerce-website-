
import {useDispatch,useSelector} from "react-redux";
import {toast} from "react-hot-toast";
import {add,remove} from "../redux/Slices/CartSlice";


const Product = ({post}) => {

  const {cart} = useSelector((state)=>state)
  const dispatch = useDispatch();

  const addToCart=()=>{
     dispatch(add(post));
     toast.success("item added to cart");
  }

  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("item removed from cart");
 }
  return (<div  className="flex flex-col items-center justify-between 
  hover:scale-105 transition duration-300 ease-in p-4 mt-10 ml-5 rounded-xl shadow-xl outline outline-[#407051] gap-4">
     <div >
      <p className="text-[#27704f] font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
     </div>
     <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
     </div>
     <div className="h-[140px]">
      <img src={post.image} className="h-full w-full "  />
     </div>
     <div className="flex justify-between gap-12 items-center w-full mt-5">
     <div >
      <p className="text-[#28bf50] font-semibold">{post.price}</p>
     </div>
    {
      cart.some((p)=>p.id==post.id)?
      (<button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[8px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
           onClick={removeFromCart}>Remove item</button>):(<button    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[8px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in" onClick={addToCart}>Add to cart</button>)
    }
     </div>
    
  </div>
  );
};

export default Product;

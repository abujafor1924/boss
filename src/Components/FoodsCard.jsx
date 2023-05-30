import { useContext } from "react";
import { AuthContext } from "../Pages/Login&Registretion/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";
import Swal from "sweetalert2";

const FoodsCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const handleCart = () => {
    if (user && user.email) {
      const orderItem = {
        menuitemId: _id,
        name,
        recipe,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Add to cart success",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              title: "Please Login First",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Login now",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/login", { state: { from: location } });
              }
            });
          }
        });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>Price : ${price}</p>
        <div className="card-actions">
          <button
            onClick={() => handleCart(item)}
            className="btn hover:btn-[#1F2937] bg-[#FFFFFF] border-0 border-b-4 text-yellow-600 uppercase border-yellow-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;

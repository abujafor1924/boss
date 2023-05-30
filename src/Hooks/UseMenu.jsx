import { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setmenu] = useState([]);
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        //    const popularitem = data.filter((item) => item.category === "popular");
        setmenu(data);
        setLoding(false);
      });
  }, []);
  return [menu, loding];
};

export default UseMenu;

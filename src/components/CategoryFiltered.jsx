import { useParams } from "react-router";
import { useEffect, useState } from "react";

const CategoryFiltered = () => {
  const { categoryName } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/services?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [categoryName]);

  return (
   
        ))}
      </div>
    </div>
  );
};

export default CategoryFiltered;

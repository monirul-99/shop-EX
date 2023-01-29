import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [makeAdmin, setMakeAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://shop-ex-server-one.vercel.app/my-products/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setMakeAdmin(data.isSeller);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [makeAdmin, adminLoading];
};
export default useSeller;
